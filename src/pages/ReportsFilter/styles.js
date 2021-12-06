import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    background: #f5f5f5;
    padding: 35px 0px 10px 0px;
`;

export const Header = styled.View`
  flex: 1;
  ${"" /* background: #1E2749; */}
  background: #507DBC;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-height: 60px;
  padding: 8px 8px 0px 8px;
`;

export const UserBox = styled.View`
    display: flex;
    flex-direction: row;
    max-height: 30px;
`;

export const HeaderTitle = styled.Text`
    color: #DAE3E5;
    font-size: 20px;
    margin: 0 8px;
`;

export const ReportsTitleBox = styled.View`
  flex: 1;
  flex-direction: row;
  ${'' /* justify-content: flex-end; */}
  align-items: center;
  padding: 20px 10px 40px 10px;
`;


export const AdvancedFilterLink = styled.Text`
  padding: 10px 0;
  margin: 0;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  ${"" /* color: #DAE3E5;  */}
  color: #507DBC;
`;

export const FilterMonthlyBox = styled.View`
  display: flex;
  flex-direction: column;
  ${'' /* background-color: #fff; */}
  width: 80%;
  margin: 10px auto 0;
  ${'' /* border-radius: 4px; */}
  ${'' /* border: 2px solid #507DBC; */}
  padding: 8px;
`;

export const FilterMonthlyBox1 = styled.View`
  display: flex;
  flex-direction: column;
  ${"" /* background-color: rgb(39, 52, 105); */}
  ${'' /* background-color: #fff; */}
  width: 80%;
  margin: 10px auto 0;
  ${'' /* border-radius: 4px; */}
  ${'' /* border: 2px solid #507DBC; */}
  padding: 8px;
  ${'' /* max-height: 200px; */}
`;

export const ReportsSubTitle = styled.Text`
  font-size: 16px;
  color: #67d847;
  font-weight: bold;
`;

export const ReportsSubTitleDespesa = styled.Text`
  text-align: right;
  font-size: 16px;
  color: #ff3333;
  font-weight: bold;
`

export const ReceitaText = styled.Text`
  padding: 10px 0;
  margin: 0;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  ${"" /* color: #DAE3E5;  */}
  color: #67d847;
`;

export const DespesaText = styled.Text`
  padding: 10px 0;
  margin: 0;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  ${"" /* color: #DAE3E5;  */}
  color: #ff3333;
`;

export const SaldoText = styled.Text`
  padding: 10px 0;
  margin: 0;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  ${"" /* color: #DAE3E5;  */}
  ${'' /* color: #c0c0c0; */}
  color: black;
`;

export const CategoriaText = styled.Text`
  padding: 10px 0;
  margin: 0;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  ${"" /* color: #DAE3E5;  */}
  color: grey;
`;

export const ScrollingButtonMenuBox = styled.View`
  margin-top: -20px;
  padding-right: 15px;
  margin-left: -5px;
`;
export const ReportsSubTitleMes = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: bold;
`;

export const ReportsSubTitleCategory = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: bold;
`;