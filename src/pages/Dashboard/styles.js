import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background: #f5f5f5;
  padding: 35px 0px 10px 0px;
`;

export const DashboardHeader = styled.View`
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

export const Title = styled.Text`
  ${"" /* color: #DAE3E5; */}
  color: #DAE3E5;
  font-size: 20px;
  margin: 0 8px;
`;

export const TextSaldo = styled.Text`
  padding: 0;
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  ${"" /* color: #DAE3E5;  */}
  color: #000;
`;

export const HistoricBox = styled.ScrollView`
  display: flex;
  flex-direction: column;
  ${"" /* background-color: rgb(39, 52, 105); */}
  background-color: #fff;
  width: 80%;
  max-height: 350px;
  margin: 0 auto;
  border-radius: 4px;
  padding: 8px;
  border: 1px solid #000;
`;

export const HistoricItem = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  border-radius: 4px;
  margin: 20px 0;
  justify-content: space-between;
`;

export const HistoricItemLeft = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HistoricTextBox = styled.View``;

export const HistoricTextTitle = styled.Text`
  font-weight: bold;
  ${"" /* color: #DAE3E5; */}
`;

export const HistoricText = styled.Text`
  ${"" /* color: #DAE3E5; */}
  color: #000;
`;
export const IconBox = styled.View`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
`;
