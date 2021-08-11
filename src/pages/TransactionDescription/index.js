import React, { Component } from "react";
import {
    Container,
    DescriptionHeader,
    UserBox,
    Title,
    DescriptionBox,
    DescriptionInfoBox,
    TransactionTitle,
    TransactionInfoBox,
    TransactionInfoBold,
    TransactionInfo
} from "./styles";
import APIKit from "../../utils/APIKit";
import {
  FontAwesome,
  AntDesign,
  SimpleLineIcons, 
} from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { AppLoading } from "expo";
import { StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translate } from '../../locales'

class TransactionDescription extends Component {
    constructor() {
        super();
        this.state = { isAuthenticated: false, userName: ''};
    }

    componentWillUnmount() {}

    async componentDidMount() {
        const userId = await AsyncStorage.getItem("userId");
        const userName = await AsyncStorage.getItem("username");
    
        if(userId == null || userId == "null") {
          this.props.navigation.navigate("Login"); 
        }
        const onSuccess = ({ data }) => {
          this.setState({ userName: userName });
          this.setState({ isAuthenticated: true });
        };

        APIKit.get("/api/users/lancamento/?user_id=" + userId).then(onSuccess);
    }

    render() {
        return (
            <Container>
                <DescriptionHeader>
                    <UserBox>
                        <FontAwesome name="user-circle" size={26} color="#FAFAFF" />
                        <Title>{translate('hello')}, {this.state.userName}!</Title>
                    </UserBox>
                    <AntDesign 
                        name="close" 
                        size={24} 
                        color="#FAFAFF" 
                        onPress={() => this.props.navigation.navigate("Dashboard")} />
                </DescriptionHeader>
                <DescriptionBox>
                    <DescriptionInfoBox>
                        <TransactionTitle>Salário</TransactionTitle>
                        <TransactionInfoBox>
                            <TransactionInfoBold>Categoria:</TransactionInfoBold>
                            <TransactionInfo>Outros</TransactionInfo>
                        </TransactionInfoBox>
                        <TransactionInfoBox>
                            <TransactionInfoBold>Valor:</TransactionInfoBold>
                            <TransactionInfo>R$5000,00</TransactionInfo>
                        </TransactionInfoBox>
                        <TransactionInfoBox>
                            <TransactionInfoBold>Data:</TransactionInfoBold>
                            <TransactionInfo>11/08/2021</TransactionInfo>
                        </TransactionInfoBox>
                        <TransactionInfoBox>
                            <TransactionInfoBold>Tipo da transação:</TransactionInfoBold>
                            <TransactionInfo>Entrada</TransactionInfo>
                        </TransactionInfoBox>
                        <TransactionInfoBox>
                            <TransactionInfoBold>Comentário:</TransactionInfoBold>
                            <TransactionInfo>Salário de agosto, comentario comentario, comentario, comentario, comentario comentario</TransactionInfo>
                        </TransactionInfoBox>
                    </DescriptionInfoBox> 
                </DescriptionBox>     
            </Container>
            );
        }
    }

export default TransactionDescription;