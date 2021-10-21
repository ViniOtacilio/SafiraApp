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

export const ReleaseContent = styled.View`

`;

export const ReleaseBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  border: 1px solid #507DBC;
  border-radius: 10px;
  margin: 0 auto auto;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ReleaseTitle = styled.Text`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #507DBC;
    font-size: 16px;
`;
