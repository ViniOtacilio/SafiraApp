import React, { Component, View } from "react";
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
  CategoryName,
  EachCustomCategorie,
} from "./styles";
import APIKit from "../../utils/APIKit";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";
import { RefreshControl } from "react-native";

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
      refreshing: false,
    };
  }

  onRefresh = async () => {
    this.setState({ refreshing: true });
    try {
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
        this.setState({ data: data });
        this.setState({ refreshing: false });
      };

      await APIKit.get("/api/users/categoria/customCategories?user_id=" + userId)
        .then(onSuccess)
        .catch("fail", userId);
    } catch (error) {
      console.log(error);
    }
  };

  deleteCustomCategory(id) {
    APIKit.delete("/api/users/categoria/" + id)
      .then(this.onRefresh)
      .catch(onFailure);

    const onFailure = (error) => {
      this.setState({ errorState: true });
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
      this.setState({ data: data });
    };

    APIKit.get("/api/users/categoria/customCategories?user_id=" + userId)
      .then(onSuccess)
      .catch("fail", userId);
  }

  showNewCategorySection = () => {
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
        this.onRefresh();
        this.setState({ showAddNewCategory: false });
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    const onFailure = (error) => {
      this.setState({ errorState: true });
    };

    APIKit.post("/api/users/categoria", payload)
      .then(onSuccess)
      .catch(onFailure);
  }

  render() {
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
            {this.state.data.map((item, key) => {
              return (
                <EachCustomCategorie
                  refreshControl={
                    <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={this.onRefresh}
                    />
                  }
                  key={"custom-category" + key}
                >
                  <CategoryName key={"custom-category-name" + key}>
                    {item.nome}
                  </CategoryName>
                  <AntDesign
                    name="delete"
                    size={20}
                    color="#507DBC"
                    onPress={() => this.deleteCustomCategory(item.id)}
                  />
                </EachCustomCategorie>
              );
            })}
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
