import React, { Component } from "react";
import {
  Container,
  Title,
  Input,
  InputBox,
  Link,
  ButtonText,
  Button,
  Text,
  ErrorText
} from "./styles";
import { AppLoading } from "expo";
import { StyleSheet, View } from "react-native";
import APIKit from "../../utils/APIKit";
import { render } from "react-dom";

const initialState = {
  email: "",
  password: "",
  errors: {},
  errorState: false,
  isAuthorized: false,
};

class Login extends Component {
  state = initialState;

  componentWillUnmount() {}

  componentDidMount() {
    console.log(this.state);
  }

  onEmailChange = (email) => {
    this.setState({ email });
  };

  onPasswordChange = (password) => {
    this.setState({ password });
  };

  onPressLogin() {
    const { email, password } = this.state;
    const payload = { email, password };
    console.log(payload);
    this.setState({ errorState: false });

    const onSuccess = ({ data }) => {
      // Set JSON Web Token on success
      // setClientToken(data.token);
      console.log(data);
      this.props.navigation.navigate("Dashboard");
      // this.setState({isLoading: false, isAuthorized: true});
    };

    const onFailure = (error) => {
      // console.log("A partir daqui é erro :");
      // console.log(error && error.response);
      // this.setState({ errors: error.response.data });
      // this.setState({ errors: "Erro no login" });
      this.setState({ errorState: true });
    };

    // Show spinner when call is made
    // this.setState({isLoading: true});

    APIKit.post("/users/login", payload).then(onSuccess).catch(onFailure);
  }

  render() {
    return (
      <Container>
        <Title>$AFIRA</Title>
        <InputBox>
          <Input
            placeholder="E-mail"
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
        <Link
          onPress={() => this.props.navigation.navigate("Register")}
        >
          Criar Conta
        </Link>
        <Button>
          <ButtonText
            onPress={this.onPressLogin.bind(this)}
          >
            Entrar
          </ButtonText>
        </Button>
        {this.state.errorState && (
          <View>
            <ErrorText>Erro no Login</ErrorText>
          </View>
        )}
      </Container>
    );
  }
}

export default Login;
