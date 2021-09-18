import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #f5f5f5;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #507DBC;
    font-size: 40px;
    margin: 0 0 40px;
`;

export const InputBox = styled.View`
    flex-direction: row;
    padding: 12px 0;
    width: 80%;
    justify-content: space-between;
    align-items: center;
`;

export const Input = styled.TextInput`
    background: #507DBC; 
    height: 40px;
    width: 100%;
    border-radius: 4px;
    padding: 8px;
    font-size: 18px;
`;

export const Link = styled.Text`
    color: #000;
    margin: 10px 0;
`;

export const ButtonText = styled.Text`
    text-align: center;
    height: 40px;
    line-height: 40px;
    color: #fff;
    background-color: #507DBC;
    font-size: 20px;
    font-weight: bold;
    border-radius: 4px;
`;

export const Button = styled.TouchableOpacity`
    background: transparent;
    border: 1px solid #DAE3E5;
    border-radius: 4px;
    width: 80%;
    margin-top: 30px;
`;

export const Text = styled.Text`
    background: #DAE3E5;
    width: 100%;
    border-radius: 4px;
    padding: 8px;
    font-size: 18px;
    text-align: center;
    margin-left: 20px;    
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
