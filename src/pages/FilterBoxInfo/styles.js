import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #1E2749;
    padding: 60px 20px;
`;

export const FilterHeader = styled.View`
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

export const FilterBox = styled.View`
    flex-direction: row;
    padding: 12px 0;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
`;

export const InputBox = styled.View`
    flex-direction: row;
    padding: 12px 0;
    width: 80%;
`;

export const Input = styled.TextInput`
    background: #FAFAFF;
    height: 32px;
    width: 100%;
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
`;

export const SelectBox = styled.View`
    width: 80%;
    margin: 0 auto;
    padding: 12px 0;
`;

export const ButtonText = styled.Text`
    text-align: center;
    height: 30px;
    line-height: 30px;
    color: #FAFAFF;
    font-size: 18px;
    font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
    background: transparent;
    border: 1px solid #FAFAFF;
    border-radius: 4px;
    width: 80%;
    margin-top: 20px;
`;

export const FilterInfoBox = styled.ScrollView`
    width: 80%;
    margin: 40px 0 auto;
    padding: 12px 0;
    background: #273469;
    border: 1px solid #FAFAFF;
    border-radius: 4px;
    min-height: 50%;
`;

export const FilterItem = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    border-radius: 4px;
    margin: 10px;
    color: #FAFAFF;
`;

export const FilterTextBox = styled.View`
    color: #FAFAFF;
`;

export const FilterTextTitle = styled.Text`
    font-weight: bold;
    color: #FAFAFF;
`;

export const FilterText = styled.Text`
    color: #FAFAFF;
`;