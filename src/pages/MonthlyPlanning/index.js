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
      id: '12-2021',
  },
  {
      name: 'Jan/22',
      id: '01-2022',
  },
  {
      name: 'Fev/22',
      id: '02-2022',
  },
  {
      name: 'Mar/22',
      id: '03-2022',
  }
  ,
  {
      name: 'Abr/22',
      id: '04-2022',
  },
  {
      name: 'Mai/22',
      id: '05-2022',
  },
  {
      name: 'Jun/22',
      id: '06-2022',
  },
  {
      name: 'Jul/22',
      id: '07-2022',
  },
  {
      name: 'Ago/22',
      id: '08-2022',
  },
  {
      name: 'Set/22',
      id: '09-2022',
  },
  {
      name: 'Out/22',
      id: '10-2022',
  },
  {
      name: 'Nov/22',
      id: '11-2022',
  }
];

class MonthlyPlanning extends Component {

    constructor() {
        super();
        this.state = {
          x: [],
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

      async onPressFilter(id) {
        console.log(id)

        const onSuccess = ({ data }) => {
            this.setState({ isAuthenticated: true });
            this.setState({ x: data });
            console.log(data);
        };
    
        const userId = await AsyncStorage.getItem("userId");
        console.log(userId)
        console.log("/api/planejamento/getPlanejamento?user_id=" +
        userId +
        "&mes=" +
        id)
    
        APIKit.get(
            "/api/planejamento/getPlanejamento?user_id=" +
            userId +
            "&mes=" +
            id
        ).then(onSuccess);
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
                      this.onPressFilter(e.id);
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