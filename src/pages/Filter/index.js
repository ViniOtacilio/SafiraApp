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
    ButtonText
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

class Filter extends Component {
  constructor() {
    super();
    this.state = { userId: '', isAuthenticated: false, userName: '' };
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
  
  onPressLogout() {
  }

  render() {
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
                ></Input>
            </InputBox>
            <InputBox>
                <Input
                    placeholder={'Data Fim'}
                    autoCapitalize="none"
                    autoCorrect={false}
                ></Input>
            </InputBox>
            <SelectBox>
            <RNPickerSelect
                onValueChange={(categoriaid) => console.log(categoriaid)}
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
              <ButtonText>
                Filtrar
              </ButtonText>
            </Button>   
          </FilterBox>     
      </Container>
    );
  }
}

export default Filter;
