import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Banner, Content, Title, Field, TextField } from './styles';

import Button from '~/components/Button';

export default function MeetupCard({ meetup, handleSubscription, label }) {
  const bannerUrl = __DEV__
    ? meetup.banner.url.replace('localhost', '192.168.43.194')
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
        {!meetup.past && <Button onPress={handleSubscription}>{label}</Button>}
      </Content>
    </Container>
  );
}
