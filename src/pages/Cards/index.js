import React, { Component } from "react";
import {
  Container,
  Header,
  UserBox,
  HeaderTitle,
  ContentBox,
  Link,
  PageTitle,
  Input,
  Text,
  ButtonBox,
  Button,
  ButtonText
} from "./styles";
import APIKit from "../../utils/APIKit";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";
import { TextInputMask } from 'react-native-masked-text';
import { StyleSheet } from 'react-native';

const initialState = {
  mes: "",
  errorMessage: "",
  categoriaInputMoradia: "",
  categoriaInputSupermercado: "",
  categoriaInputTransporte: "",
  categoriaInputLazer: "",
  categoriaInputSaude: "",
  categoriaInputContas: "",
  categoriaInputRD: "",
  categoriaInputOutros: "",
  text: "",
  total: 0,
  errors: {},
  errorState: false,
  isAuthorized: false,
};

class Cards extends Component {

  state = initialState;
    
      constructor() {
        super();
        this.state = {
          userId: "",
          isAuthenticated: false,
          userName: "",
          date: new Date(Date.now()),
          showStartDate: false,
          showFinalDate: false,
          start_date: new Date(Date.now()),
          end_date: new Date(Date.now()),
        };
      }
    
      componentWillUnmount() {}
    
      async componentDidMount() {
        const userId = await AsyncStorage.getItem("userId");
        const userName = await AsyncStorage.getItem("username");
    
        if (userId == null || userId == "null") {
          this.props.navigation.navigate("Login");
        } else {
          this.setState({ userId: userId });
          this.setState({ userName: userName });
          this.setState({ isAuthenticated: true });
        }

        const onSuccess = ({ data }) => {
            this.setState({ userName: userName });
            this.setState({ isAuthenticated: true });
            this.setState({ x: data });
        };

        APIKit.get("/api/cards/getCard?user_id=169").then(onSuccess);
      }

      
  render() {
    return (
      <Container>
        <Header>
          <UserBox>
            <FontAwesome name="user-circle" size={26} color="#DAE3E5" />
            <HeaderTitle>Olá, {this.state.userName}!</HeaderTitle>
          </UserBox>
          <AntDesign
            name="close"
            size={24}
            color="#DAE3E5"
            onPress={() => this.props.navigation.navigate("HamburguerMenu")}
          />
        </Header>
        <ContentBox>
            <Link onPress={() => this.props.navigation.navigate("CardAdd")}>
                Adicionar Cartão
            </Link>
        </ContentBox>
      </Container>
    );
  }
}

export default Cards;