import React, { Component } from "react";
import {
  Container,
  Header,
  UserBox,
  Title,
  BalanceBox,
  BalanceBoxIcon,
  Text,
  Input,
  SelectBox,
  ErrorText,
} from "./styles";
import APIKit from "../../utils/APIKit";
import {} from "@expo/vector-icons";
import { SimpleLineIcons, FontAwesome, AntDesign } from "@expo/vector-icons";
import SwitchSelector from "react-native-switch-selector";
import RNPickerSelect from "react-native-picker-select";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";

const initialState = {
  value: "",
  tipo_de_transacao: "1",
  categoriaid: "",
  titulo_lancamento: "",
  comentario: "",
  repetido: false,
  parcela: 0,
  diaPagamento: 0,
  errors: {},
  errorState: false,
  isAuthorized: false,
  id_cartao: 0
  //allCards: [{label: 'Cartão', value: 'nada'}]
};

const entrada = translate("deposit");
const saida = translate("withdrawal");
const moradia = translate("ctgHousing");
const supermercado = translate("ctgGroceries");
const transporte = translate("ctgTransportation");
const lazer = translate("ctgEntertainment");
const saude = translate("ctgHealthcare");
const contas = translate("ctgUtilities");
const restaurante = translate("ctgRestaurant");
const outros = translate("ctgOthers");
const selecioneCtg = translate("selectCtg");

class RegisterTransactions extends Component {
  state = initialState;

  constructor() {
    super();
    this.state = { x: [], isAuthenticated: false, userName: "", saldo: [], allCards: [], allCategories: []};
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

    await APIKit.get("/api/cards/getCard?user_id=" + userId)
      .then(this.getCard)
      .catch();

    await APIKit.get("/api/categorias?user_id=" + userId)
      .then(this.getCategoria)
      .catch();
  
    
  }

  getCard = (data) => {
    let cardData = data.data;
    let auxArray = [];

    cardData.forEach(function (item,index) {
      var aux = {label: item.card_name, value: item.card_id}
      auxArray.push(aux);
    });
    this.setState({ allCards: auxArray });
  }
  
  getCategoria = (data) => {
    //console.log(data.data);
    let categoriaData = data.data;
    let auxArray = [];

    categoriaData.forEach(function (item,index) {
      var aux = {label: item.nome, value: item.id}
      auxArray.push(aux);
    });
    this.setState({ allCategories: auxArray });
    //this.state.allCards = auxArray;
    console.log(this.state.allCategories);
  }

  onCartaoChange = (id_cartao) => {
    this.setState({id_cartao});
  }
  onValueChange = (value) => {
    this.setState({ value });
  };

  onTypeOfTransactionChange = (tipo_de_transacao) => {
    this.setState({ tipo_de_transacao });
  };

  onCategoryIdChange = (categoriaid) => {
    this.setState({ categoriaid });
  };

  onTitleReleaseChange = (titulo_lancamento) => {
    this.setState({ titulo_lancamento });
  };

  onDateReleaseChange = (data_lancamento) => {
    this.setState({ data_lancamento });
  };

  onCommentChange = (comentario) => {
    this.setState({ comentario });
  };

  onRepetidoChange = (repetido) => {
    this.setState({ repetido })
  }

  onChangeParcela = (text) => {
    let newText = '';
    let numbers = '0123456789';

    for (var i=0; i < text.length; i++) {
        if(numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
        else {
            // your call back function
            alert("please enter numbers only");
        }
    }
    this.setState({ parcela: newText });
}

onChangeDiaPagamento = (text) => {
  let newText = '';
  let numbers = '0123456789';

  for (var i=0; i < text.length; i++) {
      if(numbers.indexOf(text[i]) > -1 ) {
          newText = newText + text[i];
      }
      else {
          // your call back function
          alert("please enter numbers only");
      }
  }
  this.setState({ diaPagamento: newText });
}

  onPressSave() {
    const {
      value,
      tipo_de_transacao,
      categoriaid,
      titulo_lancamento,
      comentario,
    } = this.state;
    const user_id = this.state.userId;
    const payload = {
      value,
      tipo_de_transacao,
      user_id,
      categoriaid,
      titulo_lancamento,
      comentario,
    };
    this.setState({ errorState: false });

    const onSuccess = ({ data }) => {
      this.props.navigation.navigate("Dashboard");
    };

    const onFailure = (error) => {
      this.setState({ errorState: true });
    };

    APIKit.post("/api/users/novoLancamento", payload)
      .then(onSuccess)
      .catch(onFailure);
  }

  render() {
    return (
      <Container>
        <Header>
          <UserBox>
            <FontAwesome name="user-circle" size={26} color="#FAFAFF" />
            <Title>
              {translate("hello")}, {this.state.userName}!
            </Title>
          </UserBox>
          <SimpleLineIcons
            name="menu"
            size={24}
            color="#FAFAFF"
            onPress={() => this.props.navigation.navigate("HamburguerMenu")}
          />
        </Header>
        <BalanceBox>
          <BalanceBoxIcon>
            <AntDesign
              name="arrowleft"
              size={30}
              color="#507DBC"
              onPress={() => this.props.navigation.navigate("Dashboard")}
            />
          </BalanceBoxIcon>

          <BalanceBoxIcon>
            {this.state.saldo.map((data, index) => {
              data.value = data.value.replace(".", ",");
              var saldo = data.value.split(",");
              return (
                <Text key={index}>
                  {translate("balance")}: R$
                  {saldo[0].concat(",", saldo[1].substring(0, 2))}
                </Text>
              );
            })}
          </BalanceBoxIcon>
        </BalanceBox>
        <SelectBox>
          <SwitchSelector
            initial={0}
            onPress={(tipo_de_transacao) =>
              this.onTypeOfTransactionChange(tipo_de_transacao)
            }
            textColor={"#BBD1EA"}
            selectedColor={"#30343F"}
            buttonColor={"#BBD1EA"}
            borderColor={"#BBD1EA"}
            hasPadding
            options={[
              { label: entrada, value: "1" },
              { label: saida, value: "2" },
            ]}
            borderRadius={4}
            fontSize={18}
          />
        </SelectBox>
        <Input
          placeholder={translate("transactionName")}
          value={this.state.titulo_lancamento}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.onTitleReleaseChange}
        ></Input>
        <Input
          placeholder={translate("amount")}
          value={this.state.value}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.onValueChange}
        ></Input>
        <Input
          placeholder={translate("description")}
          value={this.state.comentario}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.onCommentChange}
        ></Input>
        <Input 
          placeholder="Número de parcelas (Se houver)"
          keyboardType='numeric'
          onChangeText={(text)=> this.onChangeParcela(text)}
          value={this.state.parcela}
          maxLength={2}
        />
        <Input 
          placeholder="Dia do pagamento (Se houver)"
          keyboardType='numeric'
          onChangeText={(text)=> this.onChangeDiaPagamento(text)}
          value={this.state.diaPagamento}
          maxLength={2}
        />
        {/* Usuário seleciona cartão*/}
        <SelectBox>
          <RNPickerSelect
            onValueChange={(cartao) =>
              this.onCartaoChange(cartao)
            }
            items={this.state.allCards}
            placeholder={{ label: "Selecione um cartão", value: "cartao" }}
            style={{
              placeholder: {
                color: 'gray'
              },
              inputAndroid: {
                textAlign: "center",
                color: "gray",
                backgroundColor: "#BBD1EA",
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 8,
                paddingRight: 8,
                fontSize: 18,
                borderRadius: 4,
                height: 40,
              },
              inputIOS: {
                backgroundColor: "#BBD1EA",
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
        {/* Usuário seleciona categoria*/}
        <SelectBox>
          <RNPickerSelect
            onValueChange={(categoriaid) =>
              this.onCategoryIdChange(categoriaid)
            }
            items={this.state.allCategories}
            placeholder={{ label: selecioneCtg, value: "categoria" }}
            style={{
              placeholder: {
                color: 'gray'
              },
              inputAndroid: {
                textAlign: "center",
                color: "gray",
                backgroundColor: "#BBD1EA",
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 8,
                paddingRight: 8,
                fontSize: 18,
                borderRadius: 4,
                height: 40,
              },
              inputIOS: {
                backgroundColor: "#BBD1EA",
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
        {/* Usuário seleciona se quer repetir mensalmente*/}
        <SelectBox>
          <RNPickerSelect
            onValueChange={(repetido_bool) =>
              this.onRepetidoChange(repetido_bool)
            }
            items={[
              { label: "Sim", value: true },
              { label: "Não", value: false },
            ]}
            placeholder={{ label: "Repetir mensalmente?", value: false }}
            style={{
              placeholder: {
                color: 'gray'
              },
              inputAndroid: {
                textAlign: "center",
                color: "gray",
                backgroundColor: "#BBD1EA",
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 8,
                paddingRight: 8,
                fontSize: 18,
                borderRadius: 4,
                height: 40,
              },
              inputIOS: {
                backgroundColor: "#BBD1EA",
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

        <SimpleLineIcons
          name="check"
          size={44}
          color="#507DBC"
          style={{ textAlign: "center" }}
          onPress={this.onPressSave.bind(this)}
        />
        {this.state.errorState && (
          <ErrorText>{translate("transactionError")}</ErrorText>
        )}
      </Container>
    );
  }
}

export default RegisterTransactions;
