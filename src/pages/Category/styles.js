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

export const NewCategory = styled.View`
  display: flex;
`;

export const AddNewCatogory = styled.View `
    display: flex;
`
