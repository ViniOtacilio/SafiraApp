import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #f5f5f5;
    padding: 35px 0px 10px 0px;
    justify-content: space-between;
`;

export const Header = styled.View`
  flex: 1;
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
    color: #DAE3E5;
    font-size: 20px;
    margin: 0 8px;
`;

export const BalanceBox = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
`;

export const BalanceBoxIcon = styled.View`
    align-self: flex-start;
`;

export const Text = styled.Text`
    font-size: 24px;
    font-weight: bold;
    text-align: center; 
    color: #DAE3E5; 
    align-self: center;
`;

export const Input = styled.TextInput`
    background: rgba(187, 209, 234, 0.5); 
    height: 40px;
    width: 80%;
    border-radius: 4px;
    padding: 8px;
    font-size: 18px;
    margin: 0 auto;
`;

export const SelectBox = styled.View`
    width: 80%;
    margin: 0 auto;
`;

export const ErrorText = styled.Text`
    background: transparent;
    color: red;
    width: 100%;
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
    text-align: center;   
`;