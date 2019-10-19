import React from 'react';
import { Text } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Backgorund from '~/components/Background';
// import { Container } from './styles';

export default function SignIn() {
  return (
    <Backgorund>
      <Text>SignIn</Text>
      <Input
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="Digite seu nome"
      />

      <Button>Entrar</Button>
    </Backgorund>
  );
}
