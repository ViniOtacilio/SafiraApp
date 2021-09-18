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
  TransactionInfo,
} from "./styles";
import APIKit from "../../utils/APIKit";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";

class TransactionDescription extends Component {
  constructor() {
    super();
    this.state = { isAuthenticated: false, userName: "", data: [] };
  }

  componentWillUnmount() {}

  async componentDidMount() {
    console.log(this.props.route.params.id);
    const userId = await AsyncStorage.getItem("userId");
    const userName = await AsyncStorage.getItem("username");

    if (userId == null || userId == "null") {
      this.props.navigation.navigate("Login");
    }
    const onSuccess = ({ data }) => {
      this.setState({ userName: userName });
      this.setState({ isAuthenticated: true });
      this.setState({ data: data });
    };
    console.log(this.props.route.params.id);
    await APIKit.get(
      "/api/users/lancamento/?user_id=" +
        userId +
        "&id=" +
        this.props.route.params.id
    ).then(onSuccess);
  }

  render() {
    this.state.data.map((data, index) => {
      console.log(data);
    });
    return (
      <Container>
        <DescriptionHeader>
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
        </DescriptionHeader>
        <DescriptionBox>
          {this.state.data.map((data, index) => {
            var categoria = "";
            if (data.categoriaid == 1) {
              categoria = "Moradia";
            }
            if (data.categoriaid == 2) {
              categoria = "Supermercado";
            }
            if (data.categoriaid == 3) {
              categoria = "Transporte";
            }
            if (data.categoriaid == 4) {
              categoria = "Lazer";
            }
            if (data.categoriaid == 5) {
              categoria = "Saúde";
            }
            if (data.categoriaid == 6) {
              categoria = "Contas";
            }
            if (data.categoriaid == 7) {
              categoria = "Restaurante";
            }
            if (data.categoriaid == 8) {
              categoria = "Outros";
            }
            if (data.value) {
              data.value = data.value.replace(".", ",");
              var value = data.value.split(",");
            }
            if (data.data_lancamento) {
              var formatted_date = data.data_lancamento.split("T");
              var formatted_date_split = formatted_date[0].split("-");
              var formatted_date_br =
                formatted_date_split[2] +
                "/" +
                formatted_date_split[1] +
                "/" +
                formatted_date_split[0];
            }
            if (data.tipo_de_transacao == 1) {
              data.tipo_de_transacao = "Entrada";
            }
            if (data.tipo_de_transacao == 2) {
              data.tipo_de_transacao = "Saída";
            }
            return (
              <DescriptionInfoBox key={"description-info-box-" + index}>
                <TransactionTitle>Detalhes da transação</TransactionTitle>
              
                <TransactionInfoBold>Nome do lançamento</TransactionInfoBold>
                  <TransactionInfo>{data.titulo_lancamento}</TransactionInfo>

                  <TransactionInfoBold>Categoria</TransactionInfoBold>
                  <TransactionInfo>{categoria}</TransactionInfo>
                
              
                  <TransactionInfoBold>Valor</TransactionInfoBold>
                  <TransactionInfo>
                    {"R$" + value[0].concat(",", value[1].substring(0, 2))}
                  </TransactionInfo>
                
              
                  <TransactionInfoBold>Data</TransactionInfoBold>
                  <TransactionInfo>{formatted_date_br}</TransactionInfo>
                
              
                  <TransactionInfoBold>Tipo da transação</TransactionInfoBold>
                  <TransactionInfo>{data.tipo_de_transacao}</TransactionInfo>
                
              
                  <TransactionInfoBold>Comentário</TransactionInfoBold>
                  <TransactionInfo>{data.comentario}</TransactionInfo>
                
              </DescriptionInfoBox>
            );
          })}
        </DescriptionBox>
      </Container>
    );
  }
}

export default TransactionDescription;
