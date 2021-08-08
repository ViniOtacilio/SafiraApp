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
    FilterText,
    FilterTextBold
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
import FilterBoxInfo from "../FilterBoxInfo";
import { HistoricTextTitle } from "../Dashboard/styles";


const initialState = {
  start_date: "",
  end_date: "",
  categorias: "",
  errors: {},
  errorState: false,
  isAuthorized: false,
};

class Filter extends Component {
  state = initialState;

  constructor() {
    super();
    this.state = { userId: '', isAuthenticated: false, userName: '', filterData: [""] };
  }

  componentWillUnmount() {}

  async componentDidMount() {
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
    //  this.props.navigation.navigate("FilterBoxInfo", { user: 'Lucy' });
    };
    APIKit
      .get("/api/users/lancamento/?user_id=" + userId + "&start_date=" + start_date + "&end_date=" + end_date + "&categorias=" + categorias)
      .then(onSuccess);
  }

  render() {
  //  console.log(this.state.filterData)
    return (
      <Container>
          <FilterHeader>
            <UserBox>
                <FontAwesome name="user-circle" size={26} color="#FAFAFF" />
                <Title>Olá, {this.state.userName}!</Title>
            </UserBox>
            <AntDesign name="close" size={24} color="#FAFAFF" onPress={() => this.props.navigation.navigate("Dashboard")} />
           </FilterHeader>
          <FilterBox>
            <InputBox>
                <Input
                    placeholder={'Data Início'}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={this.state.start_date}
                    onChangeText={this.onStartDateChange}
                ></Input>
            </InputBox>
            <InputBox>
                <Input
                    placeholder={'Data Fim'}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={this.state.end_date}
                    onChangeText={this.onEndDateChange}
                ></Input>
            </InputBox>
            <SelectBox>
            <RNPickerSelect
                onValueChange={(categoriaid) => this.onCategorysChange(categoriaid)}
                items={[
                    { label: 'moradia', value: '1' },
                    { label: 'supermercado', value: '2' },
                    { label: 'transporte', value: '3' },
                    { label: 'lazer', value: '4' },
                    { label: 'saude', value: '5' },
                    { label: 'contas', value: '6' },
                    { label: 'restaurante', value: '7' },
                    { label: 'outros', value: '8' },
                ]}
                placeholder={{ label: 'Selecione a categoria', value: "categoria" }}
                style={{
                  inputAndroid: {
                    backgroundColor: '#FAFAFF',
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    paddingRight: 8,
                    fontSize: 18,
                    borderRadius: 4,
                    height: 40,
                  },
                  inputIOS: {
                    backgroundColor: '#FAFAFF',
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
            />
          </SelectBox>
            <Button>
              <ButtonText onPress={this.onPressFilter.bind(this)}>
                Filtrar
              </ButtonText>
            </Button>  
            <FilterInfoBox>
            {this.state.filterData.map((data, index) => {
              console.log(data.value)
              if (data.value) {
                data.value = data.value.replace(".", ",");
                var value = data.value.split(',');
                value[1] = value[1].substring(0,2);
                var value_br = "R$";
                value_br += value;
              }
              if (data.tipo_de_transacao) {
                if (data.tipo_de_transacao == 1) {
                  data.tipo_de_transacao = "Entrada";
                } else {
                  data.tipo_de_transacao = "Saída";
                }
              }
              if (data.titulo_lancamento) {
                data.titulo_lancamento += ' - ';
                data.titulo_lancamento += data.tipo_de_transacao;
              }

              if (data.data_lancamento) {
                var formatted_date = data.data_lancamento.split('T');
                var formatted_date_split = formatted_date[0].split('-');
                var formatted_date_br = formatted_date_split[2] + '/' + formatted_date_split[1] + '/' + formatted_date_split[0];
                value_br += ' - ';
                value_br += formatted_date_br
              }

              return (
                <FilterItem key={"filter-item-" + index}>
                  <FilterTextBox key={"filter-text-box-" + index}>
                    <FilterText> {data.titulo_lancamento} </FilterText>
                    <FilterText> { value_br } </FilterText>
                  </FilterTextBox>
                </FilterItem>
              )
              })}
            </FilterInfoBox>
          </FilterBox>     
      </Container>
    );
  }
}

export default Filter;
