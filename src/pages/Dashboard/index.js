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

const releaseCollection = [];

class Dashboard extends Component {
  constructor() {
    super();
    this.state = { x: [] };
  }

  componentWillUnmount() {}
  componentDidMount() {
    const onSuccess = ({ data }) => {
      this.setState({ x: data });
      console.log(this.state.x);
     // this.setReleaseCollection({ data: data });
      //console.log(this.releaseCollection.data)
      //this.releaseCollection.map((data) => {
       // console.log(data.value);
      //});
    };
    const user_id = 33;
    APIKit.get("/api/users/lancamento/?user_id=" + user_id).then(onSuccess)//.catch(onFailure);
  }

  render() {
    console.log('ver o teste');
    console.log(this.state.x);
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
          {this.state.x.map((data, index) => {
            if (data.tipo_de_transacao == 1) {
               data.tipo_de_transacao = 'Entrada';
            } else {
               data.tipo_de_transacao = 'Saída';
            }
            return (
              <HistoricItem key={'historic-item-' + index}>
                <MaterialIcons key={'historic-icon-' +index} name="attach-money" size={32} color="black" />
                <HistoricTextBox key={'historic-text-box-' + index}>
                  <HistoricTextTitle key={'historic-text-title-' + index}>{data.tipo_de_transacao}</HistoricTextTitle>
                  <HistoricText key={'historic-text-' + index}>{data.titulo_lancamento + ' - ' + 'R$' + data.value}</HistoricText>
                </HistoricTextBox>
              </HistoricItem>
            );
          })}
        </HistoricBox>
        <Ionicons name="ios-add-circle-outline" size={44} color="#FAFAFF" style={{textAlign: 'center'}} 
          onPress={() => this.props.navigation.navigate("RegisterTransactions")}/>
      </Container>
    );
  }
}

export default Dashboard;
