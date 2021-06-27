import React, { Component } from "react";
import { Container, Title, Input, Label, InputBox, Button } from "./styles";
import APIKit from "../../utils/APIKit";

const initialState = {
  name: "",
  email: "",
  password: "",
  repeatedPassword: "",
  errors: {},
  isAuthorized: false,
  // isLoading: false,
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
    console.log(payload);

    const onSuccess = ({ data }) => {
      // Set JSON Web Token on success
      // setClientToken(data.token);
      console.log(data);
      // this.setState({isLoading: false, isAuthorized: true});
    };

    const onFailure = (error) => {
      console.log(error && error.response);
      this.setState({ errors: error.response.data });
    };

    // Show spinner when call is made
    // this.setState({isLoading: true});

    APIKit.post("/users/register", payload).then(onSuccess).catch(onFailure);
  }

  render() {
    return (
      <Container>
        <Title>Criar Conta</Title>
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
            placeholder="E-mail"
            value={this.state.email}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onEmailChange}
          ></Input>
        </InputBox>
        <InputBox>
          <Input
            placeholder="Senha"
            value={this.state.password}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onPasswordChange}
          ></Input>
        </InputBox>
        <InputBox>
          <Input
            placeholder="Confirmar senha"
            value={this.state.passwordRepeated}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onPasswordRepeatedChange}
          ></Input>
        </InputBox>
        <Button
        onPress={this.onPressLogin.bind(this)}
        >Criar</Button>
      </Container>
    );
  }
}

export default Register;
