import React, { useEffect, useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { loadMeetupsRequest } from '~/store/modules/meetups/actions';
import { handleSubscriptionRequest } from '~/store/modules/subscriptions/actions';
import * as Type from '~/util/constants/type';

import Background from '~/components/Background';
import Header from '~/components/Header';
import MeetupCard from '~/components/MeetupCard';

import { Container, List, DateHeader, DateButton, DateText } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetups.list);
  console.tron.log(meetups);
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

  useEffect(() => {
    async function loadMeetups() {
      dispatch(loadMeetupsRequest(date, 1));
    }

    loadMeetups();
  }, [date, dispatch]);

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
          renderItem={({ item }) => (
            <MeetupCard
              meetup={item}
              handleSubscription={() =>
                handleSubscription(
                  item.id,
                  item.subscribed ? Type.Unsubscribe : Type.Subscribe
                )
              }
              label={
                item.subscribed ? 'Cancelar inscricao' : 'Realizar iniscricao'
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
