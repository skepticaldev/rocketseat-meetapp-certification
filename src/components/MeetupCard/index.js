import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';

import { physicalDevice, local } from '~/util/constants/address';
import * as Type from '~/util/constants/type';
import { handleSubscriptionRequest } from '~/store/modules/subscriptions/actions';

import { Container, Banner, Content, Title, Field, TextField } from './styles';

import Button from '~/components/Button';

export default function MeetupCard({ meetup }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.subscriptions.loading);

  function handleSubscription() {
    dispatch(
      handleSubscriptionRequest(
        meetup.id,
        meetup.subscribed ? Type.Unsubscribe : Type.Subscribe
      )
    );
  }

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
          <TextField>Organizador: {meetup.user.name}</TextField>
        </Field>
        {!meetup.past && (
          <Button onPress={handleSubscription} loading={loading === meetup.id}>
            {meetup.subscribed ? 'Cancelar inscricao' : 'Realiza inscricao'}
          </Button>
        )}
      </Content>
    </Container>
  );
}
