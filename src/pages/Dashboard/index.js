import React, { Component } from "react";
import {
  Container,
  DashboardHeader,
  UserBox,
  Title, 
  Text, 
  HistoricBox,
  HistoricItem,
  HistoricTextBox,
  HistoricTextTitle,
  HistoricText
} from "./styles";
import APIKit from "../../utils/APIKit";
import { 
  SimpleLineIcons, 
  Ionicons, 
  FontAwesome,
  MaterialIcons 
} from '@expo/vector-icons';
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
        <DashboardHeader>
          <UserBox>
            <FontAwesome name="user-circle" size={26} color="#FAFAFF" />
            <Title>Olá, Fulano!</Title>
          </UserBox>
          <SimpleLineIcons name="menu" size={24} color="#FAFAFF" />
        </DashboardHeader>
        <Text>Saldo: R$5.000,00</Text>
        <HistoricBox>
          <HistoricItem>
            <MaterialIcons name="attach-money" size={32} color="black" />
            <HistoricTextBox>
              <HistoricTextTitle>Entrada</HistoricTextTitle>
              <HistoricText>Salário - R$2500,00</HistoricText>
            </HistoricTextBox>
          </HistoricItem>
          <HistoricItem>
            <MaterialIcons name="attach-money" size={32} color="black" />
            <HistoricTextBox>
              <HistoricTextTitle>Saída</HistoricTextTitle>
              <HistoricText>Valorant - R$90,00</HistoricText>
            </HistoricTextBox>
          </HistoricItem>
          <HistoricItem>
            <MaterialIcons name="attach-money" size={32} color="black" />
            <HistoricTextBox>
              <HistoricTextTitle>Saída</HistoricTextTitle>
              <HistoricText>Valorant - R$90,00</HistoricText>
            </HistoricTextBox>
          </HistoricItem>
          <HistoricItem>
            <MaterialIcons name="attach-money" size={32} color="black" />
            <HistoricTextBox>
              <HistoricTextTitle>Saída</HistoricTextTitle>
              <HistoricText>Valorant - R$90,00</HistoricText>
            </HistoricTextBox>
          </HistoricItem>
          <HistoricItem>
            <MaterialIcons name="attach-money" size={32} color="black" />
            <HistoricTextBox>
              <HistoricTextTitle>Saída</HistoricTextTitle>
              <HistoricText>Valorant - R$90,00</HistoricText>
            </HistoricTextBox>
          </HistoricItem>
          <HistoricItem>
            <MaterialIcons name="attach-money" size={32} color="black" />
            <HistoricTextBox>
              <HistoricTextTitle>Saída</HistoricTextTitle>
              <HistoricText>Valorant - R$90,00</HistoricText>
            </HistoricTextBox>
          </HistoricItem>
          <HistoricItem>
            <MaterialIcons name="attach-money" size={32} color="black" />
            <HistoricTextBox>
              <HistoricTextTitle>Saída</HistoricTextTitle>
              <HistoricText>Valorant - R$90,00</HistoricText>
            </HistoricTextBox>
          </HistoricItem>
        </HistoricBox>
        <Ionicons name="ios-add-circle-outline" size={44} color="#FAFAFF" style={{textAlign: 'center'}} 
          onPress={() => this.props.navigation.navigate("RegisterTransactions")}/>
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
