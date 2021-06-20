import React from 'react';
import { Container, Title, Input, Label, InputBox, Button } from './styles';

const Register = () => {
    return (
      <Container>
        <Title>Criar Conta</Title>
        <InputBox>
          <Label>Nome:</Label>
          <Input></Input>
        </InputBox>
        <InputBox>
          <Label>E-mail:</Label>
          <Input></Input>
        </InputBox>
        <InputBox>
          <Label>Senha:</Label>
          <Input></Input>
        </InputBox>
        <InputBox>
          <Label>Confirmar senha:</Label>
          <Input></Input>
        </InputBox>
        <Button title="Criar"></Button>
      </Container>
    );
  };

export default Register;