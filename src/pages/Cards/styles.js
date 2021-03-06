import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    background: #f5f5f5;
    padding: 35px 0px 10px 0px;
`;

export const Header = styled.View`
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

export const HeaderTitle = styled.Text`
    color: #DAE3E5;
    font-size: 20px;
    margin: 0 8px;
`;

export const ContentBox = styled.View`
    height: 90%;
`;

export const PageTitle = styled.Text`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #507DBC;
    font-size: 24px;
    margin: 24px 8px;
`;

export const Input = styled.TextInput`
    background: #BBD1EA; 
    height: 40px;
    width: 80%;
    border-radius: 4px;
    padding: 8px;
    font-size: 18px;
    text-align: center;
    margin: 0 auto 5px;
`;

export const Text = styled.Text`
    color: #507DBC;
    font-size: 14px;
    margin: 0 auto;
    width: 80%;
    padding: 20px 0;
`;

export const ButtonBox = styled.View`
    padding: 20px 0;
    margin-top: -10px;
    background-color: rgb(245, 245, 245);
`;

export const ButtonText = styled.Text`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 200px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    background-color: #507DBC;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    padding: 4px;
`;

export const Button = styled.TouchableOpacity`
    text-align: center;
    background: transparent;
    border: 1px solid #DAE3E5;
    border-radius: 4px;
    margin: auto;
`;

export const Link = styled.Text`
  padding: 5px 0;
  margin: 0;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: #507DBC;
`;

export const CardBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  border: 1px solid #507DBC;
  border-radius: 10px;
  margin: 0 auto auto;
  padding: 5px;
  margin-bottom: 10px;
`;

export const CardTitle = styled.Text`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #507DBC;
    font-size: 15px;
`;

export const EachCard = styled.View `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 8px 0;
    padding: 8px;
    border: 1px solid #BBD1EA;
`

export const CardName = styled.Text`
    color: #000;
    font-size: 18px;
    margin-right: 18px;
    margin: 0 8px;
    align-self: center;
`;

export const ListAllCards = styled.View `
    ${'' /* width: 80%; */}
    margin: 16px 40px 16px 40px;
    display: flex;
    text-align: center;
    flex-direction: column;
    ${'' /* justify-content: center; */}
    justify-content: space-between;

`