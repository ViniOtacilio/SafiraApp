import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #1E2749;
    padding: 60px 20px;
`;

export const DescriptionHeader = styled.View`
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

export const DescriptionBox = styled.View`
    flex-direction: row;
    padding: 12px 0;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
`;

export const DescriptionInfoBox = styled.ScrollView`
    width: 100%;
    margin: 40px 0 auto;
    padding: 12px 0;
    background: #273469;
    border: 1px solid #FAFAFF;
    border-radius: 4px;
    min-height: 400px;
`;

export const TransactionTitle = styled.Text`
    color: #FAFAFF;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
`;

export const TransactionInfoBox = styled.View`
    flex-direction: row;
    margin-bottom: 5px;
`;

export const TransactionInfoBold = styled.Text`
    color: #FAFAFF;
    margin: 0 8px;
    font-size: 14px;
    font-weight: bold;
`;

export const TransactionInfo = styled.Text`
    color: #FAFAFF;
    margin: 0 8px;
    font-size: 14px;
`;