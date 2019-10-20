import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Banner, Content, Title, Field, TextField } from './styles';

import Button from '~/components/Button';

export default function MeetupCard({ meetup }) {
  const subscribed = useSelector(state =>
    state.subscriptions.subs.find(s => s.meetup.id === meetup.id)
  );

  function handleSubscribe() {
    console.tron.log('subscribing');
  }
  function handleUnsubscribe() {
    console.tron.log('unsubscribing');
  }

  const bannerUrl = __DEV__
    ? meetup.banner.url.replace('localhost', '192.168.88.128')
    : meetup.banner.url;

  return (
    <Container>
      <Banner source={{ uri: bannerUrl }} />
      <Content>
        <Title>{meetup.title}</Title>
        <Field>
          <Icon name="event" size={16} color="#999" />
          <TextField>{meetup.formattedDate}</TextField>
        </Field>
        <Field>
          <Icon name="location-on" size={16} color="#999" />
          <TextField>{meetup.location}</TextField>
        </Field>
        <Field>
          <Icon name="person" size={16} color="#999" />
          <TextField>Organizador: {meetup.user.name}</TextField>
        </Field>
        <Button onPress={subscribed ? handleUnsubscribe : handleSubscribe}>
          {subscribed ? 'Cancelar inscricao' : 'Realizar inscricao'}
        </Button>
      </Content>
    </Container>
  );
}
