import React, { Component } from "react";
import {
  Container,
  FilterHeader,
  UserBox,
  Title,
  FilterBox,
  SelectBox,
  Button,
  ButtonText,
  TextDate,
} from "./styles";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { View, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const initialState = {
  categorias: "",
  errors: {},
  errorState: false,
  isAuthorized: false,
};

class Filter extends Component {
  state = initialState;

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

  onChangeVisibilityStartDatePicker = () => {
    this.setState({ showStartDate: true });
  };

  onChangeVisibilityFinalDatePicker = () => {
    this.setState({ showFinalDate: true });
  };

  onStartDateChange = (event, value) => {
    if (Platform.OS === "ios") this.setState({ showStartDate: true });
    else this.setState({ showStartDate: false });

    this.setState({ start_date: value });
  };

  onEndDateChange = (event, value) => {
    if (Platform.OS === "ios") this.setState({ showFinalDate: true });
    else this.setState({ showFinalDate: false });

    this.setState({ end_date: value });
  };

  onCategorysChange = (categorias) => {
    this.setState({ categorias });
  };

  onPressFilter() {
    const { start_date, end_date, categorias } = this.state;
    this.setState({ errorState: false });
    var userId = this.state.userId;
    var url_info = "";
    if (start_date) {
      url_info += "&start_date=";
      url_info += moment(start_date).format("YYYY-MM-DD");
    }
    if (end_date) {
      url_info += "&end_date=";
      url_info += moment(end_date).format("YYYY-MM-DD");
    }
    if (categorias) {
      url_info += "&categorias=";
      url_info += categorias;
    }
    this.props.navigation.navigate("Dashboard", { filterUrl: url_info });
  }

  render() {
    let showStartedDate = this.state.showStartDate;
    let showFinalDate = this.state.showFinalDate;
    let finalDate;
    let startDate;

    if (showStartedDate) {
      startDate = (
        <DateTimePicker
          testID="dateTimePickerStart"
          value={this.state.start_date}
          mode={"data"}
          is24Hour={true}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={this.onStartDateChange}
        />
      );
    }

    if (showFinalDate) {
      finalDate = (
        <DateTimePicker
          testID="dateTimePickerFinal"
          value={this.state.end_date}
          mode={"data"}
          is24Hour={true}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={this.onEndDateChange}
        />
      );
    }
    return (
      <Container>
        <FilterHeader>
          <UserBox>
            <FontAwesome name="user-circle" size={26} color="#FAFAFF" />
            <Title>Olá, {this.state.userName}!</Title>
          </UserBox>
          <AntDesign
            name="close"
            size={24}
            color="#FAFAFF"
            onPress={() => this.props.navigation.navigate("Dashboard")}
          />
        </FilterHeader>
        <FilterBox>
          <Button>
            <ButtonText onPress={this.onChangeVisibilityStartDatePicker}>
              Selecionar Data Inicial
            </ButtonText>
          </Button>

          <View>
            <TextDate>
              Data Inicial: {moment(this.state.start_date).format("YYYY/MM/DD")}
            </TextDate>
          </View>

          {startDate}

          <Button>
            <ButtonText onPress={this.onChangeVisibilityFinalDatePicker}>
              Selecionar Data Final
            </ButtonText>
          </Button>
          <View>
            <TextDate>
              Data Final: {moment(this.state.end_date).format("YYYY/MM/DD")}
            </TextDate>
          </View>
          {finalDate}
          <SelectBox>
            <RNPickerSelect
              onValueChange={(categoriaid) =>
                this.onCategorysChange(categoriaid)
              }
              items={[
                { label: "moradia", value: "1" },
                { label: "supermercado", value: "2" },
                { label: "transporte", value: "3" },
                { label: "lazer", value: "4" },
                { label: "saude", value: "5" },
                { label: "contas", value: "6" },
                { label: "restaurante", value: "7" },
                { label: "outros", value: "8" },
              ]}
              placeholder={{
                label: "Selecione a categoria",
                value: "categoria",
              }}
              style={{
                inputAndroid: {
                  color: "gray",
                  backgroundColor: "#FAFAFF",
                  paddingTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  fontSize: 18,
                  borderRadius: 4,
                  height: 40,
                },
                inputIOS: {
                  backgroundColor: "#FAFAFF",
                  paddingTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  fontSize: 18,
                  borderRadius: 4,
                  height: 40,
                },
                iconContainer: {
                  top: 5,
                  right: 15,
                },
              }}
              useNativeAndroidPickerStyle={false}
            />
          </SelectBox>
          <Button>
            <ButtonText onPress={this.onPressFilter.bind(this)}>
              Filtrar
            </ButtonText>
          </Button>
        </FilterBox>
      </Container>
    );
  }
}

export default Filter;
