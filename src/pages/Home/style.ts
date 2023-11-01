import styled from 'styled-components/native';
export const Container = styled.View`
  flex: 1;
  background-color: blue;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;

`;

export const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ButtonInput = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  color: #000;
`;