import React, { Component } from "react";
import {
  Container,
  CloseIcon,
  HeaderBox,
  Title,
  Input,
  InputBox,
  ButtonText,
  Button,
  Text,
  ErrorText,
} from "./styles";
import APIKit from "../../utils/APIKit";
import { AntDesign } from "@expo/vector-icons";
import { AppLoading } from "expo";
import { StyleSheet, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translate } from '../../locales'


class ForgetPassword extends Component {

  componentWillUnmount() {}

  onNameChange = (name) => {
    this.setState({ name });
  };

  onEmailChange = (email) => {
    this.setState({ email });
  };

  onPasswordChange = (password) => {
    this.setState({ password });
  };

  onPasswordRepeatedChange = (repeatedPassword) => {
    this.setState({ repeatedPassword });
  };

   async onPressLogin() {
  }

  render() {
    return (
      <Container>
        <CloseIcon>
          <AntDesign name="close" size={24} color="#FAFAFF" onPress={() => this.props.navigation.navigate("Login")} />
        </CloseIcon>
        <HeaderBox>
          <Title>Recuperar Senha</Title>
        </HeaderBox>
        <InputBox>
          <Input
            placeholder={'E-mail'}
            autoCapitalize="none"
            autoCorrect={false}
          ></Input>
        </InputBox>
        <Button>
          <ButtonText
          >
            Recuperar
          </ButtonText>
        </Button>
      </Container>
    );
  }
}

export default ForgetPassword;