import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #1E2749;
    align-items: center;
    justify-content: center;
`;

export const HeaderBox = styled.Text`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 40px;
    width: 80%;
`;

export const Title = styled.Text`
    color: #FAFAFF;
    font-size: 40px;
    margin-left: 20px;
`;

export const InputBox = styled.View`
    flex-direction: row;
    padding: 12px 0;
    width: 80%;
    justify-content: space-between;
`;

export const Input = styled.TextInput`
    background: #FAFAFF;
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
    color: #FAFAFF;
    font-size: 20px;
    font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
    background: transparent;
    border: 1px solid #FAFAFF;
    border-radius: 4px;
    width: 80%;
    margin-top: 30px;
`;

export const Text = styled.Text`
  background: #FAFAFF;
    width: 100%;
    border-radius: 4px;
    padding: 8px;
    font-size: 18px;
    text-align: center;
    margin-left: 20px;    
`;