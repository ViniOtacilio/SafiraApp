import React from 'react';
import { Container, Title, Input, Label, InputBox, Link, ButtonLogin } from './styles';

const Login = () => {
    return (
      <Container>
        <Title>$AFIRA</Title>
        <InputBox>
          <Label>E-mail:</Label>
          <Input></Input>
        </InputBox>
        <InputBox>
          <Label>Senha:</Label>
          <Input></Input>
        </InputBox>
        <Link>Criar Conta</Link>
        <Link>Esqueci minha senha</Link>
        <ButtonLogin title="Entrar"></ButtonLogin>
      </Container>
    );
  };

export default Login;
