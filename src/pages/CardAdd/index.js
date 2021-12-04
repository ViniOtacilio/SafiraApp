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
  card_name: "",
  errors: {},
  errorState: false,
  isAuthorized: false,
};

class CardAdd extends Component {

  state = initialState;
    
      constructor() {
        super();
        this.state = {
          isAuthenticated: false,
        };
      }
    
      componentWillUnmount() {}

      onCardNameChange = (card_name) => {
        this.setState({ card_name });
      };
    
    
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
      }
    
      async onPressSave() {
        const user_id = await AsyncStorage.getItem("userId");

        const { card_name } = this.state;
        const payload = {
            card_name,
            user_id,
        };
        console.log(payload)

        const onSuccess = ({ data }) => {
            console.log(data)
            console.log('aqui deu bom')
        };

        const onFailure = (error) => {
            console.log(error)
            console.log('aqui deu ruim')
        };

        APIKit.post("/api/cards/createCard", payload)
            .then(onSuccess)
            .catch(onFailure);
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
            onPress={() => this.props.navigation.navigate("Cards")}
          />
        </Header>

        <ContentBox>
            <PageTitle>
                Adicionar Cartão
            </PageTitle>
            <Input
                placeholder="Nome"
                value={this.card_name}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.onCardNameChange}
                >
            </Input>
            <ButtonBox >
                <ButtonText onPress={this.onPressSave.bind(this)}>
                    Adicionar
                </ButtonText>
            </ButtonBox>
        </ContentBox>
      </Container>
    );
  }
}

export default CardAdd;