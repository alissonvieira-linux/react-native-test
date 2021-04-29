import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 100px 30px;
  background-color: #2c3e50;

  align-items: center;
  justify-content: center;
`;

export const AgeInsertContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FormContainer = styled.View`
  width: 100%;
`;

export const AgeText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;

  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 45%;
  margin-right: 10px;

  padding: 0 10px;
`;

export const InsertButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: #1abc9c;
  width: 45%;

  align-items: center;
  justify-content: center;
`;

export const InsertButtonText = styled.Text`
  font-size: 16px;
  color: #353535;
`;

export const ListContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 10px 0;
`;

export const List = styled.FlatList`
  flex: 1;
  background-color: #fff;
  width: 100%;

  padding: 10px 20px;
`;

export const ListItem = styled.View`
  
`;

export const ButtonCalc = styled.TouchableOpacity`
  background-color: #3498db;
  width: 100%;
  padding: 10px 0;

  align-items: center;
  justify-content: center;

  margin-top: 10px;
`;

export const ButtonCalcText = styled.Text`
  font-size: 16px;
  color: #fff;
`;