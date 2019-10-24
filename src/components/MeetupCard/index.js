import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { physicalDevice, local } from '~/util/constants/address';

import { Container, Banner, Content, Title, Field, TextField } from './styles';

import Button from '~/components/Button';

export default function MeetupCard({
  meetup,
  isOwner,
  loading,
  handleSubscription,
}) {
  const bannerUrl = __DEV__
    ? meetup.banner.url.replace(local, physicalDevice)
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
          <TextField>
            Organizador: {isOwner ? 'Voce' : meetup.user.name}
          </TextField>
        </Field>
        {!meetup.past && !isOwner && (
          <Button onPress={handleSubscription} loading={loading === meetup.id}>
            {meetup.subscribed ? 'Cancelar inscricao' : 'Realiza inscricao'}
          </Button>
        )}
      </Content>
    </Container>
  );
}
