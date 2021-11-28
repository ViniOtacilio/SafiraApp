import React, { Component } from "react";
import {
  Container,
  Header,
  UserBox,
  HeaderTitle,
  ContentBox,
  PageTitle,
  Input,
  Text,
  ButtonBox,
  Button,
  ButtonText
} from "./styles";
import APIKit from "../../utils/APIKit";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";

const initialState = {
  mes: "",
  categoriaInputMoradia: "",
  categoriaInputSupermercado: "",
  categoriaInputTransporte: "",
  categoriaInputLazer: "",
  categoriaInputSaude: "",
  categoriaInputContas: "",
  categoriaInputRD: "",
  categoriaInputOutros: "",
  errors: {},
  errorState: false,
  isAuthorized: false,
};

class ManagePlanning extends Component {

  state = initialState;
    
      constructor() {
        super();
        this.state = {
          userId: "",
          isAuthenticated: false,
          userName: "",
          date: new Date(Date.now()),
          showStartDate: false,
          showFinalDate: false,
          start_date: new Date(Date.now()),
          end_date: new Date(Date.now()),
        };
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
      }

      onMesChange = (mes) => {
        this.setState({ mes });
      };

      onCategoriaInputChangeMoradia = (categoria) => {
        this.setState({ 
          categoriaInputMoradia: {
            "user_id": this.state.userId,
            "mes": this.state.mes,
            "categoria_id": 1,
            "value": categoria, 
          }
        });
      };

      onCategoriaInputChangeSupermercado = (categoria) => {
        this.setState({ 
          categoriaInputSupermercado: {
            "user_id": this.state.userId,
            "mes": this.state.mes,
            "categoria_id": 2,
            "value": categoria, 
          }
        });
      };

      onCategoriaInputChangeTransporte = (categoria) => {
        this.setState({ 
          categoriaInputTransporte: {
            "user_id": this.state.userId,
            "mes": this.state.mes,
            "categoria_id": 3,
            "value": categoria, 
          }
        });
      };

      onCategoriaInputChangeLazer = (categoria) => {
        this.setState({ 
          categoriaInputLazer: {
            "user_id": this.state.userId,
            "mes": this.state.mes,
            "categoria_id": 4,
            "value": categoria, 
          }
        });
      };

      onCategoriaInputChangeSaude = (categoria) => {
        this.setState({ 
          categoriaInputSaude: {
            "user_id": this.state.userId,
            "mes": this.state.mes,
            "categoria_id": 5,
            "value": categoria, 
          }
        });
      };

      onCategoriaInputChangeContas = (categoria) => {
        this.setState({ 
          categoriaInputContas: {
            "user_id": this.state.userId,
            "mes": this.state.mes,
            "categoria_id": 6,
            "value": categoria, 
          }
        });
      };

      onCategoriaInputChangeRD = (categoria) => {
        this.setState({ 
          categoriaInputRD: {
            "user_id": this.state.userId,
            "mes": this.state.mes,
            "categoria_id": 7,
            "value": categoria, 
          }
        });
      };

      onCategoriaInputChangeOutros = (categoria) => {
        this.setState({ 
          categoriaInputOutros: {
            "user_id": this.state.userId,
            "mes": this.state.mes,
            "categoria_id": 8,
            "value": categoria, 
          }
        });
      };

      onPressSave() {
        const {
          categoriaInputMoradia,
          categoriaInputSupermercado,
          categoriaInputTransporte,
          categoriaInputLazer,
          categoriaInputSaude,
          categoriaInputContas,
          categoriaInputRD,
          categoriaInputOutros,
        } = this.state;
        const payload = {
          "plans": [
            categoriaInputMoradia,
            categoriaInputSupermercado,
            categoriaInputTransporte,
            categoriaInputLazer,
            categoriaInputSaude,
            categoriaInputContas,
            categoriaInputRD,
            categoriaInputOutros,
          ]
        }
        console.log(payload)
        this.setState({ errorState: false });
    
        const onSuccess = ({ data }) => {
          this.props.navigation.navigate("MonthlyPlanning");
          console.log('deu bom')
        };
    
        const onFailure = (error) => {
          this.setState({ errorState: true });
          console.log('deu ruim')
        };

        APIKit.post("/api/planejamento/createPlanejamento", payload)
          .then(onSuccess)
          .catch(onFailure);
      }
      
  render() {
    return (
      <Container>
        <Header>
          <UserBox>
            <FontAwesome name="user-circle" size={26} color="#DAE3E5" />
            <HeaderTitle>Olá, {this.state.userName}!</HeaderTitle>
          </UserBox>
          <AntDesign
            name="close"
            size={24}
            color="#DAE3E5"
            onPress={() => this.props.navigation.navigate("MonthlyPlanning")}
          />
        </Header>
        <ContentBox>
            <PageTitle>Vou Gastar:</PageTitle>
            <Input
                placeholder="mês-ano(mm-aaaa)"
                value={this.state.mes}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.onMesChange}
                >
            </Input>
            <Input
                placeholder="Moradia"
                value={this.categoriainputMoradia}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.onCategoriaInputChangeMoradia}
                >
            </Input>
            <Input
                placeholder="Supermercado"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.onCategoriaInputChangeSupermercado}
                >
            </Input>
            <Input
                placeholder="Transporte"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.onCategoriaInputChangeTransporte}
                >
            </Input>
            <Input
                placeholder="Lazer"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.onCategoriaInputChangeLazer}
                >
            </Input>
            <Input
                placeholder="Saúde"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.onCategoriaInputChangeSaude}
                >
            </Input>
            <Input
                placeholder="Contas"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.onCategoriaInputChangeContas}
                >
            </Input>
            <Input
                placeholder="Restaurante/Delivery"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.onCategoriaInputChangeRD}
                >
            </Input>
            <Input
                placeholder="Outros"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={this.onCategoriaInputChangeOutros}
                >
            </Input>
            <Text>Total: R$</Text>
            <ButtonBox>
              <Button onPress={this.onPressSave.bind(this)}>
                <ButtonText>
                  Salvar
                </ButtonText>
              </Button>
            </ButtonBox>
        </ContentBox>
      </Container>
    );
  }
}

export default ManagePlanning;