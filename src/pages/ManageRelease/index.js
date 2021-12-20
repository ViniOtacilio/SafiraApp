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

        APIKit.get("/api/users/lancamento/?user_id=" + userId).then(onSuccess);
      }

      onPressDelete(id) {
        console.log('delete')
        console.log(id)
        const onSuccess = ({ data }) => {
          console.log(data)
          console.log("deu bom")
        };
        APIKit.get("/api/users/lancamento/" + id).then(onSuccess);
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
        <PageTitle>Gerenciar Lançamentos Recorrentes</PageTitle>
        <ReleaseContent>
          {this.state.x.map((item, index) => {
            if (item.repetido == true) {
              console.log(item)
              return(
                <ReleaseBox key={"release-box-" + index}>
                  <ReleaseTitle>{item.titulo_lancamento}</ReleaseTitle>
                  <AntDesign name="delete" size={20} color="#507DBC" 
                    onPress={() => {
                      this.onPressDelete(item.id);
                    }}
                  />
                </ReleaseBox>
              )
            }
          })}
        </ReleaseContent>
        </ContentBox>
      </Container>
    );
  }
}

export default ManageRelease;
