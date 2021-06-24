import React from 'react';
import { Container, HeaderBox, Title, Input, InputBox, Button } from './styles';
import { AntDesign } from '@expo/vector-icons';

const Register = ({ navigation }) => {
    return (
      <Container>
        <HeaderBox>
          <AntDesign name="arrowleft" size={30} color="#FAFAFF" onPress={ () => navigation.navigate('Login') } />
          <Title>Criar Conta</Title>
          <Title></Title>
        </HeaderBox>
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