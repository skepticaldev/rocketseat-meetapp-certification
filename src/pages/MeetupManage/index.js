import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Content, SubmitButton } from './styles';
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
    <Content>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="banner" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <DatePicker name="date" />
        <Input name="location" placeholder="Localização" />
        <SubmitButton type="submit" onSubmit={handleSubmit}>
          <MdAddCircleOutline size={22} />
          <span>Salvar meetup</span>
        </SubmitButton>
      </Form>
    </Content>
  );
}
