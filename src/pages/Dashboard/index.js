import React, { Component } from "react"; 
import {
  Container,
  DashboardHeader,
  UserBox,
  Title,
  Text,
  HistoricBox,
  HistoricItem,
  HistoricItemLeft,
  HistoricTextBox,
  HistoricTextTitle,
  HistoricText,
  IconBox
} from "./styles";
import APIKit from "../../utils/APIKit";
import {
  SimpleLineIcons,
  Ionicons,
  FontAwesome,
  MaterialIcons,
  AntDesign
} from "@expo/vector-icons";
import { AppLoading } from "expo";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';
import { translate } from '../../locales'

const initialState = {
  isAuthenticated: false,
};
class Dashboard extends Component {
  constructor() {
    super();
    this.state = { x: [], isAuthenticated: false, userName: '', saldo: [], lastRefresh: Date(Date.now()).toString(), shouldUpdate: ""};
    this.refreshScreen = this.refreshScreen.bind(this)
  }

  refreshScreen() {
    this.setState({ lastRefresh: Date(Date.now()).toString() });
    this.setState({ shouldUpdate: "true"});
    this.props.route.params = null;
  }

  componentWillUnmount() {}

  async componentDidMount() {
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
  
  async componentDidUpdate() {
    
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

    if(this.state.shouldUpdate == "true") {
      console.log('entrou aqui?')
      APIKit.get("/api/users/saldo/?user_id=" + userId).then(onSuccessSaldo);
      APIKit.get("/api/users/lancamento/?user_id=" + userId).then(onSuccess);
      this.setState({ shouldUpdate: false});
    }

    if (this.props.route.params) {
      const onSuccess = ({ data }) => {
        this.setState({ x: data }); 
      };
      APIKit.get("/api/users/lancamento/?user_id=" + userId + this.props.route.params.filterUrl).then(onSuccess);  
      this.props.route.params = null;
    }
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
            } 
            if (data.tipo_de_transacao == 2) {
              data.tipo_de_transacao = "Saída";
            }
            if (data.value) {
              data.value = data.value.replace(".", ",");
              var value = data.value.split(',');
            }
            if (data.data_lancamento) {
              var formatted_date = data.data_lancamento.split('T');
              var formatted_date_split = formatted_date[0].split('-');
              var formatted_date_br = formatted_date_split[2] + '/' + formatted_date_split[1] + '/' + formatted_date_split[0];
            }
            return (
              <HistoricItem key={"historic-item-" + index}>
                <HistoricItemLeft>
                  <MaterialIcons
                    key={"historic-icon-" + index}
                    name="attach-money"
                    size={24}
                    color="#FAFAFF"
                  />
                  <HistoricTextBox key={"historic-text-box-" + index}>
                    <HistoricTextTitle key={"historic-text-title-" + index}>
                      {data.tipo_de_transacao + ' - ' + data.titulo_lancamento}
                    </HistoricTextTitle>
                    <HistoricText key={"historic-text-" + index}>
                      {"R$" + value[0].concat(',', value[1].substring(0,2)) + ' - ' + formatted_date_br}
                    </HistoricText>
                  </HistoricTextBox>
                </HistoricItemLeft>
                <MaterialIcons 
                  name="description" 
                  size={24} 
                  color="#FAFAFF" 
                  onPress={() => this.props.navigation.navigate("TransactionDescription", {id: data.id} )}/>
              </HistoricItem>
            );
          })}
        </HistoricBox>
        <IconBox>
        <Ionicons
          name="ios-add-circle-outline"
          size={44}
          color="#FAFAFF"
          style={{ textAlign: "right" }}
          onPress={() => this.props.navigation.navigate("RegisterTransactions")}
        />
        <AntDesign 
          name="filter" 
          size={38} 
          color="#FAFAFF"
          onPress={() => this.props.navigation.navigate("Filter")} 
        />
        <Ionicons
          name="refresh-circle-outline"
          size={44}
          color="#FAFAFF"
          style={{ textAlign: "left" }}
          onPress={this.refreshScreen}
        />  
        </IconBox>
      </Container>
    );
  }
}

export default Dashboard;
