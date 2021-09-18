import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    background: #f5f5f5;
    padding: 35px 0px 10px 0px;
`;

export const ReportsHeader = styled.View`
  flex: 1;
  ${"" /* background: #1E2749; */}
  background: #507DBC;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-height: 60px;
  padding: 8px;
  padding-left: 30px;
  font-size: 20px;
  color: rgb(218, 227, 229);
`;

export const AdvancedFilterLink = styled.Text`
  padding: 0 0 20px 0;
  margin: 0;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  ${"" /* color: #DAE3E5;  */}
  color: #507DBC;
`;
