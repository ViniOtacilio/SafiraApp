import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background: #f5f5f5;
  padding: 35px 0px 0px 0px;
`;

export const MenuHamburguerHeader = styled.View`
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

export const MenuHamburguerBox = styled.View`
    margin-top: 40px;
    background: #507DBC;
    ${'' /* border-radius: 4px; */}
    margin-bottom: 0;
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
    color: #f5f5f5; 
    margin-left: 10px;
`;