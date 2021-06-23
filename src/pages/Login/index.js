import React from 'react';
import { Container, Title, Input, InputBox, Link, Button } from './styles';

const Login = ({ navigation }) => {
    return (
      <Container>
        <Title>$AFIRA</Title>
        <InputBox>
          <Input placeholder="E-mail"></Input>
        </InputBox>
        <InputBox>
          <Input placeholder="Senha"></Input>
        </InputBox>
        <Link onPress={ () => navigation.navigate('Register') }>
          Criar Conta
        </Link>
        <Button>Entrar</Button>
      </Container>
    );
  };

export default Login;
