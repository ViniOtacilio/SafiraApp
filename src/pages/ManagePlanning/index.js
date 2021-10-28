import React, { Component } from "react";
import {
  Container,
  Header,
  UserBox,
  HeaderTitle,
  ContentBox,
  PageTitle,
  Input,
  Text,
  Button,
  ButtonText
} from "./styles";
import APIKit from "../../utils/APIKit";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";

class ManagePlanning extends Component {

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
            onPress={() => this.props.navigation.navigate("MonthlyPlanning")}
          />
        </Header>
        <ContentBox>
            <PageTitle>Vou Gastar:</PageTitle>
            <Input
                placeholder="Moradia"
                value="Moradia"
                autoCapitalize="none"
                autoCorrect={false}
                >
            </Input>
            <Input
                placeholder="Supermercado"
                value="Supermercado"
                autoCapitalize="none"
                autoCorrect={false}
                >
            </Input>
            <Input
                placeholder="Transporte"
                value="Transporte"
                autoCapitalize="none"
                autoCorrect={false}
                >
            </Input>
            <Input
                placeholder="Lazer"
                value="Lazer"
                autoCapitalize="none"
                autoCorrect={false}
                >
            </Input>
            <Input
                placeholder="Saúde"
                value="Saúde"
                autoCapitalize="none"
                autoCorrect={false}
                >
            </Input>
            <Input
                placeholder="Contas"
                value="Contas"
                autoCapitalize="none"
                autoCorrect={false}
                >
            </Input>
            <Input
                placeholder="Restaurante/Delivery"
                value="Restaurante/Delivery"
                autoCapitalize="none"
                autoCorrect={false}
                >
            </Input>
            <Input
                placeholder="Outros"
                value="Outros"
                autoCapitalize="none"
                autoCorrect={false}
                >
            </Input>
            <Text>Total: R$</Text>
            <Button>
              <ButtonText>
                Salvar
              </ButtonText>
            </Button>
        </ContentBox>
      </Container>
    );
  }
}

export default ManagePlanning;