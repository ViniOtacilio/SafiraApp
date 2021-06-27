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
} from "./styles";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
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
  // isLoading: false,
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

  // const Login = ({ navigation }) => {
  //   const Fonts = useFonts({ Roboto_100Thin, Roboto_300Light, Roboto_400Regular });
  //   if(!Fonts) {
  //     return <AppLoading />
  //   }
  render() {
    return (
      <Container>
        <Title style={Styles.Title}>$AFIRA</Title>
        <InputBox>
          <Input
            placeholder="E-mail"
            style={Styles.Container}
            value={this.state.email}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onEmailChange}
          ></Input>
        </InputBox>
        <InputBox>
          <Input
            placeholder="Senha"
            style={Styles.Container}
            value={this.state.password}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onPasswordChange}
          ></Input>
        </InputBox>
        <Link
          onPress={() => this.props.navigation.navigate("Register")}
          style={Styles.Container}
        >
          Criar Conta
        </Link>
        <Button>
          <ButtonText
            onPress={this.onPressLogin.bind(this)}
            style={Styles.Button}
          >
            Entrar
          </ButtonText>
        </Button>
        {this.state.errorState && (
          <View>
            <Text>Erro no Login</Text>
          </View>
        )}
      </Container>
    );
  }
}

const Styles = StyleSheet.create({
  Title: {
    fontFamily: "Roboto_400Regular",
  },
  Container: {
    fontFamily: "Roboto_100Thin",
  },
  Button: {
    fontFamily: "Roboto_300Light",
  },
});

export default Login;
