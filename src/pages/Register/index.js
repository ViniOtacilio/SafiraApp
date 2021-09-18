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

  onPasswordRepeatedChange = (repeatedPassword) => {
    this.setState({ repeatedPassword });
  };

  async onPressLogin() {
    const { name, email, password, repeatedPassword } = this.state;
    const payload = { name, email, password, repeatedPassword };
    this.setState({ errorState: false });

    const onSuccess = async ({ data }) => {
      try {
        console.log(data);
        let userID = data.userId.toString();
        await AsyncStorage.setItem("userId", userID);
        AsyncStorage.setItem("username", data.userName);
      } catch (e) {
        console.log(e);
      }
      this.props.navigation.navigate("Dashboard");
      this.setState({ isAuthorized: true });
    };

    const onFailure = (error) => {
      this.setState({ errorState: true });
    };

    APIKit.post("/api/users/register", payload)
      .then(onSuccess)
      .catch(onFailure);
  }

  render() {
    return (
      <Container>
        <CloseIcon>
          <AntDesign
            name="close"
            size={24}
            color="#507DBC"
            onPress={() => this.props.navigation.navigate("Login")}
          />
        </CloseIcon>
        <HeaderBox>
          <Title>Criar Conta</Title>
        </HeaderBox>
        <InputBox>
          <Input
            placeholder={translate("placeholderName")}
            placeholderTextColor="#fff" 
            value={this.state.name}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onNameChange}
          ></Input>
        </InputBox>
        <InputBox>
          <Input
            placeholder={translate("placeholderEmail")}
            placeholderTextColor="#fff" 
            value={this.state.email}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onEmailChange}
          ></Input>
        </InputBox>
        <InputBox>
          <Input
            secureTextEntry={true}
            placeholder={translate("placeholderPassword")}
            placeholderTextColor="#fff" 
            value={this.state.password}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onPasswordChange}
          ></Input>
        </InputBox>
        <InputBox>
          <Input
            secureTextEntry={true}
            placeholder={translate("placeholderConfirmPassword")}
            placeholderTextColor="#fff" 
            value={this.state.repeatedPassword}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onPasswordRepeatedChange}
          ></Input>
        </InputBox>
        <Button>
          <ButtonText onPress={this.onPressLogin.bind(this)}>Criar</ButtonText>
        </Button>
        {this.state.errorState && (
          <View>
            <ErrorText>{translate("registrationError")}</ErrorText>
          </View>
        )}
      </Container>
    );
  }
}

export default Register;
