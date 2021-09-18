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
import { translate } from '../../locales';

const initialState = {
  email: "",
  errors: {},
  errorState: false,
  isAuthorized: false,
};

class ForgetPassword extends Component {
  state = initialState;

  constructor() {
    super();
    this.state = {
      message: '',
    };
  }

  componentWillUnmount() {}

  onEmailChange = (email) => {
    this.setState({ email });
  };

  async onPressRecover() {
    const { email } = this.state;
    const payload = { email };
    console.log(payload);
    this.setState({errorState: false});

    const onSuccess = async ({ data }) => {
      try {
        this.setState({ message: "Cheque seu email." });
        console.log(data);
      }
      catch (e) {
        console.log(e);
      }
    };

    const onFailure = (error) => {
      this.setState({ errorState: true });
    };

    APIKit.post("/api/users/forgotPassword", payload).then(onSuccess).catch(onFailure);
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
            value={this.state.email}
            onChangeText={this.onEmailChange}
            placeholder={'E-mail'}
            autoCapitalize="none"
            autoCorrect={false}
          ></Input>
        </InputBox>
        <Text>
          {this.state.message}
        </Text>
        <Button>
          <ButtonText
            onPress={this.onPressRecover.bind(this)}
          >
            Recuperar
          </ButtonText>
        </Button>
      </Container>
    );
  }
}

export default ForgetPassword;