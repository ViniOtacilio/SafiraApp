import React, { useState, Component } from "react";
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
  HistoricText,
} from "./styles";
import APIKit from "../../utils/APIKit";
import {
  SimpleLineIcons,
  Ionicons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { AppLoading } from "expo";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { translate } from '../../locales'

const initialState = {
  isAuthenticated: false,
};
class DashboardClass extends Component {
  constructor() {
    super();
    this.state = { x: [], isAuthenticated: false, userName: '', saldo: [] };
  }

  componentWillUnmount() {}

  async componentDidMount() {
    console.log(this.props.transactionsData)
    const userId = await AsyncStorage.getItem("userId");
    const userName = await AsyncStorage.getItem("username");

    if(userId == null || userId == "null") {
      this.props.navigation.navigate("Login"); 
    }
    const onSuccess = ({ data }) => {
      this.setState({ userName: userName });
      this.setState({ isAuthenticated: true });
      this.setState({ x: data });
    };

    const onSuccessSaldo = ({ data }) => {
      this.setState({ saldo: data });
    };
    
    APIKit.get("/api/users/saldo/?user_id=" + userId).then(onSuccessSaldo);
    APIKit.get("/api/users/lancamento/?user_id=" + userId).then(onSuccess);
  }

  render() {
    return (
      <Container>
        <DashboardHeader>
          <UserBox>
            <FontAwesome name="user-circle" size={26} color="#FAFAFF" />
            <Title>{translate('hello')}, {this.state.userName}!</Title>
          </UserBox>
          <SimpleLineIcons
            name="menu"
            size={24}
            color="#FAFAFF"
            onPress={() => this.props.navigation.navigate("HamburguerMenu")}
          />
        </DashboardHeader>
          {this.state.saldo.map((data, index) => {
            data.value = data.value.replace(".", ",");
            var saldo = data.value.split(',');
              return (
                  <Text key={index}>{translate('balance')}: R${saldo[0].concat(',', saldo[1].substring(0, 2))}</Text>
            )
          })}
        <HistoricBox>
          {this.state.x.map((data, index) => {
            if (data.tipo_de_transacao == 1) {
              data.tipo_de_transacao = "Entrada";
            } else {
              data.tipo_de_transacao = "Saída";
            }
            if (data.value) {
              data.value = data.value.replace(".", ",");
              var value = data.value.split(',');
            }
            return (
              <HistoricItem key={"historic-item-" + index}>
                <MaterialIcons
                  key={"historic-icon-" + index}
                  name="attach-money"
                  size={32}
                  color="black"
                />
                <HistoricTextBox key={"historic-text-box-" + index}>
                  <HistoricTextTitle key={"historic-text-title-" + index}>
                    {data.tipo_de_transacao}
                  </HistoricTextTitle>
                  <HistoricText key={"historic-text-" + index}>
                    {data.titulo_lancamento + " - " + "R$" + value[0].concat(',', value[1].substring(0,2))}
                  </HistoricText>
                </HistoricTextBox>
              </HistoricItem>
            );
          })}
        </HistoricBox>
        <Ionicons
          name="ios-add-circle-outline"
          size={44}
          color="#FAFAFF"
          style={{ textAlign: "center" }}
          onPress={() => this.props.navigation.navigate("RegisterTransactions")}
        />
      </Container>
    );
  }
}


const Dashboard = () => {
  const navigation = useNavigation();
  const transactionsData = ['teste'];
  useFocusEffect(
    React.useCallback(() => {
      const transactionsUpdate = async () => {
        const userId = await AsyncStorage.getItem("userId");
        console.log(userId)
        console.log('enter');
        const onSuccess = ({ data }) => {
          console.log(data)
        }; 
        const onSuccessSaldo = ({ data }) => {
          console.log(data)
        };    
        APIKit.get("/api/users/lancamento/?user_id=" + userId).then(onSuccess);
        APIKit.get("/api/users/saldo/?user_id=" + userId).then(onSuccessSaldo);
     }
     transactionsUpdate();
    }, transactionsData),
  );
  return (
    <DashboardClass navigation={navigation} transactionsData={transactionsData} ></DashboardClass>
  );
}

export default Dashboard;
