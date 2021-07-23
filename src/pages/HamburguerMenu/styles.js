import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #1E2749;
    padding: 60px 20px;
    justify-content: space-between;
`;

export const MenuHamburguerHeader = styled.View`
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

export const MenuHamburguerBox = styled.View`
    margin-top: 40px;
    background: #FAFAFF;
    border-radius: 4px;
`;

export const MenuHamburguerItem = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const Text = styled.Text`
    font-size: 20px;
    text-align: center; 
    color: #1E2749; 
    margin-left: 10px;
`;