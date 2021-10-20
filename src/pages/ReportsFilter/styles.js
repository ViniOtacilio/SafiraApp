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
  padding: 8px;
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
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
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
  ${"" /* background-color: rgb(39, 52, 105); */}
  background-color: #fff;
  width: 80%;
  margin: 10px auto 0;
  border-radius: 4px;
  padding: 8px;
`;

export const FilterMonthlyBox1 = styled.ScrollView`
  display: flex;
  flex-direction: column;
  ${"" /* background-color: rgb(39, 52, 105); */}
  background-color: #fff;
  width: 80%;
  margin: 10px auto 0;
  border-radius: 4px;
  padding: 8px;
  max-height: 200px;
`;

export const ReportsSubTitle = styled.Text`
  font-size: 16px;
  color: grey;
`;

export const ReceitaText = styled.Text`
  padding: 10px 0;
  margin: 0;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  ${"" /* color: #DAE3E5;  */}
  color: green;
`;

export const DespesaText = styled.Text`
  padding: 10px 0;
  margin: 0;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  ${"" /* color: #DAE3E5;  */}
  color: red;
`;

export const SaldoText = styled.Text`
  padding: 10px 0;
  margin: 0;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  ${"" /* color: #DAE3E5;  */}
  color: blue;
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
  padding-right: 15px;
  margin-left: -5px;
`;