import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from './styles';
import DatePicker from '~/components/DatePicker';
import BannerInput from './BannerInput';
import { handleScheduleEventRequest } from '~/store/modules/schedule/actions';

export default function MeetupManage(props) {
  const { meetup } = props.location.state || {};
  const dispatch = useDispatch();

  function handleSubmit({ banner, title, description, date, location }) {
    dispatch(
      handleScheduleEventRequest(
        meetup && meetup.id,
        banner,
        title,
        description,
        date,
        location
      )
    );
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="banner" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição completa" />
        <DatePicker name="date" />
        <Input name="location" placeholder="Localização" />
        <button type="submit" onSubmit={handleSubmit}>
          Salvar perfil
        </button>
      </Form>
    </Container>
  );
}
