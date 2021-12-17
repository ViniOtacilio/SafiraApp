import React, { Component } from "react";
import { View, Text } from "react-native";
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import {
    Container,
    DashboardHeader,
    UserBox,
    Title,
    TextSaldo,
    HistoricBox,
    HistoricItem,
    HistoricItemLeft,
    HistoricTextBox,
    HistoricTextTitle,
    HistoricText,
    IconBox,
} from "./styles";
import APIKit from "../../utils/APIKit";
import {
    SimpleLineIcons,
    Ionicons,
    FontAwesome,
    MaterialIcons,
    AntDesign,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";

const initialState = {
    isAuthenticated: false,
};
const contentInset = { top: 20, bottom: 20 }
let chartData = [];
class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            x: [],
            isAuthenticated: false,
            userName: "",
            saldo: [],
            saldoA: 0,
            dates: [['2021-01-01',
                '2021-01-31'],
            ['2021-02-01',
                '2021-02-28'],
            ['2021-03-01',
                '2021-03-31'],
            ['2021-04-01',
                '2021-04-30'],
            ['2021-05-01',
                '2021-05-31'],
            ['2021-06-01',
                '2021-06-30'],
            ['2021-07-01',
                '2021-07-31'],
            ['2021-08-01',
                '2021-08-31'],
            ['2021-09-01',
                '2021-09-30'],
            ['2021-10-01',
                '2021-10-31'],
            ['2021-11-01',
                '2021-11-30'],
            ['2021-12-01',
                '2021-12-31']],
            saldosMonth: [],
            lastRefresh: Date(Date.now()).toString(),
            shouldUpdate: "",
        };
        this.refreshScreen = this.refreshScreen.bind(this);
    }

    refreshScreen() {
        this.setState({ lastRefresh: Date(Date.now()).toString() });
        this.setState({ shouldUpdate: "true" });
        this.props.route.params = null;
    }

    componentWillUnmount() { }

    async componentDidMount() {
        const userId = await AsyncStorage.getItem("userId");
        const userName = await AsyncStorage.getItem("username");

        if (userId == null || userId == "null") {
            this.props.navigation.navigate("Login");
        }
        const onSuccess = ({ data }) => {
            this.setState({ userName: userName });
            this.setState({ isAuthenticated: true });
            this.setState({ x: data });
        };

        const onSuccessSaldo = ({ data }) => {
            this.setState({ saldo: data });
        };

        const onSucessLancamentoByMonth = ({ data }) => {
            console.log(data);
            data.map((lancamento) => {
                if (lancamento.tipo_de_transacao == 1) {
                    this.state.saldoA += parseFloat(lancamento.value)
                }
                if (lancamento.tipo_de_transacao == 2) {
                    this.state.saldoA -= parseFloat(lancamento.value)
                }
            })
            console.log(this.state.saldoA);
            this.state.saldosMonth.push(this.state.saldoA);
            chartData = this.state.saldosMonth;

        };

        APIKit.get("/api/users/saldo/?user_id=" + userId).then(onSuccessSaldo);
        APIKit.get("/api/users/lancamento/?user_id=" + userId).then(onSuccess);
        this.state.dates.map(function (item) {
            console.log(item[0] + " " + item[1]);
            APIKit.get(
                "/api/users/lancamento/?user_id=" +
                userId +
                "&start_date=" +
                item[0] +
                "&end_date=" +
                item[1]
            ).then(onSucessLancamentoByMonth);
        }
        );

    }

    async componentDidUpdate() {
        const userId = await AsyncStorage.getItem("userId");
        const userName = await AsyncStorage.getItem("username");

        if (userId == null || userId == "null") {
            this.props.navigation.navigate("Login");
        }

        const onSuccess = ({ data }) => {
            this.setState({ userName: userName });
            this.setState({ isAuthenticated: true });
            this.setState({ x: data });
        };

        const onSuccessSaldo = ({ data }) => {
            this.setState({ saldo: data });
        };



        if (this.state.shouldUpdate == "true") {
            console.log("entrou aqui?");
            APIKit.get("/api/users/saldo/?user_id=" + userId).then(onSuccessSaldo);
            APIKit.get("/api/users/lancamento/?user_id=" + userId).then(onSuccess);
            this.setState({ shouldUpdate: false });
        }

        if (this.props.route.params) {
            const onSuccess = ({ data }) => {
                this.setState({ x: data });
            };
            APIKit.get(
                "/api/users/lancamento/?user_id=" +
                userId +
                this.props.route.params.filterUrl
            ).then(onSuccess);
            this.props.route.params = null;
        }
    }

    render() {
        return (
            <Container>
                {/* DashboardHeader devia ser um componente Header */}
                <DashboardHeader>
                    <UserBox>
                        <FontAwesome
                            name="user-circle"
                            size={26}
                            color="#DAE3E5"
                        />
                        <Title>
                            {translate("hello")}, {this.state.userName}!
            </Title>
                    </UserBox>
                    <SimpleLineIcons
                        name="menu"
                        size={24}
                        // color="#DAE3E5"
                        color="#DAE3E5"
                        onPress={() => this.props.navigation.navigate("HamburguerMenu")}
                    />
                </DashboardHeader>
                <View>
                    {this.state.saldo.map((data, index) => {
                        data.value = data.value.replace(".", ",");
                        var saldo = data.value.split(",");
                        return (
                            <TextSaldo
                                style={{ includeFontPadding: false }}
                                key={index}
                            >
                                {translate("balance")}: R$
                                {saldo[0].concat(",", saldo[1].substring(0, 2))}
                            </TextSaldo>
                        );
                    })}
                </View>
                <HistoricBox showsHorizontalScrollIndicator={false}>
                    <View style={{ height: 200, flexDirection: 'row' }}>
                        <YAxis
                            data={chartData}
                            contentInset={contentInset}
                            svg={{
                                fill: 'grey',
                                fontSize: 14,
                            }}
                            numberOfTicks={12}
                            formatLabel={(value) => `R$${value}`}
                        />
                        <LineChart
                            style={{ flex: 1, marginLeft: 16 }}
                            data={chartData}
                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                            contentInset={contentInset}
                        >
                            <Grid />
                        </LineChart>
                    </View>
                    {this.state.x.map((data, index) => {
                        if (data.tipo_de_transacao == 1) {
                            data.tipo_de_transacao = "Entrada";
                        }
                        if (data.tipo_de_transacao == 2) {
                            data.tipo_de_transacao = "Saída";
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
                        return (
                            <HistoricItem key={"historic-item-" + index}>
                                <HistoricItemLeft>
                                    <MaterialIcons
                                        key={"historic-icon-" + index}
                                        name="attach-money"
                                        size={24}
                                        // color="#DAE3E5"
                                        color="#507DBC"
                                    />
                                    <HistoricTextBox key={"historic-text-box-" + index}>
                                        <HistoricTextTitle key={"historic-text-title-" + index}>
                                            {data.tipo_de_transacao + " - " + data.titulo_lancamento}
                                        </HistoricTextTitle>
                                        <HistoricText key={"historic-text-" + index}>
                                            {"R$" +
                                                value[0].concat(",", value[1].substring(0, 2)) +
                                                " - " +
                                                formatted_date_br}
                                        </HistoricText>
                                    </HistoricTextBox>
                                </HistoricItemLeft>
                                <MaterialIcons
                                    name="description"
                                    size={24}
                                    // color="#DAE3E5"
                                    color="#507DBC"
                                    onPress={() => {
                                        console.log(data.id);
                                        this.props.navigation.navigate('TransactionDescription', {
                                            id: data.id,
                                        })
                                    }
                                    }
                                />
                            </HistoricItem>
                        );
                    }).reverse()}
                </HistoricBox>


                <IconBox>
                    <Ionicons
                        name="ios-add-circle-outline"
                        size={44}
                        // color="#DAE3E5"
                        color="#507DBC"
                        style={{ textAlign: "right" }}
                        onPress={() =>
                            this.props.navigation.navigate("RegisterTransactions")
                        }
                    />
                    <AntDesign
                        name="filter"
                        size={38}
                        // color="#DAE3E5"
                        color="#507DBC"
                        onPress={() => this.props.navigation.navigate("ReportsFilter")}
                    />
                    <Ionicons
                        name="refresh-circle-outline"
                        size={44}
                        // color="#DAE3E5"
                        color="#507DBC"
                        style={{ textAlign: "left" }}
                        onPress={this.refreshScreen}
                    />
                </IconBox>
            </Container>
        );
    }
}

export default Dashboard;
