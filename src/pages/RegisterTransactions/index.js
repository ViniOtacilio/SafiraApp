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
  SelectBox
} from "./styles";
import APIKit from "../../utils/APIKit";
import { 
} from '@expo/vector-icons';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
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

class RegisterTransactions extends Component {
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
            onPress={value => this.setState({ entrance_exit: value })}
            textColor={'#E4D9FF'}
            selectedColor={'#30343F'}
            buttonColor={'#E4D9FF'}
            borderColor={'#E4D9FF'}
            hasPadding
            options={[
              { label: "Entrada", value: "entrada" }, 
              { label: "Saída", value: "saida" } 
            ]}
            borderRadius={4}
            fontSize={18}
          />
        </SelectBox>
        <Input
            placeholder="Valor"
        ></Input>
        <Input
            placeholder="Descrição"
        ></Input>
        <Input
            placeholder="Data"
        ></Input>
        <SelectBox>
          <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                  { label: 'Saúde', value: 'saude' },
                  { label: 'Baseball', value: 'baseball' },
                  { label: 'Hockey', value: 'hockey' },
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
        
        <SelectBox>
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
        </SelectBox>
        <SimpleLineIcons name="check"  size={44} color="#FAFAFF" style={{textAlign: 'center', cursor: 'pointer'}}  />
      </Container>
    );
  }
}

const Styles = StyleSheet.create({
  Title: {
    fontFamily: "Roboto_400Regular",
  },
  Container: {
    fontFamily: "Roboto_100Thin",
  },
  Button: {
    fontFamily: "Roboto_300Light",
  },
});

export default RegisterTransactions;