import React, { Component } from "react";
import {
  Container,
  UserBox,
  Title,
  CategoryHeader,
  NewCategory,
  AddNewCatogory
} from "./styles";
import APIKit from "../../utils/APIKit";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";

class CustomCategory extends Component {
  constructor() {
    super();
    this.state = { isAuthenticated: false, userName: "", data: [], showAddNewCategory: false };
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

    };
  }

  render() {
    this.state.data.map((data, index) => {
      console.log(data);
    });
    return (
      <Container>
        <CategoryHeader>
          <UserBox>
            <FontAwesome name="user-circle" size={26} color="#FAFAFF" />
            <Title>
              {translate("hello")}, {this.state.userName}!
            </Title>
          </UserBox>
          <AntDesign
            name="close"
            size={24}
            color="#FAFAFF"
            onPress={() => this.props.navigation.navigate("Dashboard")}
          />
        </CategoryHeader>

        <NewCategory>
        { this.state.showAddNewCategory && 
            <AddNewCatogory> </AddNewCatogory>
        }
        </NewCategory>

      </Container>
    );
  }
}

export default CustomCategory;
