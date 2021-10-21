import React, { Component } from "react";
import {
  Container,
  Header,
  UserBox,
  HeaderTitle,
  ContentBox,
  PageTitle,
  ReleaseContent,
  ReleaseBox,
  ReleaseTitle
} from "./styles";
import APIKit from "../../utils/APIKit";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";

class ManageRelease extends Component {

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
        <PageTitle>Gerenciar Lançamentos</PageTitle>
        <ReleaseContent>
        <ReleaseBox>
          <ReleaseTitle>Conta de celular</ReleaseTitle>
          <AntDesign name="delete" size={20} color="#507DBC" />
        </ReleaseBox>
        <ReleaseBox>
          <ReleaseTitle>Conta Netflix</ReleaseTitle>
          <AntDesign name="delete" size={20} color="#507DBC" />
        </ReleaseBox>
        </ReleaseContent>
        </ContentBox>
      </Container>
    );
  }
}

export default ManageRelease;
