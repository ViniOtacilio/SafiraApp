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
  ErrorText
} from "./styles";
import APIKit from "../../utils/APIKit";
import { 
} from '@expo/vector-icons';
import { AppLoading } from "expo";
import { StyleSheet } from "react-native";
import { 
  SimpleLineIcons, 
  Ionicons, 
  FontAwesome,
  AntDesign
} from '@expo/vector-icons';
import SwitchSelector from "react-native-switch-selector";
import RNPickerSelect from 'react-native-picker-select';

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


class RegisterTransactions extends Component {
  state = initialState;

  componentWillUnmount() {}

  componentDidMount() {
    console.log(this.state);
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
    const { value, tipo_de_transacao, categoriaid, titulo_lancamento, comentario } = this.state;
    const user_id = 135;
    const payload = { value, tipo_de_transacao, user_id, categoriaid, titulo_lancamento, comentario };
    console.log(payload);
    this.setState({errorState: false});

    const onSuccess = ({ data }) => {
      // Set JSON Web Token on success
      // setClientToken(data.token);
      // console.log(data);
      this.props.navigation.navigate("Dashboard");
      // this.setState({isLoading: false, isAuthorized: true});
    };

    const onFailure = (error) => {
      // console.log("A partir daqui é erro :")
      // console.log(error && error.response);
      // this.setState({ errors: error.response.data });
      this.setState({ errorState: true });
    };

    // Show spinner when call is made
    // this.setState({isLoading: true});

    APIKit.post("/api/users/novoLancamento", payload).then(onSuccess).catch(onFailure);
  }

  render() {
    return (
      <Container>
        <Header>
          <UserBox>
            <FontAwesome name="user-circle" size={26} color="#FAFAFF" />
            <Title>Olá, Fulano!</Title>
          </UserBox>
          <SimpleLineIcons name="menu" size={24} color="#FAFAFF" />
        </Header>
        <BalanceBox>
          <BalanceBoxIcon>
            <AntDesign
              name="arrowleft"
              size={30}
              color="#FAFAFF"
              onPress={() => this.props.navigation.navigate("Dashboard")}
            />
          </BalanceBoxIcon>
          <Text>
            Saldo: R$5000,00
          </Text>
          <BalanceBoxIcon></BalanceBoxIcon>
        </BalanceBox>
        <SelectBox>
          <SwitchSelector
            initial={0}
            onPress={tipo_de_transacao => this.onTypeOfTransactionChange(tipo_de_transacao)}
            textColor={'#E4D9FF'}
            selectedColor={'#30343F'}
            buttonColor={'#E4D9FF'}
            borderColor={'#E4D9FF'}
            hasPadding
            options={[
              { label: "Entrada", value: "1" }, 
              { label: "Saída", value: "2" } 
            ]}
            borderRadius={4}
            fontSize={18}
          />
        </SelectBox>
        <Input
            placeholder="Nome lançamento"
            value={this.state.titulo_lancamento}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onTitleReleaseChange}
        ></Input>
        <Input
            placeholder="Valor"
            value={this.state.value}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onValueChange}
        ></Input>
        <Input
            placeholder="Descrição"
            value={this.state.comentario}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onCommentChange}
        ></Input>
        {/*<Input
            placeholder="Data"
            value={this.state.data_lancamento}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onDateReleaseChange}
        ></Input>*/}
        <SelectBox>
          <RNPickerSelect
              onValueChange={(categoriaid) => this.onCategoryIdChange(categoriaid)}
              items={[
                  { label: 'Saúde', value: '1' },
                  { label: 'Baseball', value: '2' },
                  { label: 'Hockey', value: '3' },
              ]}
              placeholder={{ label: "Selecione a categoria...", value: "categoria" }}
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
        
        {/*<SelectBox>
          <SwitchSelector
            initial={0}
            onPress={value => this.setState({ release: value })}
            textColor={'#E4D9FF'}
            selectedColor={'#30343F'}
            buttonColor={'#E4D9FF'}
            borderColor={'#E4D9FF'}
            hasPadding
            options={[
              { label: "Fixa", value: "fixa" }, 
              { label: "Parcelada", value: "parcelada" } 
            ]}
            borderRadius={4}
            fontSize={18}
          />
          </SelectBox>*/}

        <SimpleLineIcons name="check"  size={44} color="#FAFAFF" style={{textAlign: 'center', cursor: 'pointer'}} 
          onPress={this.onPressSave.bind(this)} />
          {this.state.errorState && (
            <ErrorText>Erro ao criar lançamento</ErrorText>
          )}
      </Container>
    );
  }
}

export default RegisterTransactions;