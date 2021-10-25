import styled from 'styled-components/native';

export const Container = styled.View`
  ${'' /* flex: 1; */}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f5f5f5;
  padding: 35px 0px 10px 0px;
`;

export const CategoryHeader = styled.View`
  ${'' /* flex: 1; */}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 8px;
  background: #507DBC;
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

export const PageTitle = styled.Text`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #507DBC;
    font-size: 24px;
    margin: 24px 8px;
`;

export const NewCategory = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AddNewCategory = styled.View `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
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
    margin-top: 30px;
`;

export const InputBox = styled.View`
    text-align: center;
    flex-direction: row;
    padding: 12px 0;
    ${'' /* width: 80%; */}
    justify-content: space-between;
`;

export const Input = styled.TextInput`
    text-align: center;
    background: #BBD1EA;
    color: #808080;
    height: 44px;
    width: 280px;
    border-radius: 4px;
    padding: 8px;
    font-size: 18px;
`;

export const ListAllCategories = styled.View `
    ${'' /* width: 80%; */}
    margin: 16px 40px 16px 40px;
    text-align: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #BBD1EA;
    justify-content: space-between;

`

export const CategoryName = styled.Text`
    color: #000;
    font-size: 18px;
    margin-right: 18px;
    margin: 0 8px;
    align-self: center;
`;

export const EachCustomCategorie = styled.View `
`