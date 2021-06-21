import React from 'react';
import { Container, Title, Input, InputBox, Link, Button } from './styles';

const Login = () => {
    return (
      <Container>
        <Title>$AFIRA</Title>
        <InputBox>
          <Input placeholder="E-mail"></Input>
        </InputBox>
        <InputBox>
          <Input placeholder="Senha"></Input>
        </InputBox>
        <Link>Criar Conta</Link>
        <Button>Entrar</Button>
      </Container>
    );
  };

export default Login;
