import React from 'react';
import { Container, Title, Input, Label, InputBox, Button } from './styles';

const Register = () => {
    return (
      <Container>
        <Title>Criar Conta</Title>
        <InputBox>
          <Input placeholder="Nome"></Input>
        </InputBox>
        <InputBox>
          <Input placeholder="E-mail"></Input>
        </InputBox>
        <InputBox>
          <Input placeholder="Senha"></Input>
        </InputBox>
        <InputBox>
          <Input placeholder="Confirmar senha"></Input>
        </InputBox>
        <Button>Criar</Button>
      </Container>
    );
  };

export default Register;