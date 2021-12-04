import React, { Component } from "react";
import {
  Container,
  MenuHamburguerHeader,
  UserBox,
  Title,
  MenuHamburguerBox,
  Text,
  MenuHamburguerItem,
} from "./styles";
import APIKit from "../../utils/APIKit";
import { FontAwesome, AntDesign, Entypo, Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";

class HamburguerMenu extends Component {
  constructor() {
    super();
    this.state = { userId: "", isAuthenticated: false, userName: "" };
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

  onPressLogout() {
    const onSuccess = () => {
      try {
        AsyncStorage.setItem("userId", null);
        AsyncStorage.setItem("username", null);
      } catch (e) {
        console.log(e);
      }
      this.setState({ isAuthenticated: false });
      this.props.navigation.navigate("Login");
    };
    APIKit.get("/logout").then(onSuccess); //.catch(onFailure);
  }

  onPressCategoria() {
    this.props.navigation.navigate("CustomCategory");
  }

  render() {
    return (
      <Container>
        <MenuHamburguerHeader>
          <UserBox>
            <FontAwesome name="user-circle" size={26} color="#DAE3E5" />
            <Title>Olá, {this.state.userName}!</Title>
          </UserBox>
          <AntDesign
            name="close"
            size={24}
            color="#DAE3E5"
            onPress={() => this.props.navigation.navigate("Dashboard")}
          />
        </MenuHamburguerHeader>
        <MenuHamburguerBox>
          <MenuHamburguerItem>
              <Entypo name="bar-graph" size={24} color="#f5f5f5" />
              <Text onPress={() => this.props.navigation.navigate("MonthlyPlanning")}>
                Planejamento Mensal
              </Text>
          </MenuHamburguerItem>
          <MenuHamburguerItem>
              <AntDesign name="setting" size={24} color="#f5f5f5" />
              <Text onPress={() => this.props.navigation.navigate("ManageRelease")}>
                Gerenciar Lançamentos
              </Text>
          </MenuHamburguerItem>
          <MenuHamburguerItem>
              <Feather name="credit-card" size={24} color="#f5f5f5" />
              <Text onPress={() => this.props.navigation.navigate("Cards")}>
                Gerenciar Cartões
              </Text>
          </MenuHamburguerItem>
          <MenuHamburguerItem>
              <AntDesign name="edit" size={24} color="#f5f5f5" />
              <Text onPress={this.onPressCategoria.bind(this)}>
                Categorias Personalizadas
              </Text>
          </MenuHamburguerItem>
          <MenuHamburguerItem>
            <AntDesign name="logout" size={24} color="#f5f5f5" />
            <Text onPress={this.onPressLogout.bind(this)}>
              {translate("logOut")}
            </Text>
          </MenuHamburguerItem>
        </MenuHamburguerBox>
      </Container>
    );
  }
}

export default HamburguerMenu;
