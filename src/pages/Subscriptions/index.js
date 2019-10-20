import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container, List } from './styles';
import MeetupCard from '~/components/MeetupCard';

export default function Subscriptions() {
  const subscriptions = useSelector(state => state.subscriptions.subs);
  return (
    <Background>
      <Header />
      <Container>
        <List
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <MeetupCard meetup={item.meetup} subscribed />
          )}
        />
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={22} color={tintColor} />
  ),
};
