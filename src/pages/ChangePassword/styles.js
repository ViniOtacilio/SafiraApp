import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #f5f5f5;
    align-items: center;
    justify-content: center;
`;

export const CloseIcon = styled.View`
    position: absolute;
    top: 40px;
    right: 20px;
`;

export const HeaderBox = styled.Text`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 40px;
    width: 70%;
`;

export const Title = styled.Text`
    color: #507DBC;
    font-size: 26px;
    margin-left: 20px;
    text-align: center;
`;

export const InputBox = styled.View`
    flex-direction: row;
    padding: 12px 0;
    width: 80%;
    justify-content: space-between;
`;

export const Input = styled.TextInput`
    background: #507DBC;
    height: 44px;
    width: 100%;
    border-radius: 4px;
    padding: 8px;
    font-size: 18px;
`;

export const ButtonText = styled.Text`
    text-align: center;
    height: 40px;
    line-height: 40px;
    color: #fff;
    background-color: #507DBC;
    font-size: 16px;
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
    padding: 8px;
    font-size: 16px;
    text-align: center;
    margin-left: 20px; 
    color: #ffffff;   
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