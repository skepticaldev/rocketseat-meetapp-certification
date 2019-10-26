import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Content } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório!'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório!'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field
          .min(6, 'A senha deve conter no mínimo 6 caracteres!')
          .required('É necessário inserir a nova senha!')
      : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Para alterar a senha é necessário confirmar a nova senha!')
          .oneOf([Yup.ref('password')], 'Os campos são diferentes!')
      : field
  ),
});

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Content>
      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <button type="submit">
          <MdAddCircleOutline size={22} />
          <span>Salvar perfil</span>
        </button>
      </Form>
    </Content>
  );
}
