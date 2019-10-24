import React, { useEffect, useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import { loadMeetupsRequest } from '~/store/modules/meetups/actions';
import { handleSubscriptionRequest } from '~/store/modules/subscriptions/actions';
import * as Type from '~/util/constants/type';

import Background from '~/components/Background';
import Header from '~/components/Header';
import MeetupCard from '~/components/MeetupCard';

import { Container, List, DateHeader, DateButton, DateText } from './styles';

function Dashboard({ isFocused }) {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetups.list);
  const page = useSelector(state => state.meetups.page);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  function loadMore() {
    const nextPage = page + 1;
    dispatch(loadMeetupsRequest(date, nextPage));
  }

  useEffect(() => {
    dispatch(loadMeetupsRequest(date, 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, isFocused]);

  function handleSubscription(id, intent) {
    dispatch(handleSubscriptionRequest(id, intent));
  }

  return (
    <Background>
      <Header />
      <Container>
        <DateHeader>
          <DateButton onPress={handlePrevDay}>
            <Icon name="navigate-before" size={38} color="#FFF" />
          </DateButton>
          <DateText>{dateFormatted}</DateText>
          <DateButton onPress={handleNextDay}>
            <Icon name="navigate-next" size={38} color="#FFF" />
          </DateButton>
        </DateHeader>
        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          onEndReachedThreshold={0.2}
          onEndReached={loadMore}
          renderItem={({ item }) => (
            <MeetupCard
              meetup={item}
              handleSubscription={() =>
                handleSubscription(
                  item.id,
                  item.subscribed ? Type.Unsubscribe : Type.Subscribe
                )
              }
            />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={22} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
