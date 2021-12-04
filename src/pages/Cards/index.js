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
  ButtonText,
  ListAllCards,
  EachCard,
  CardName
  
} from "./styles";
import APIKit from "../../utils/APIKit";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";
import { TextInputMask } from 'react-native-masked-text';
import { StyleSheet } from 'react-native';
import { RefreshControl } from "react-native";

const initialState = {
  errors: {},
  errorState: false,
  isAuthorized: false,
  refreshing: false
};

class Cards extends Component {

  state = initialState;
    
      constructor() {
        super();
        this.state = {
          isAuthenticated: false,
          x: [],
          allCards: []
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
        const onFailure = (error) => {
            console.log(error)
        };

        APIKit.get("/api/cards/getCard?user_id=" + userId )
            .then(this.getCard)
            .catch(onFailure);
      }

      getCard = (data) => {
        this.setState({ refreshing: false });
        let cardData = data.data;
        let auxArray = [];
    
        cardData.forEach(function (item,index) {
          var aux = {nome: item.card_name, value: item.card_id}
          auxArray.push(aux);
        });
        this.setState({ allCards: auxArray });
        console.log(this.state.allCards)
      }


      async onPressDelete(data) {
        const user_id = await AsyncStorage.getItem("userId");
        const card_name = data;
        console.log(card_name);
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

        APIKit.post("/api/cards/deleteCard", payload)
           .then(this.onRefresh)
           .catch(onFailure);
      }

      onRefresh = async () => {
        this.setState({ refreshing: true });
        try {
          const userId = await AsyncStorage.getItem("userId");
          const userName = await AsyncStorage.getItem("username");
    
          if (userId == null || userId == "null") {
            this.props.navigation.navigate("Login");
          } else {
            this.setState({ userId: userId });
            this.setState({ userName: userName });
            this.setState({ isAuthenticated: true });
          }
    
          await APIKit.get("/api/cards/getCard?user_id=" + userId )
          .then(this.getCard)
          .catch();

        } catch (error) {
          console.log(error);
        }
      };

      
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
          
            <ListAllCards>
            {this.state.allCards.map((item, key) => {
              return (
                <EachCard
                  refreshControl={
                    <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={this.onRefresh}
                    />
                  }
                  key={"custom-category" + key}
                >
                  <CardTitle key={"custom-category-name" + key}>
                    {item.nome}
                  </CardTitle>
                  <AntDesign
                    name="delete"
                    size={20}
                    onPress={() => {this.onPressDelete(item.nome)}}/>
                </EachCard>
              );
            })}
          </ListAllCards>
                {/* <CardTitle>cartão 1</CardTitle>
                <AntDesign name="delete" size={20} color="rgb(80, 125, 188)" 
                    onPress={() => {
                        this.onPressDelete();
                    }}/> */}
            
            <Link onPress={() => this.props.navigation.navigate("CardAdd")}>
                Adicionar Cartão
            </Link>
        </ContentBox>
      </Container>
    );
  }
}

export default Cards;