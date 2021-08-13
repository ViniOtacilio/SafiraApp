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
import { StyleSheet, View, aSYN } from "react-native";
import APIKit from "../../utils/APIKit";
import { render } from "react-dom";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translate } from '../../locales'


const initialState = {
  email: "",
  password: "",
  errors: {},
  errorState: false,
  isAuthenticated: false,
};

class Login extends Component {
  state = initialState;
  componentWillUnmount() {}

  async componentDidMount() {
    // this.getUserData();
    const userId = await AsyncStorage.getItem('userId');

   
      const { navigate } = this.props.navigation;
      if(userId == null || userId == "null"){
          navigate("Login");
      }
      else{

          navigate("Dashboard");
      } 
 
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
    this.setState({ errorState: false });

    const onSuccess = ({ data }) => {
      try {
        AsyncStorage.setItem('userId', data.userId);
        AsyncStorage.setItem('username', data.userName);
      }
      catch (e) {
        console.log(e);
      }

      this.props.navigation.navigate("Dashboard");
      this.setState({isAuthenticated: true});
    };

    const onFailure = (error) => {
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
            placeholder={translate('placeholderPassword')}
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
        <Link
          onPress={() => this.props.navigation.navigate("ForgetPassword")}
        >
          Esqueceu sua senha?
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
                    <ErrorText>{translate('loginError')}</ErrorText>
          </View>
        )}
      </Container>
    );
  }
}

export default Login;
