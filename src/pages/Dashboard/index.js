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
  IconBox
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
import { translate } from '../../locales'

const initialState = {
  isAuthenticated: false,
};
class Dashboard extends Component {
  constructor() {
    super();
    this.state = { x: [], isAuthenticated: false, userName: '', saldo: [], lastRefresh: Date(Date.now()).toString(), shouldUpdate: false};
    this.refreshScreen = this.refreshScreen.bind(this)
  }

  refreshScreen() {
    this.setState({ lastRefresh: Date(Date.now()).toString() });
    this.setState({ shouldUpdate: true});
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

    if(this.state.shouldUpdate == true) {
      console.log('entrou aqui?')
      APIKit.get("/api/users/saldo/?user_id=" + userId).then(onSuccessSaldo);
      APIKit.get("/api/users/lancamento/?user_id=" + userId).then(onSuccess);
      this.setState({ shouldUpdate: false});
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
        <IconBox>
        <Ionicons
          name="ios-add-circle-outline"
          size={44}
          color="#FAFAFF"
          style={{ textAlign: "right" }}
          onPress={() => this.props.navigation.navigate("RegisterTransactions")}
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
