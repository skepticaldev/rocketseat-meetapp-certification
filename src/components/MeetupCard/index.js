import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Banner, Content, Title, Field, TextField } from './styles';

import Button from '~/components/Button';
import banner from '~/assets/bannertest.jpeg';

export default function MeetupCard() {
  return (
    <Container>
      <Banner source={banner} />
      <Content>
        <Title>Meetup de React Native</Title>
        <Field>
          <Icon name="event" size={16} color="#999" />
          <TextField>24 de Junho, as 20h</TextField>
        </Field>
        <Field>
          <Icon name="location-on" size={16} color="#999" />
          <TextField>Rua Guilherme Gembala, 260</TextField>
        </Field>
        <Field>
          <Icon name="person" size={16} color="#999" />
          <TextField>Organizador: Luiz Philipe</TextField>
        </Field>
        <Button>Realizar inscricao</Button>
      </Content>
    </Container>
  );
}
