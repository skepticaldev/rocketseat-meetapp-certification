import React, { useMemo } from 'react';
import { parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import pt from 'date-fns/locale/pt';
import {
  MdLocationOn,
  MdDeleteForever,
  MdCreate,
  MdToday,
} from 'react-icons/md';
import { cancelScheduleEventRequest } from '~/store/modules/schedule/actions';
import history from '~/services/history';

import { Content, Button, Details, Footer } from './styles';

export default function MeetupDetails({ location: { state } }) {
  const { meetup } = state;
  const dispatch = useDispatch();

  const dateParsed = useMemo(() => {
    return format(parseISO(meetup.date), "d 'de' MMMM ', às' k':'mm'h'", {
      locale: pt,
    });
  }, [meetup.date]);

  function handleManage() {
    history.push({ pathname: '/manage', state: meetup });
  }

  function handleCancel() {
    dispatch(cancelScheduleEventRequest(meetup.id));
  }

  return (
    <Content>
      <header>
        <strong>{meetup.title}</strong>
        <div>
          <Button type="button" color="#4DBAF9" onClick={handleManage}>
            <MdCreate size={20} />
            <span>Editar</span>
          </Button>
          <Button type="button" color="#D44059" onClick={handleCancel}>
            <MdDeleteForever size={20} />
            <span>Cancelar</span>
          </Button>
        </div>
      </header>
      <Details>
        <img src={meetup.banner.url} alt={meetup.title} />
        <h2>{meetup.description}</h2>
        <br />
        <h2>
          Caso queira participar como palestrante do meetup envie um e-mail para{' '}
          {meetup.user.email}
        </h2>
        <Footer>
          <div>
            <MdToday size={24} color="rgba(255, 255, 255, 0.6)" />
            <span>{dateParsed}</span>
          </div>
          <div>
            <MdLocationOn size={24} color="rgba(255, 255, 255, 0.6)" />
            <span>{meetup.location}</span>
          </div>
        </Footer>
      </Details>
    </Content>
  );
}
