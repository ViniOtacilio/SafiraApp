import React, { Component } from "react";
import {
  Container,
  ReportsHeader,
  ReportsTitleBox,
  ReportsTitle,
  FilterMonthlyBox,
  FilterMonthlyBox1,
  ReportsSubTitle,
  ReceitaText,
  DespesaText,
  SaldoText,
  CategoriaText,
  AdvancedFilterLink,
} from "./styles";
import APIKit from "../../utils/APIKit";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";
import ScrollingButtonMenu from 'react-native-scroll-menu';

let menus = [
    {
        name: 'JAN',
        id: 1,
        backgroundColor: 'red',
        borderColor: '#388E3C',
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
        isAuthenticated: false,
    };
  }

  componentWillUnmount() {}

  async componentDidMount() {
    const userId = await AsyncStorage.getItem("userId");
    const userName = await AsyncStorage.getItem("username");
    console.log(userId)

    if (userId == null || userId == "null") {
      this.props.navigation.navigate("Login");
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
        });
        saldo = receita - despesa;
        this.setState({ receita: receita });
        this.setState({ despesa: despesa });
        this.setState({ saldo: saldo });
        console.log('receita: ' + this.state.receita);
        console.log('despesa: ' + this.state.despesa);
        console.log('saldo: ' + this.state.saldo);
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
        <ReportsHeader>
            <ReportsTitle>
                Relatórios
            </ReportsTitle>
            <AntDesign
                name="close"
                size={24}
                color="#DAE3E5"
                onPress={() => this.props.navigation.navigate("Dashboard")}
            />
        </ReportsHeader>

        <ScrollingButtonMenu
            items={menus}
            style={{padding:30}}
            onPress={(e) => {
                this.onPressFilter(e.id);
            }}
        />

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
                Moradia: R$200,00
            </CategoriaText>
            <CategoriaText>
                Supermercado: R$200,00
            </CategoriaText>
            <CategoriaText>
                Transporte: R$200,00
            </CategoriaText>
            <CategoriaText>
                Lazer: R$200,00
            </CategoriaText>
            <CategoriaText>
                Saúde: R$200,00
            </CategoriaText>
            <CategoriaText>
                Contas: R$200,00
            </CategoriaText>
            <CategoriaText>
                Restaurente / Delivery: R$200,00
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
