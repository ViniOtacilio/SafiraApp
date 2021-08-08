import React, { Component } from "react";
import {
    Container,
    FilterHeader,
    UserBox,
    Title,
    FilterBox,
    InputBox,
    Input,
    SelectBox,
    Button,
    ButtonText,
    FilterInfoBox,
    FilterItem,
    FilterTextBox,
    FilterTextTitle,
    FilterText
} from "./styles";
import APIKit from "../../utils/APIKit";
import {
  FontAwesome,
  AntDesign 
} from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { AppLoading } from "expo";
import { StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translate } from '../../locales'


const initialState = {
  start_date: "",
  end_date: "",
  categorias: "",
  errors: {},
  errorState: false,
  isAuthorized: false,
};

class FilterBoxInfo extends Component {
  state = initialState;

  constructor(props) {
    super(props);
    this.state = { userId: '', isAuthenticated: false, userName: '', filterData: this.props.filterData };
  }

  componentWillUnmount() {}

  async componentDidMount() {
    //console.log(this.props.navigation.getParam('user'));
    const userId = await AsyncStorage.getItem("userId");
    const userName = await AsyncStorage.getItem("username");

    if(userId == null || userId == "null") {
      this.props.navigation.navigate("Login"); 
    } else {
      this.setState({ userId: userId });
      this.setState({ userName: userName });
      this.setState({ isAuthenticated: true });
    }
  }
  
  onStartDateChange = (start_date) => {
    this.setState({ start_date });
  };

  onEndDateChange = (end_date) => {
    this.setState({ end_date });
  };

  onCategorysChange = (categorias) => {
    this.setState({ categorias });
  };

  onPressFilter() {
    const { start_date, end_date, categorias } = this.state;
    this.setState({errorState: false});
    var userId = this.state.userId;
    const onSuccess = ({ data }) => {
      this.setState({ filterData: data });
      console.log(this.state.filterData);
      
    };
    APIKit
      .get("/api/users/lancamento/?user_id=" + userId + "&start_date=" + start_date + "&end_date=" + end_date + "&categorias=" + categorias)
      .then(onSuccess);
  }

  render() {
    console.log('teste teste teste')
    console.log(this.state.filterData)
    return (
      <Container>
          <FilterBox>
            <FilterInfoBox>
            </FilterInfoBox> 
          </FilterBox>     
      </Container>
    );
  }
}

export default FilterBoxInfo;