import React, { useState } from 'react';
import { Alert } from 'react-native';

import {
  Container,
  Input,
  AgeInsertContainer,
  FormContainer,
  AgeText,
  InsertButton,
  InsertButtonText,
  ButtonCalc,
  ButtonCalcText,
  ListContainer,
  List,
  ListItem
} from './styles';

import ListItemText from '../../components/ListItemText';
import { generateRandomId } from '../../utils/generateRandomId';

function Home() {
  const [ages, setAges] = useState([]);
  const [currentAge, setCurrentAge] = useState('');

  const handleInsertAge = () => {
    if (currentAge !== '') {
      const updatedAges = [...ages];
      const id = generateRandomId();

      const newAge = {
        id,
        age: Number(currentAge)
      }

      updatedAges.push(newAge);

      setAges(updatedAges);
      setCurrentAge('');
    }
  }

  const handleCalculate = () => {
    let sum = 0;

    ages.forEach(item => sum += item.age);
    const result = (sum / ages.length);

    Alert.alert(
      "Média calculada",
      `Total de participantes: ${ages.length} | Média entre as idades: ${result.toFixed(2)}`,
      [
        {
          text: "OK"
        }
      ],
      { cancelable: false }
    );
  }

  const renderItem = ({item}) => (
    <ListItem>
      <ListItemText age={item.age} />
    </ListItem>
  )


  return (
    <Container>
      <FormContainer>
        <AgeText>Idades</AgeText>
        <AgeInsertContainer>
          <Input 
            keyboardType="numeric" 
            onChangeText={text => setCurrentAge(text)}
            value={currentAge}
          />
          <InsertButton onPress={handleInsertAge}>
            <InsertButtonText>Inserir</InsertButtonText>
          </InsertButton>
        </AgeInsertContainer>
      </FormContainer>

      <ListContainer>
        <List 
            data={ages}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
      </ListContainer>
        
      <ButtonCalc onPress={handleCalculate}>
        <ButtonCalcText>Calcular Média</ButtonCalcText>
      </ButtonCalc>

    </Container>
  )
}

export default Home;