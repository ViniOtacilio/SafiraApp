import React, { Component } from "react";
import {
  Container,
  HeaderBox,
  Text
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

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <AntDesign
            name="arrowleft"
            size={30}
            color="#FAFAFF"
            onPress={() => this.props.navigation.navigate("Login")}
          />
        <HeaderBox>
        
            <Text> Usuário Logado</Text>
        </HeaderBox>
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

export default Dashboard;
