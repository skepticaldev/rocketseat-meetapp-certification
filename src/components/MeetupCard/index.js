import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Banner, Content, Title, Field, TextField } from './styles';

import Button from '~/components/Button';
import banner from '~/assets/bannertest.jpeg';

export default function MeetupCard({ meetup }) {
  return (
    <Container>
      <Banner source={banner} />
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
        <Button>Realizar inscricao</Button>
      </Content>
    </Container>
  );
}
