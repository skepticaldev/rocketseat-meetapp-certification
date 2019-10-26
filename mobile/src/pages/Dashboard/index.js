/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import { loadMeetupsRequest } from '~/store/modules/meetups/actions';
import { handleSubscriptionRequest } from '~/store/modules/subscriptions/actions';

import Background from '~/components/Background';
import Header from '~/components/Header';
import MeetupCard from '~/components/MeetupCard';

import {
  Container,
  List,
  DateHeader,
  DateButton,
  DateText,
  LoadingView,
  EmptyList,
  EmptyText,
} from './styles';

function Dashboard({ isFocused }) {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetups.list);
  const page = useSelector(state => state.meetups.page);
  const userId = useSelector(state => state.user.profile.id);
  const subsLoading = useSelector(state => state.subscriptions.loading);
  const meetupsLoading = useSelector(state => state.meetups.loading);
  const [date, setDate] = useState(new Date());

  console.tron.log(meetups);
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

  function handleSubscription(id, subscribed) {
    dispatch(handleSubscriptionRequest(id, subscribed));
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
        {meetupsLoading && meetups.length <= 0 ? (
          <LoadingView>
            <ActivityIndicator size="large" color="rgba(255,255,255,0.4)" />
          </LoadingView>
        ) : meetups.length <= 0 ? (
          <EmptyList>
            <Icon
              name="event-busy"
              color="rgba(255, 255, 255, 0.4)"
              size={120}
            />
            <EmptyText>Não há meetups para esta data</EmptyText>
          </EmptyList>
        ) : (
          <List
            data={meetups}
            keyExtractor={item => String(item.id)}
            onEndReachedThreshold={0.2}
            onEndReached={loadMore}
            refreshing={meetupsLoading}
            onRefresh={() => dispatch(loadMeetupsRequest(date, 1))}
            renderItem={({ item }) => (
              <MeetupCard
                meetup={item}
                isOwner={item.user_id === userId}
                loading={subsLoading}
                handleSubscription={() =>
                  handleSubscription(item.id, item.subscribed)
                }
              />
            )}
          />
        )}
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
