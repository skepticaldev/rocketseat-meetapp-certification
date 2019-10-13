import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="MeetApp" />
      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />
        <button type="submit">Entrat</button>
        <Link to="/register">Criar conta grátis</Link>
      </form>
    </>
  );
}
