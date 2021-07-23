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
import AsyncStorage from '@react-native-async-storage/async-storage';

class HamburguerMenu extends Component {
  componentWillUnmount() {}
  
  onPressLogout() {

    const onSuccess = () => {
      try {
        AsyncStorage.setItem('userId', null);
        AsyncStorage.setItem('username', null);
      }
      catch (e) {
        console.log(e);
      }
      this.setState({isAuthenticated: false});
      this.props.navigation.navigate("Login");
    };
    APIKit.get("/logout").then(onSuccess)//.catch(onFailure);

  }
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
               <MenuHamburguerItem>
                    <AntDesign name="logout" size={24} color="#1E2749" />
                    <Text onPress={this.onPressLogout.bind(this)}>Sair</Text>
               </MenuHamburguerItem>
           </MenuHamburguerBox>
      </Container>
    );
  }
}

export default HamburguerMenu;
