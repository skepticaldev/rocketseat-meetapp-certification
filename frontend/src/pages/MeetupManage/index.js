import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Content, SubmitButton } from './styles';
import DatePicker from '~/components/DatePicker';
import BannerInput from './BannerInput';
import { handleScheduleEventRequest } from '~/store/modules/schedule/actions';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório!'),
  description: Yup.string().required('A descrição é obrigatória!'),
  date: Yup.date().required('A data e é obrigatória!'),
  location: Yup.string().required('A localização é obrigatória!'),
  banner: Yup.number().required('É necessário uma imagem para o meetup!'),
});

export default function MeetupManage({ location: { state } }) {
  const meetup = state || {};
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
      <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
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

MeetupManage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};
