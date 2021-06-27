import React, { Component } from "react";
import {
  Container,
  HeaderBox,
  Title,
  Input,
  InputBox,
  ButtonText,
  Button,
} from "./styles";
import APIKit from "../../utils/APIKit";
import { AntDesign } from "@expo/vector-icons";
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
import { StyleSheet } from "react-native";

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

  // const Fonts = useFonts({ Roboto_100Thin, Roboto_300Light, Roboto_400Regular });
  // if(!Fonts) {
  //   return <AppLoading />
  // }

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
          <Title style={Styles.Title}>Criar Conta</Title>
          <Title></Title>
        </HeaderBox>
        {/* <Title>Criar Conta</Title> */}
        <InputBox>
          <Input
            style={Styles.Container}
            placeholder="Nome"
            value={this.state.name}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onNameChange}
          ></Input>
        </InputBox>
        <InputBox>
          <Input
            style={Styles.Container}
            placeholder="E-mail"
            value={this.state.email}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onEmailChange}
          ></Input>
        </InputBox>
        <InputBox>
          <Input
            style={Styles.Container}
            placeholder="Senha"
            value={this.state.password}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onPasswordChange}
          ></Input>
        </InputBox>
        <InputBox>
          <Input
            style={Styles.Container}
            placeholder="Confirmar senha"
            value={this.state.passwordRepeated}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onPasswordRepeatedChange}
          ></Input>
        </InputBox>
        {/* <Button
        onPress={this.onPressLogin.bind(this)}
        >Criar</Button> */}
        <Button>
          <ButtonText
            style={Styles.Button}
            onPress={this.onPressLogin.bind(this)}
          >
            Criar
          </ButtonText>
        </Button>
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

// const Register = ({ navigation }) => {
//   const Fonts = useFonts({ Roboto_100Thin, Roboto_300Light, Roboto_400Regular });
//   if(!Fonts) {
//     return <AppLoading />
//   }
//   return (
//     <Container>
//       <HeaderBox>
//         <AntDesign name="arrowleft" size={30} color="#FAFAFF" onPress={ () => navigation.navigate('Login') } />
//         <Title style={ Styles.Title }>Criar Conta</Title>
//         <Title></Title>
//       </HeaderBox>
//       <InputBox>
//         <Input placeholder="Nome" style={ Styles.Container }></Input>
//       </InputBox>
//       <InputBox>
//         <Input placeholder="E-mail" style={ Styles.Container }></Input>
//       </InputBox>
//       <InputBox>
//         <Input placeholder="Senha" style={ Styles.Container }></Input>
//       </InputBox>
//       <InputBox>
//         <Input placeholder="Confirmar senha" style={ Styles.Container }></Input>
//       </InputBox>
//       <Button>
//         <ButtonText style={ Styles.Button }>Criar</ButtonText>
//       </Button>
//     </Container>
//   );
// };

export default Register;
