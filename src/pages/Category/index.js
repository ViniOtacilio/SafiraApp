import React, { Component } from "react";
import {
  Container,
  UserBox,
  Title,
  CategoryHeader,
  NewCategory,
  AddNewCategory,
  Button,
  ButtonText,
  PageTitle,
  InputBox,
  Input,
  ListAllCategories,
  CategoryName
} from "./styles";
import APIKit from "../../utils/APIKit";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";


// const initialState = {
//   newCategory: "",
//   isAuthenticated: false,
//   userName: "",
//   data: [],
//   showAddNewCategory: false,
//   errorState: false,
// };

class CustomCategory extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      userName: "",
      data: [],
      showAddNewCategory: false,
      errorState: false,
      newCategoryName: "",
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
    const onSuccess = ({ data }) => {};
  }

  showNewCategorySection = () => {
    console.log("Ta funfando");
    this.setState({ showAddNewCategory: true });
  };

  onNewCategoryChange = (newCategoryName) => {
    this.setState({ newCategoryName });
  };

  async onPressCreateNewCategory() {
    const { newCategoryName } = this.state;
    const user_id = await AsyncStorage.getItem("userId");
    const payload = { user_id, newCategoryName };
    this.setState({ errorState: false });

    const onSuccess = async ({ data }) => {
      try {
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    const onFailure = (error) => {
      this.setState({ errorState: true });
    };

    APIKit.post("/api/categorias/createCustomCategory", payload)
      .then(onSuccess)
      .catch(onFailure);
  }

  render() {
    // this.state.data.map((data, index) => {
    //   console.log(data);
    // });
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
        <PageTitle>Categorias Personalizadas</PageTitle>
        {/* Listando todas categorias*/}
        {!this.state.showAddNewCategory && (
          <ListAllCategories>
          <CategoryName>Teste</CategoryName>
          <Ionicons
            name="close-outline"
            size={32}
            // color="#DAE3E5"
            color="#507DBC"
            style={{ textAlign: "center" }}
            onPress={() =>
              this.props.navigation.navigate("RegisterTransactions")
            }
          />
        </ListAllCategories>
          )}
        {/* Criar nova categoria */}
        <NewCategory>
          {this.state.showAddNewCategory && (
            <AddNewCategory>
              <InputBox>
                <Input
                  value={this.state.newCategory}
                  onChangeText={this.onNewCategoryChange}
                  placeholder={"Categoria"}
                  placeholderTextColor="#808080"
                  autoCapitalize="none"
                  autoCorrect={false}
                ></Input>
              </InputBox>
              <Button>
                <ButtonText onPress={this.onPressCreateNewCategory.bind(this)}>
                  CRIAR
                </ButtonText>
              </Button>
            </AddNewCategory>
          )}
          {!this.state.showAddNewCategory && (
            <Button>
              <ButtonText onPress={this.showNewCategorySection.bind(this)}>
                Criar nova categoria
              </ButtonText>
            </Button>
          )}
        </NewCategory>
      </Container>
    );
  }
}

export default CustomCategory;
