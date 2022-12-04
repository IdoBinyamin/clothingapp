import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { useSelector } from 'react-redux';

const SetTable = ({ randomNumber }) => {
  const setComplition = useSelector(
    (state) => state.fullClothingSet.completeSet
  );

  const header = ['Description', 'Shirt', 'Pants', 'Shoe'];
  const data = [
    [
      'Brand',
      setComplition.shirt[0],
      setComplition.pants[0],
      setComplition.shoe[0],
    ],
    [
      'Color',
      setComplition.shirt[1],
      setComplition.pants[1],
      setComplition.shoe[1],
    ],
    [
      'Size',
      setComplition.shirt[2],
      setComplition.pants[2],
      setComplition.shoe[2],
    ],
  ];

  return (
    <View style={{ marginTop: 200, alignContent: 'center' }}>
      <View style={{ height: 200, width: 200, top: -150, left: 80 }}>
        {randomNumber === 0 && (
          <Image source={require('../assets/download.png')} size={25} />
        )}
        {randomNumber === 2 && (
          <Image source={require('../assets/images.png')} size={25} />
        )}
        {randomNumber === 1 && (
          <Image source={require('../assets/expload.png')} size={25} />
        )}
      </View>

      <Text style={{ fontSize: 18 }}>Youre new outfit:</Text>

      <Table
        borderStyle={{
          borderWidth: 2,
          borderColor: '#c8e1ff',
        }}
      >
        <Row data={header} />
        <Rows data={data} />
      </Table>
    </View>
  );
};

export default SetTable;
