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

const initialState = {
  newPassword: "",
  errors: {},
  errorState: false,
  isAuthorized: false,
};


class ChangePassword extends Component {
  state = initialState;

  componentWillUnmount() {}

  onNewPasswordChange = (newPassword) => {
    this.setState({ newPassword });
  };

  async onPressSave() {
    const { newPassword } = this.state;
    console.log(newPassword)
    this.setState({errorState: false});

    //APIKit.post("/api/users/resetPassword/" + token, newPassword).then(onSuccess).catch(onFailure);
    /*const { email } = this.state;
    const payload = { email };
    console.log(payload);
    this.setState({errorState: false});

    const onSuccess = async ({ data }) => {
      try {
        this.setState({ message: "Cheque seu email." });
        console.log('teste')
        console.log(data);
      }
      catch (e) {
        this.setState({ message: "Erro." });
        console.log(e);
      }
    };

    const onFailure = (error) => {
      this.setState({ errorState: true });
    };

    APIKit.post("/api/users/forgotPassword", payload).then(onSuccess).catch(onFailure);*/
  }
  
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
            secureTextEntry={true}
            placeholder={'Nova senha'}
            placeholderTextColor="#fff"
            value={this.state.newPassword}
            onChangeText={this.onNewPasswordChange}
            autoCapitalize="none"
            autoCorrect={false}
          ></Input>
        </InputBox>
        <Text>
          teste
        </Text>
        <Button>
          <ButtonText
            onPress={this.onPressSave.bind(this)}
          >
            Salvar nova senha
          </ButtonText>
        </Button>
      </Container>
    );
  }
}

export default ChangePassword;
