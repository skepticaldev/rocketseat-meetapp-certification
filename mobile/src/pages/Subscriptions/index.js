import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container, List } from './styles';
import MeetupCard from '~/components/MeetupCard';

import {
  loadSubscriptionsRequest,
  handleSubscriptionRequest,
} from '~/store/modules/subscriptions/actions';

function Subscriptions({ isFocused }) {
  const dispatch = useDispatch();
  const subscriptions = useSelector(state => state.subscriptions.subs);
  const loading = useSelector(state => state.subscriptions.loading);

  useEffect(() => {
    async function loadSubs() {
      dispatch(loadSubscriptionsRequest());
    }

    loadSubs();
  }, [dispatch, isFocused]);

  function handleSubscription(id, subscribed) {
    dispatch(handleSubscriptionRequest(id, subscribed));
  }

  return (
    <Background>
      <Header />
      <Container>
        <List
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <MeetupCard
              meetup={item.meetup}
              loading={loading}
              handleSubscription={() =>
                handleSubscription(item.meetup_id, item.meetup.subscribed)
              }
            />
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

export default withNavigationFocus(Subscriptions);
