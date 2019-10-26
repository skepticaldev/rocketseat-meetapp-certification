import Mail from '../../lib/Mail';

class SubscriptionMail {
  get key() {
    return 'SubscriptionMail';
  }

  async handle({ data }) {
    const { meetup, user } = data;

    await Mail.sendMail({
      to: `${meetup.User.name} <${meetup.User.email}>`,
      subject: `[${meetup.title}] Nova inscricao`,
      template: 'subscription',
      context: {
        organizer: meetup.User.name,
        user: user.name,
        meetup: meetup.title,
        email: user.email,
      },
    });
  }
}

export default new SubscriptionMail();
