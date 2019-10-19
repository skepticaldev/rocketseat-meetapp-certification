import * as Yup from 'yup';
import { isBefore, parseISO, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';
import File from '../models/File';
import User from '../models/User';
import Meetup from '../models/Meetup';

class MeetupController {
  async index(req, res) {
    const page = req.query.page || 1;
    const where = {};

    if (req.query.date) {
      const searchDate = parseISO(req.query.date);

      where.date = {
        [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
      };
    }

    const meetups = await Meetup.findAll({
      where,
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: File,
          as: 'banner',
          attributes: ['name', 'path', 'url'],
        },
      ],
      limit: 10,
      offset: 10 * page - 10,
    });

    return res.json(meetups);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      banner_id: Yup.number().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (isBefore(parseISO(req.body.date), new Date())) {
      return res.status(400).json({ error: 'Invalid date' });
    }

    const user_id = req.userId;

    const meetup = await Meetup.create({ ...req.body, user_id });

    return res.json(meetup);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      banner_id: Yup.number(),
      description: Yup.string(),
      location: Yup.string(),
      date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const user_id = req.userId;

    const meetup = await Meetup.findByPk(req.params.id);

    if (user_id !== meetup.user_id) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    if (meetup.past) {
      return res.status(400).json({ error: "Can't update past meetups" });
    }

    if (isBefore(parseISO(req.body.date), new Date())) {
      return res.status(400).json({ error: 'Invalid date' });
    }

    await meetup.update(req.body);

    const {
      id,
      title,
      description,
      banner,
      location,
      date,
    } = await Meetup.findByPk(req.params.id, {
      include: [
        {
          model: File,
          as: 'banner',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({ id, title, description, banner, location, date });
  }

  async delete(req, res) {
    const meetup = await Meetup.findByPk(req.params.id);

    if (!meetup) {
      return res.status(400).json({ error: 'Meetup not found' });
    }

    const user_id = req.userId;

    if (user_id !== meetup.user_id) {
      return res.status(401).json({ error: 'Not authorized' });
    }

    if (meetup.past) {
      return res.status(400).json({ error: 'Meetup already happens' });
    }

    await meetup.destroy();

    return res.send();
  }
}

export default new MeetupController();
