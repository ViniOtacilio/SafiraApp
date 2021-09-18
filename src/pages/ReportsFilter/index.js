import React, { Component } from "react";
import {
  Container,
  ReportsHeader,
  AdvancedFilterLink,
} from "./styles";
import APIKit from "../../utils/APIKit";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translate } from "../../locales";

class ReportsFilter extends Component {
  render() {
    return (
      <Container>
        <ReportsHeader>
            Relatórios
            <AntDesign
                name="close"
                size={24}
                color="#DAE3E5"
                onPress={() => this.props.navigation.navigate("Dashboard")}
            />
        </ReportsHeader>
        <AdvancedFilterLink onPress={() => this.props.navigation.navigate("Filter")}>
            Filtros Avançados
        </AdvancedFilterLink>
      </Container>
    );
  }
}

export default ReportsFilter;
