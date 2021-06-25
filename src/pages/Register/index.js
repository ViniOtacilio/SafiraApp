import React from 'react';
import { Container, HeaderBox, Title, Input, InputBox, ButtonText, Button } from './styles';
import { AntDesign } from '@expo/vector-icons';
import {  useFonts, Roboto_100Thin, Roboto_100Thin_Italic, Roboto_300Light,  Roboto_300Light_Italic,  Roboto_400Regular,  
  Roboto_400Regular_Italic,  Roboto_500Medium, Roboto_500Medium_Italic,  Roboto_700Bold,  Roboto_700Bold_Italic,
  Roboto_900Black, Roboto_900Black_Italic } from '@expo-google-fonts/roboto';
import { AppLoading } from 'expo';
import { StyleSheet } from 'react-native';

const Register = ({ navigation }) => {
  const Fonts = useFonts({ Roboto_100Thin, Roboto_300Light, Roboto_400Regular });
  if(!Fonts) {
    return <AppLoading />
  }
  return (
    <Container>
      <HeaderBox>
        <AntDesign name="arrowleft" size={30} color="#FAFAFF" onPress={ () => navigation.navigate('Login') } />
        <Title style={ Styles.Title }>Criar Conta</Title>
        <Title></Title>
      </HeaderBox>
      <InputBox>
        <Input placeholder="Nome" style={ Styles.Container }></Input>
      </InputBox>
      <InputBox>
        <Input placeholder="E-mail" style={ Styles.Container }></Input>
      </InputBox>
      <InputBox>
        <Input placeholder="Senha" style={ Styles.Container }></Input>
      </InputBox>
      <InputBox>
        <Input placeholder="Confirmar senha" style={ Styles.Container }></Input>
      </InputBox>
      <Button>
        <ButtonText style={ Styles.Button }>Criar</ButtonText>
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

export default Register;