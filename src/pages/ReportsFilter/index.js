import React, { Component } from "react";
import {
  Container,
  Header,
  UserBox,
  HeaderTitle,
  ReportsTitleBox,
  FilterMonthlyBox,
  FilterMonthlyBox1,
  ReportsSubTitle,
  ReceitaText,
  DespesaText,
  SaldoText,
  CategoriaText,
  AdvancedFilterLink,
  ScrollingButtonMenuBox
} from "./styles";
import APIKit from "../../utils/APIKit";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";
import ScrollingButtonMenu from 'react-native-scroll-menu';

let menus = [
    {
        name: 'JAN',
        id: 1,
    },
    {
        name: 'FEV',
        id: 2,
    },
    {
        name: 'MAR',
        id: 3,
    },
    {
        name: 'ABR',
        id: 4,
    }
    ,
    {
        name: 'MAI',
        id: 5,
    },
    {
        name: 'JUN',
        id: 6,
    },
    {
        name: 'JUL',
        id: 7,
    },
    {
        name: 'AGO',
        id: 8,
    },
    {
        name: 'SET',
        id: 9,
    },
    {
        name: 'OUT',
        id: 10,
    },
    {
        name: 'NOV',
        id: 11,
    },
    {
        name: 'DEZ',
        id: 12,
    }
];

class ReportsFilter extends Component {
   constructor() {
    super();
    this.state = {
        x: [],
        receita: 0,
        despesa: 0,
        saldo: 0,
        month: '',
        moradiaGastos: 0,
        supermercadoGastos: 0,
        transporteGastos: 0,
        lazerGastos: 0,
        saudeGastos: 0,
        contasGastos: 0,
        restauranteGastos: 0,
        outrosGastos: 0,
        isAuthenticated: false,
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

  async onPressFilter(id) {
    var start_date = '';
    var end_date = '';
    switch (id) {
        case 1:
            console.log('janeiro');
            this.setState({ month: 'Jan' });
            start_date = '2021-01-01';
            end_date = '2021-01-31';
            break;
        case 2:
            console.log('fevereiro');
            this.setState({ month: 'Fev' });
            start_date = '2021-02-01';
            end_date = '2021-02-28';
            break;
        case 3:
            console.log('março');
            this.setState({ month: 'Mar' });
            start_date = '2021-03-01';
            end_date = '2021-03-31';
            break;
        case 4:
            console.log('abril');
            this.setState({ month: 'Abr' });
            start_date = '2021-04-01';
            end_date = '2021-04-30';
            break;
        case 5:
            console.log('maio');
            this.setState({ month: 'Mai' });
            start_date = '2021-05-01';
            end_date = '2021-05-31';
            break;
        case 6:
            console.log('junho');
            this.setState({ month: 'Jun' });
            start_date = '2021-06-01';
            end_date = '2021-06-30';
            break;
        case 7:
            console.log('julho');
            this.setState({ month: 'Jul' });
            start_date = '2021-07-01';
            end_date = '2021-07-31';
            break;
        case 8:
            console.log('agosto');
            this.setState({ month: 'Ago' });
            start_date = '2021-08-01';
            end_date = '2021-08-31';
            break;
        case 9:
            console.log('setembro');
            this.setState({ month: 'Set' });
            start_date = '2021-09-01';
            end_date = '2021-09-30';
            break;
        case 10:
            console.log('outubro');
            this.setState({ month: 'Out' });
            start_date = '2021-10-01';
            end_date = '2021-10-31';
            break;
        case 11:
            console.log('novembro');
            this.setState({ month: 'Nov' });
            start_date = '2021-11-01';
            end_date = '2021-11-30';
            break;
        case 12:
            console.log('dezembro');
            this.setState({ month: 'Dez' });
            start_date = '2021-12-01';
            end_date = '2021-12-31';
            break;
        default:
            console.log('teste');
            break;
    }
    
    const onSuccess = ({ data }) => {
        this.setState({ isAuthenticated: true });
        this.setState({ x: data });
        var receita = 0;
        var despesa = 0;
        var saldo = 0;
        var moradiaGastos = 0;
        var supermercadoGastos = 0;
        var transporteGastos = 0;
        var lazerGastos = 0;
        var saudeGastos = 0;
        var contasGastos = 0;
        var restauranteGastos = 0;
        var outrosGastos = 0;
        console.log(data)
        data.map(function(item) {
            //entrada
            if (item.tipo_de_transacao == 1) {
                //console.log(parseFloat(item.value));
                receita += parseFloat(item.value);
            }
            //saida
            if (item.tipo_de_transacao == 2) {
                //console.log(parseFloat(item.value))
                despesa += parseFloat(item.value);
            }
            if (item.categoriaid == 1) {
                if (item.tipo_de_transacao == 2) {
                    moradiaGastos += parseFloat(item.value);
                }
            }
            if (item.categoriaid == 2) {
                if (item.tipo_de_transacao == 2) {
                    supermercadoGastos += parseFloat(item.value);
                }
            }
            if (item.categoriaid == 3) {
                if (item.tipo_de_transacao == 2) {
                    transporteGastos += parseFloat(item.value);
                }
            }
            if (item.categoriaid == 4) {
                if (item.tipo_de_transacao == 2) {
                    lazerGastos += parseFloat(item.value);
                }
            }
            if (item.categoriaid == 5) {
                if (item.tipo_de_transacao == 2) {
                    saudeGastos += parseFloat(item.value);
                }
            }
            if (item.categoriaid == 6) {
                if (item.tipo_de_transacao == 2) {
                    contasGastos += parseFloat(item.value);
                }
            }
            if (item.categoriaid == 7) {
                if (item.tipo_de_transacao == 2) {
                    restauranteGastos += parseFloat(item.value);
                }
            }
            if (item.categoriaid == 8) {
                if (item.tipo_de_transacao == 2) {
                    outrosGastos += parseFloat(item.value);
                }
            }
        });
        saldo = receita - despesa;
        this.setState({ receita: receita });
        this.setState({ despesa: despesa });
        this.setState({ saldo: saldo });
        this.setState({ moradiaGastos: moradiaGastos });
        this.setState({ supermercadoGastos: supermercadoGastos });
        this.setState({ transporteGastos: transporteGastos });
        this.setState({ lazerGastos: lazerGastos });
        this.setState({ saudeGastos: saudeGastos });
        this.setState({ contasGastos: contasGastos });
        this.setState({ restauranteGastos: restauranteGastos });
        this.setState({ outrosGastos: outrosGastos });
        console.log('receita: ' + this.state.receita);
        console.log('despesa: ' + this.state.despesa);
        console.log('saldo: ' + this.state.saldo);
        console.log('outros: ' + this.state.outrosGastos);
    };

    const userId = await AsyncStorage.getItem("userId");

    APIKit.get(
        "/api/users/lancamento/?user_id=" +
        userId +
        "&start_date=" +
        start_date +
        "&end_date=" +
        end_date
    ).then(onSuccess);
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
            onPress={() => this.props.navigation.navigate("Dashboard")}
          />
        </Header>

        <ScrollingButtonMenuBox>
            <ScrollingButtonMenu
                items={menus}
                style={{padding:15}}
                onPress={(e) => {
                    this.onPressFilter(e.id);
                }}
            />
        </ScrollingButtonMenuBox>

        <FilterMonthlyBox>
            <ReportsTitleBox>
                <ReportsSubTitle>
                    Receita X Despesa
                </ReportsSubTitle>
                <ReportsSubTitle>
                    {this.state.month}
                </ReportsSubTitle>
            </ReportsTitleBox>
            <ReceitaText>
                Receitas: R${this.state.receita}
            </ReceitaText>
            <DespesaText>
                Despesas: R${this.state.despesa}
            </DespesaText>
            <SaldoText>
                Saldo: R${this.state.saldo}
            </SaldoText>
        </FilterMonthlyBox>

        <FilterMonthlyBox1>
            <ReportsTitleBox>
                <ReportsSubTitle>
                    Despesas por categoria
                </ReportsSubTitle>
                <ReportsSubTitle>
                    {this.state.month}
                </ReportsSubTitle>
            </ReportsTitleBox>
            <CategoriaText>
                Moradia: R${this.state.moradiaGastos}
            </CategoriaText>
            <CategoriaText>
                Supermercado: R${this.state.supermercadoGastos}
            </CategoriaText>
            <CategoriaText>
                Transporte: R${this.state.transporteGastos}
            </CategoriaText>
            <CategoriaText>
                Lazer: R${this.state.lazerGastos}
            </CategoriaText>
            <CategoriaText>
                Saúde: R${this.state.saudeGastos}
            </CategoriaText>
            <CategoriaText>
                Contas: R${this.state.contasGastos}
            </CategoriaText>
            <CategoriaText>
                Restaurente / Delivery: R${this.state.restauranteGastos}
            </CategoriaText>
            <CategoriaText>
                Outros: R${this.state.outrosGastos}
            </CategoriaText>
        </FilterMonthlyBox1>

        <AdvancedFilterLink onPress={() => this.props.navigation.navigate("Filter")}>
            Filtros Avançados
        </AdvancedFilterLink>
      </Container>
    );
  }
}

export default ReportsFilter;
