import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #1E2749;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #FAFAFF;
    font-size: 40px;
    margin: 0 0 40px;
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

export const Button = styled.TouchableOpacity`
    text-align: center;
    height: 44px;
    line-height: 44px;
    color: #30343F;
    background: #E4D9FF;
    border-radius: 4px;
    width: 80%;
    margin-top: 30px;
    font-size: 22px;
    font-weight: bold;
`;