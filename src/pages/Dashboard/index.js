import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Content, Button } from './styles';
import Meetup from '~/components/Meetup';
import { loadScheduleRequest } from '~/store/modules/schedule/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const schedule = useSelector(state => state.schedule.meetups);

  useEffect(() => {
    dispatch(loadScheduleRequest());
  }, [dispatch]);

  return (
    <Content>
      <header>
        <h1>Meus meetups</h1>
        <Button type="button" to="/manage">
          <span>Novo meetup</span>
        </Button>
      </header>
      <ul>
        {schedule.map(meetup => (
          <Meetup key={meetup.id} data={meetup} />
        ))}
      </ul>
    </Content>
  );
}
