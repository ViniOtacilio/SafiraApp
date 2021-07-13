import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #1E2749;
    padding: 60px 20px;
    justify-content: space-between;
`;

export const DashboardHeader = styled.View`
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

export const Text = styled.Text`
    font-size: 24px;
    font-weight: bold;
    text-align: center; 
    color: #FAFAFF; 
`;

export const HistoricBox = styled.ScrollView`
    display: flex;
    flex-direction: column;
    background: #FAFAFF;
    width: 80%;
    max-height: 350px;
    margin: 0 auto;
    border-radius: 4px;
    padding: 8px;
`;

export const HistoricItem = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    border-radius: 4px;
    margin: 20px 0;
`;

export const HistoricTextBox = styled.View`

`;

export const HistoricTextTitle = styled.Text`
    font-weight: bold;
`;

export const HistoricText = styled.Text`

`;