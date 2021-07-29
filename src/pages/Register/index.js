import React, { Component } from "react";
import {
  Container,
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



const initialState = {
  name: "",
  email: "",
  password: "",
  repeatedPassword: "",
  errors: {},
  errorState: false,
  isAuthorized: false,
};

class Register extends Component {
  state = initialState;

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

  onPasswordRepeatedChange = (passwordRepeated) => {
    this.setState({ passwordRepeated });
  };

  onPressLogin() {
    const { name, email, password, passwordRepeated } = this.state;
    const payload = { name, email, password, passwordRepeated };
    // console.log(payload);
    this.setState({errorState: false});

    const onSuccess = ({ data }) => {
      try {
        AsyncStorage.setItem('userId', data.userId);
        var value = AsyncStorage.setItem('username', data.userName);
      }
      catch (e) {
        console.log(e);
      }
      this.props.navigation.navigate("Dashboard");
      this.setState({isAuthorized: true});
      console.log(value);
    };

    const onFailure = (error) => {
      // console.log("A partir daqui é erro :")
      // console.log(error && error.response);
      // this.setState({ errors: error.response.data });
      this.setState({ errorState: true });
    };

    // Show spinner when call is made
    // this.setState({isLoading: true});

    APIKit.post("/api/users/register", payload).then(onSuccess).catch(onFailure);
  }

  render() {
    return (
      <Container>
        <HeaderBox>
          <AntDesign
            name="arrowleft"
            size={30}
            color="#FAFAFF"
            onPress={() => this.props.navigation.navigate("Login")}
          />
          <Title>Criar Conta</Title>
        </HeaderBox>
        <InputBox>
          <Input
            placeholder="Nome"
            value={this.state.name}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onNameChange}
          ></Input>
        </InputBox>
        <InputBox>
          <Input
            placeholder={translate('placeholderEmail')}
            value={this.state.email}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onEmailChange}
          ></Input>
        </InputBox>
        <InputBox>
          <Input
            secureTextEntry={true}
            placeholder="Senha"
            value={this.state.password}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onPasswordChange}
          ></Input>
        </InputBox>
        <InputBox>
          <Input
            secureTextEntry={true}
            placeholder="Confirmar senha"
            value={this.state.passwordRepeated}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onPasswordRepeatedChange}
          ></Input>
        </InputBox>
        <Button>
          <ButtonText
            onPress={this.onPressLogin.bind(this)}
          >
            Criar
          </ButtonText>
        </Button>
        {this.state.errorState && (
          <View>
            <ErrorText>Erro no Cadastro</ErrorText>
          </View>
        )}
      </Container>
    );
  }
}

export default Register;
