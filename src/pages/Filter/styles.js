import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    background: #f5f5f5;
    padding: 35px 0px 10px 0px;
`;

export const FilterHeader = styled.View`
  flex: 1;
  ${"" /* background: #1E2749; */}
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

export const FilterBox = styled.View`
    flex-direction: row;
    padding: 12px 0;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
`;

export const SelectBox = styled.View`
    width: 80%;
    margin: 0 auto;
    padding: 12px 0;
`;

export const ButtonText = styled.Text`
    text-align: center;
    height: 35px;
    line-height: 35px;
    color: rgb(245, 245, 245);;
    background-color: rgb(80, 125, 188);
    font-size: 16px;
    font-weight: bold;
    border: 1px solid rgb(80, 125, 188);
    border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
    background: transparent;
    border: 1px solid #DAE3E5;
    border-radius: 4px;
    width: 80%;
    margin-top: 20px;
`;

export const TextDate = styled.Text`
    font-size: 16px;
    color: rgb(80, 125, 188);
    margin: 10px;
`

