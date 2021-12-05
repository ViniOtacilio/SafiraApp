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
            var parcelado = null;
            if (data.parcelado == true) {
              data.parcelado = "sim"
              parcelado = true
              console.log(parcelado)
            }
            if (data.parcelado == false) {
              data.parcelado = "não"
              parcelado = null
              console.log(parcelado)
            }
            if (data.repetido == true) {
              data.repetido = "sim"
            }
            if (data.repetido == false) {
              data.repetido = "não"
            }

            return (
              <DescriptionInfoBox key={"description-info-box-" + index}>
                <TransactionTitle>Detalhes da transação</TransactionTitle>
              
                <TransactionInfoBold>Nome do lançamento</TransactionInfoBold>
                  <TransactionInfo>{data.titulo_lancamento}</TransactionInfo>

                  <TransactionInfoBold>Categoria</TransactionInfoBold>
                  <TransactionInfo>{ data.nome_categoria }</TransactionInfo>
                
              
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

                  <TransactionInfoBold>Lançamento repetitivo</TransactionInfoBold>
                  <TransactionInfo>{data.repetido}</TransactionInfo>

                  <TransactionInfoBold>Dia da cobrança</TransactionInfoBold>
                  <TransactionInfo>{data.dia_cobranca ? data.dia_cobranca : 'Não definido'}</TransactionInfo>

                  <TransactionInfoBold>Parcelado</TransactionInfoBold>
                  <TransactionInfo>{data.parcelado}</TransactionInfo>

                  <TransactionInfoBold>{ parcelado ? 'Quantidade de parcelas' : '' }</TransactionInfoBold>
                  <TransactionInfo>{data.qtd_parcelas}</TransactionInfo>

                  <TransactionInfoBold>{parcelado ? 'Parcela atual' : ''}</TransactionInfoBold>
                  <TransactionInfo>{data.parcela_atual}</TransactionInfo>

                  <TransactionInfoBold>{parcelado ? 'Valor da parcela' : ''}</TransactionInfoBold>
                  <TransactionInfo>{data.valor_parcela}</TransactionInfo>
                
              </DescriptionInfoBox>
            );
          })}
        </DescriptionBox>
      </Container>
    );
  }
}

export default TransactionDescription;
