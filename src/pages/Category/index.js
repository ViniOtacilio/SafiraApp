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
  EachCustomCategorie
} from "./styles";
import APIKit from "../../utils/APIKit";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";

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
      lastRefresh: Date(Date.now()).toString(),
      shouldUpdate: ""
    };
    this.refreshScreen = this.refreshScreen.bind(this);
  }

  refreshScreen() {
    this.setState({ lastRefresh: Date(Date.now()).toString() });
    this.setState({ shouldUpdate: "true" });
    this.props.route.params = null;
  }

  deleteCustomCategory(id) {
    const payload = {id};
    APIKit.post("/api/categorias/deleteCustomCategory/" + id)
      .then(this.refreshScreen)
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

    APIKit.get("/api/categorias/getCustomCategories/?user_id=" + userId).then(onSuccess).catch('fail', userId);


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

  // async componentDidUpdate() {
  //   if (this.props.route.params) {
  //     const userId = await AsyncStorage.getItem("userId");
  //     const onSuccess = ({ data }) => {
  //       this.setState({ data: data });
  //     };
  //     APIKit.get("/api/categorias/getCustomCategories/?user_id=" + userId).then(onSuccess).catch('fail', userId);
  //     this.props.route.params = null;
  //   }
  // }

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
          {this.state.data.map((item, key) => {
          return(
          <EachCustomCategorie key={"custom-category" + key}>
          <CategoryName key={"custom-category-name" + key}>{item.nome}</CategoryName>
          <AntDesign name="delete" size={20} color="#507DBC" onPress={()=> this.deleteCustomCategory(item.id)}/>
          {/* <Ionicons
            name="close-outline"
            size={32}
            // color="#DAE3E5"
            color="#507DBC"
            style={{ textAlign: "center" }}
            onPress={() =>
              this.props.navigation.navigate("RegisterTransactions")
            }
          /> */}
          </EachCustomCategorie>);
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
