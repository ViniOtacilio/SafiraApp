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
  errors: {},
  errorState: false,
  isAuthorized: false,
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
    this.state = { x: [], isAuthenticated: false, userName: "", saldo: [] };
  }

  componentWillUnmount() {}

  async componentDidMount() {
    console.log(this.state);
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
        <SelectBox>
          <RNPickerSelect
            onValueChange={(categoriaid) =>
              this.onCategoryIdChange(categoriaid)
            }
            items={[
              { label: moradia, value: "1" },
              { label: supermercado, value: "2" },
              { label: transporte, value: "3" },
              { label: lazer, value: "4" },
              { label: saude, value: "5" },
              { label: contas, value: "6" },
              { label: restaurante, value: "7" },
              { label: outros, value: "8" },
            ]}
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
