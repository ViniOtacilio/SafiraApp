import React, { Component } from "react";
import {
    Container,
    MenuHamburguerHeader,
    UserBox,
    Title,
    MenuHamburguerBox,
    Text,
    MenuHamburguerItem
} from "./styles";
import APIKit from "../../utils/APIKit";
import {
  FontAwesome,
  AntDesign 
} from '@expo/vector-icons';
import { AppLoading } from "expo";
import { StyleSheet } from "react-native";

class HamburguerMenu extends Component {
  render() {
    return (
      <Container>
          <MenuHamburguerHeader>
            <UserBox>
                <FontAwesome name="user-circle" size={26} color="#FAFAFF" />
                <Title>Olá, Fulano!</Title>
            </UserBox>
            <AntDesign name="close" size={24} color="#FAFAFF" onPress={() => this.props.navigation.navigate("Dashboard")} />
           </MenuHamburguerHeader>
           <MenuHamburguerBox>
               <MenuHamburguerItem onPress={() => this.props.navigation.navigate("Dashboard")}>
                    <AntDesign name="logout" size={24} color="#1E2749" />
                    <Text>Sair</Text>
               </MenuHamburguerItem>
           </MenuHamburguerBox>
      </Container>
    );
  }
}

export default HamburguerMenu;
