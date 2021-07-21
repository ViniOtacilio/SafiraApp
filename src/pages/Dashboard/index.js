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
import { AppLoading } from "expo";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  isAuthenticated: false,
};
class Dashboard extends Component {
  componentDidMount() {
    const value = AsyncStorage.getItem('userId');
    const value2 = AsyncStorage.getItem('userName');
    this.setState({isAuthenticated: true});
    console.log(value,value2);
  }

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

export default Dashboard;
