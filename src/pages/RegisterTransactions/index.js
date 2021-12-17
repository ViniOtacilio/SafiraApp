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
import { TextInputMask } from 'react-native-masked-text';
import { StyleSheet } from 'react-native';

const initialState = {
  value: "",
  tipo_de_transacao: "1",
  categoriaid: "",
  titulo_lancamento: "",
  comentario: "",
  is_repetitivo: false,
  qtd_parcelas: 0,
  dia_cobranca: 0,
  errors: {},
  errorState: false,
  isAuthorized: false,
  card_id: 0
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

  onCartaoChange = (card_id) => {
    this.setState({card_id});
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

  onIsRepetitivoChange = (is_repetitivo) => {
    let repetitivo = JSON.parse(is_repetitivo);
    this.setState({ is_repetitivo: repetitivo })
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
    this.setState({ qtd_parcelas: newText });
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
  this.setState({ dia_cobranca: newText });
}

  async onPressSave() {
    let is_parcelado = false;
    const {
      value,
      tipo_de_transacao,
      categoriaid,
      titulo_lancamento,
      comentario,
      is_repetitivo,
      qtd_parcelas,
      dia_cobranca,
      card_id
    } = this.state;
    const userid = this.state.userId;
    if(this.state.qtd_parcelas != null)
    {
      is_parcelado = true;
    }
    var value_final;
    if (value) {
      value_final = value.replace('R$', '');
      value_final = value_final.replace('.', '');
      value_final = value_final.replace(',', '.');
    }
    
    console.log(typeof(is_repetitivo));
    const payload = {
      value_final,
      tipo_de_transacao,
      userid,
      categoriaid,
      titulo_lancamento,
      comentario,
      is_repetitivo,
      qtd_parcelas,
      is_parcelado,
      dia_cobranca,
      card_id
    };
  
    console.log('aqui');
    console.log(value_final)
    console.log(payload);
    this.setState({ errorState: false });

    const onSuccess = ({ data }) => {
      this.props.navigation.navigate("Dashboard");
    };

    const onFailure = (error) => {
      this.setState({ errorState: true });
    };

   /* await APIKit.post("/api/users/novoLancamento", payload)
      .then(onSuccess)
      .catch(onFailure);*/
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
        <TextInputMask
              type={'money'}
              placeholder={translate("amount")}
              value={this.state.value}
              style={styles.maskedInput}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={this.onValueChange}
            />
        <Input
          placeholder={translate("description")}
          value={this.state.comentario}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.onCommentChange}
        ></Input>
        <Input 
          placeholder="Número de parcelas (Opcional)"
          keyboardType='numeric'
          onChangeText={(text)=> this.onChangeParcela(text)}
          value={this.state.qtd_parcelas}
          maxLength={2}
        />

        {/* Usuário seleciona cartão*/}
        <SelectBox>
          <RNPickerSelect
            onValueChange={(cartao) =>
              this.onCartaoChange(cartao)
            }
            items={this.state.allCards}
            placeholder={{ label: "Selecione um cartão", value: null }}
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
              this.onIsRepetitivoChange(repetido_bool)
            }
            items={[
              { label: "Sim", value: true },
              { label: "Não", value: false },
            ]}
            placeholder={{ label: "Repetir mensalmente?", value: "" }}
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
        <Input 
          placeholder="Dia do pagamento (Opcional)"
          keyboardType='numeric'
          onChangeText={(text)=> this.onChangeDiaPagamento(text)}
          value={this.state.dia_cobranca}
          maxLength={2}
        />

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

const styles = StyleSheet.create({
  maskedInput: {
    backgroundColor: 'background: rgba(187, 209, 234, 0.5)',
    marginBottom: 5,
    height: 40,
    fontSize: 18,
    padding: 8,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 4,
  },
});

export default RegisterTransactions;
