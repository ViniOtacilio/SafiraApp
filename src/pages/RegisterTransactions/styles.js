import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #1E2749;
    padding: 60px 20px;
    justify-content: space-between;
`;

export const Header = styled.View`
    flex: 1;
    background: #1E2749;
    flex-direction: row;
    justify-content: space-between;
    max-height: 30px;
`;

export const UserBox = styled.View`
    display: flex;
    flex-direction: row;
    max-height: 30px;
`;

export const Title = styled.Text`
    color: #FAFAFF;
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
    color: #FAFAFF; 
    align-self: center;
`;

export const Input = styled.TextInput`
    background: #FAFAFF; 
    height: 40px;
    width: 80%;
    border-radius: 4px;
    padding: 8px;
    font-size: 18px;
    text-align: center;
    margin: 0 auto;
`;

export const SelectBox = styled.View`
    width: 80%;
    margin: 0 auto;
`;
