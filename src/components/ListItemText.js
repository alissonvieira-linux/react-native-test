import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-weight: bold;
  color: ${props => props.color};
`;

export default function ListItemText({ age }) {
  const [textColor, setTextColor] = useState('#000');

  useEffect(() => {
    if (age < 20) {
      setTextColor('#2bb1db');
    } else if (age <= 40) {
      setTextColor('#824df2');
    } else {
      setTextColor('#e48a1f');
    }

  }, [])

  return (
    <Text color={textColor}>{age}</Text>
  )
}