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

const initialState = {
  isAuthenticated: false,
};
class Dashboard extends Component {
  constructor() {
    super();
    this.state = { x: [], isAuthenticated: false, userName: '' };
  }

  componentWillUnmount() {}

  async componentDidMount() {
    const userId = await AsyncStorage.getItem("userId");
    if(userId == null || userId == "null") {
      this.props.navigation.navigate("Login"); 
    }
    const onSuccess = ({ data }) => {
      const userName = AsyncStorage.getItem("userName");
      this.setState({ userName: userName });
      this.setState({ isAuthenticated: true });
      this.setState({ x: data });
      console.log(userName);
      console.log(this.state.userName);
    };
    console.log(userId); 

    APIKit.get("/api/users/lancamento/?user_id=" + userId).then(onSuccess); //.catch(onFailure);
  }

  render() {
    console.log(this.state.userName);
    return (
      <Container>
        <DashboardHeader>
          <UserBox>
            <FontAwesome name="user-circle" size={26} color="#FAFAFF" />
            <Title>Olá, FUlano!</Title>
          </UserBox>
          <SimpleLineIcons
            name="menu"
            size={24}
            color="#FAFAFF"
            onPress={() => this.props.navigation.navigate("HamburguerMenu")}
          />
        </DashboardHeader>
        <Text>Saldo: R$5.000,00</Text>
        <HistoricBox>
          {this.state.x.map((data, index) => {
            if (data.tipo_de_transacao == 1) {
              data.tipo_de_transacao = "Entrada";
            } else {
              data.tipo_de_transacao = "Saída";
            }
            if (data.value) {
              data.value = data.value.replace(".", ",").substring(0, 5);
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
                    {data.titulo_lancamento + " - " + "R$" + data.value}
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

export default Dashboard;
