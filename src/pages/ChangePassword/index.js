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
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";

class ChangePassword extends Component {
  render() {
    return (
      <Container>
        <CloseIcon>
          <AntDesign name="close" size={24} color="#507DBC" onPress={() => this.props.navigation.navigate("Login")} />
        </CloseIcon>
        <HeaderBox>
          <Title>Mudar Senha</Title>
        </HeaderBox>
        <InputBox>
          <Input
            placeholder={'Nova senha'}
            placeholderTextColor="#fff"
          ></Input>
        </InputBox>
        <Text>
          teste
        </Text>
        <Button>
          <ButtonText
            
          >
            Salvar nova senha
          </ButtonText>
        </Button>
      </Container>
    );
  }
}

export default ChangePassword;
