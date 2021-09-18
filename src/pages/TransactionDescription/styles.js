import styled from 'styled-components/native';

export const Container = styled.View`
  ${'' /* flex: 1; */}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f5f5f5;
  padding: 35px 0px 10px 0px;
`;

export const DescriptionHeader = styled.View`
  ${'' /* flex: 1; */}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 8px;
  background: #507DBC;
`;

export const UserBox = styled.View`
    display: flex;
    flex-direction: row;
    max-height: 30px;
`;

export const Title = styled.Text`
    color: #DAE3E5;
    font-size: 20px;
    margin: 0 8px;
`;

export const DescriptionBox = styled.View`
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    ${'' /* width: 80%; */}
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px 10px;
`;

export const DescriptionInfoBox = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${'' /* margin: 40px 0 auto;
    padding: 12px 0;
    background: #507DBC;
    border: 1px solid #DAE3E5;
    border-radius: 4px;
    min-height: 400px; */}
`;

export const TransactionTitle = styled.Text`
    color: #507DBC;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
`;

export const TransactionInfoBox = styled.View`
    flex-direction: row;
    padding: 6px;
    margin-bottom: 20px;
`;

export const TransactionInfoBold = styled.Text`
    color: #507DBC;
    margin: 16px 8px 8px 8px;
    font-size: 16px;
    font-weight: bold;
`;

export const TransactionInfo = styled.Text`
    color: #000;
    margin: 0 8px;
    font-size: 14px;
`;