import React, { Component } from "react";
import {
  Container,
  Header,
  UserBox,
  HeaderTitle,
  ContentBox,
  Link,
  CardBox,
  CardTitle,
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
  errors: {},
  errorState: false,
  isAuthorized: false,
};

class Cards extends Component {

  state = initialState;
    
      constructor() {
        super();
        this.state = {
          isAuthenticated: false,
          x: [],
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

        const onFailure = (error) => {
            console.log(error)
        };

        APIKit.get("/api/cards/getCard?user_id=" + userId )
            .then(onSuccess)
            .catch(onFailure);
      }

      async onPressDelete() {
        const user_id = await AsyncStorage.getItem("userId");
        const card_name = 'cartao';
        const payload = {
            card_name,
            user_id,
        };
        console.log(payload)
        const onSuccess = ({ data }) => {
            console.log('cartão deletado')
        };

        const onFailure = (error) => {
            console.log('Erro para deletar cartão')
        };
        //APIKit.post("/api/cards/deleteCard")
        //    .then(onSuccess)
        //    .catch(onFailure);
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
            <PageTitle>Meus Cartões</PageTitle>
            <CardBox>
                <CardTitle>cartão 1</CardTitle>
                <AntDesign name="delete" size={20} color="rgb(80, 125, 188)" 
                    onPress={() => {
                        this.onPressDelete();
                    }}/>
            </CardBox>
            <Link onPress={() => this.props.navigation.navigate("CardAdd")}>
                Adicionar Cartão
            </Link>
        </ContentBox>
      </Container>
    );
  }
}

export default Cards;