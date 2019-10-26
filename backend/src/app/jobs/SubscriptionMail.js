import Mail from '../../lib/Mail';

class SubscriptionMail {
  get key() {
    return 'SubscriptionMail';
  }

  async handle({ data }) {
    const { meetup, user } = data;

    await Mail.sendMail({
      to: `${meetup.user.name} <${meetup.user.email}>`,
      subject: `[${meetup.title}] Nova inscricao`,
      template: 'subscription',
      context: {
        organizer: meetup.user.name,
        user: user.name,
        meetup: meetup.title,
        email: user.email,
      },
    });
  }
}

export default new SubscriptionMail();
