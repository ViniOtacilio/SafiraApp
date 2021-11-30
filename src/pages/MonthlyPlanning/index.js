import React, { Component } from "react";
import {
  Container,
  Header,
  UserBox,
  HeaderTitle,
  ContentBox,
  PageTitle,
  Link,
  ScrollingButtonMenuBox,
  PlanningContent,
  PlanningBox,
  PlanningTitle
} from "./styles";
import APIKit from "../../utils/APIKit";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";
import ScrollingButtonMenu from 'react-native-scroll-menu';

let menus = [
  {
      name: 'Dez/21',
      id: 'dez-21',
      backgroundColor: 'red',
      borderColor: '#388E3C',
  },
  {
      name: 'Jan/22',
      id: 'jan-22',
  },
  {
      name: 'Fev/22',
      id: 'fev-22',
  },
  {
      name: 'Mar/22',
      id: 'mar-22',
  }
  ,
  {
      name: 'Abr/22',
      id: 'abr-22',
  },
  {
      name: 'Mai/22',
      id: 'mai-22',
  },
  {
      name: 'Jun/22',
      id: 'jun-22',
  },
  {
      name: 'Jul/22',
      id: 'jul-22',
  },
  {
      name: 'Ago/22',
      id: 'ago-22',
  },
  {
      name: 'Set/22',
      id: 'set-22',
  },
  {
      name: 'Out/22',
      id: 'out-22',
  },
  {
      name: 'Nov/22',
      id: 'nov-22',
  }
];

class MonthlyPlanning extends Component {

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
            onPress={() => this.props.navigation.navigate("Dashboard")}
          />
        </Header>
        <ContentBox>
            <ScrollingButtonMenuBox>
                <ScrollingButtonMenu
                    items={menus}
                    style={{padding:15}}
                    onPress={(e) => {
                        console.log(e)
                    }}
                />
            </ScrollingButtonMenuBox>
                
            <PlanningContent>
              <PlanningBox>
                <PlanningTitle>Moradia</PlanningTitle>
                <PlanningTitle>R$40/R$500</PlanningTitle>
                <AntDesign name="delete" size={20} color="rgb(80, 125, 188)" />
              </PlanningBox>
              <PlanningBox>
                <PlanningTitle>Supermercado</PlanningTitle>
                <PlanningTitle>R$40/R$500</PlanningTitle>
                <AntDesign name="delete" size={20} color="rgb(80, 125, 188)" />
              </PlanningBox>
              <PlanningBox>
                <PlanningTitle>Transporte</PlanningTitle>
                <PlanningTitle>R$40/R$500</PlanningTitle>
                <AntDesign name="delete" size={20} color="rgb(80, 125, 188)" />
              </PlanningBox>
              <PlanningBox>
                <PlanningTitle>Lazer</PlanningTitle>
                <PlanningTitle>R$40/R$500</PlanningTitle>
                <AntDesign name="delete" size={20} color="rgb(80, 125, 188)" />
              </PlanningBox>
              <PlanningBox>
                <PlanningTitle>Saúde</PlanningTitle>
                <PlanningTitle>R$40/R$500</PlanningTitle>
                <AntDesign name="delete" size={20} color="rgb(80, 125, 188)" />
              </PlanningBox>
              <PlanningBox>
                <PlanningTitle>Contas</PlanningTitle>
                <PlanningTitle>R$40/R$500</PlanningTitle>
                <AntDesign name="delete" size={20} color="rgb(80, 125, 188)" />
              </PlanningBox>
              <PlanningBox>
                <PlanningTitle>Restaurante/Delivery</PlanningTitle>
                <PlanningTitle>R$40/R$500</PlanningTitle>
                <AntDesign name="delete" size={20} color="rgb(80, 125, 188)" />
              </PlanningBox>
              <PlanningBox>
                <PlanningTitle>Outros</PlanningTitle>
                <PlanningTitle>R$40/R$500</PlanningTitle>
                <AntDesign name="delete" size={20} color="rgb(80, 125, 188)" />
              </PlanningBox>
            </PlanningContent>

            <Link onPress={() => this.props.navigation.navigate("ManagePlanning")}>
                Gerenciar Planejamento
            </Link>
        </ContentBox>
      </Container>
    );
  }
}

export default MonthlyPlanning;