import React from 'react';
import { Container, Title, Input, InputBox, Link, ButtonText, Button } from './styles';
import {  useFonts, Roboto_100Thin, Roboto_100Thin_Italic, Roboto_300Light,  Roboto_300Light_Italic,  Roboto_400Regular,  
  Roboto_400Regular_Italic,  Roboto_500Medium, Roboto_500Medium_Italic,  Roboto_700Bold,  Roboto_700Bold_Italic,
  Roboto_900Black, Roboto_900Black_Italic } from '@expo-google-fonts/roboto';
import { AppLoading } from 'expo';
import { StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  //const Fonts = useFonts({ Roboto_100Thin, Roboto_300Light, Roboto_400Regular });
  //if(!Fonts) {
    //return <AppLoading />
  //}

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
      <Button>
        <ButtonText onPress= { () => navigation.navigate('Dashboard')}>Entrar</ButtonText>
      </Button>
    </Container>
  );
};

const Styles = StyleSheet.create({
  Title: {
    fontFamily: "Roboto_400Regular"
  },
  Container: {
    fontFamily: "Roboto_100Thin"
  },
  Button: {
    fontFamily: "Roboto_300Light"
  }
});

export default Login;
