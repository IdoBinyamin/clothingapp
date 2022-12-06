import React from 'react';
import { View, Text, Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { useSelector } from 'react-redux';
import { Ionicons, MaterialCommunityIcons } from 'react-native-vector-icons';

const SetTable = ({ randomNumber }) => {
  const setComplition = useSelector(
    (state) => state.fullClothingSet.completeSet
  );

  const header = [
    <Ionicons name={'shirt'} size={30} color="black" />,
    setComplition.shirt[0],
    setComplition.shirt[1],
    setComplition.shirt[2],
  ];
  const data = [
    [
      <Image source={require('../assets/pants.png')} />,
      setComplition.pants[0],
      setComplition.pants[1],
      setComplition.pants[2],
    ],
    [
      <MaterialCommunityIcons name={'shoe-sneaker'} size={35} color="black" />,
      setComplition.shoe[0],
      setComplition.shoe[1],
      setComplition.shoe[2],
    ],
  ];

  return (
    <View style={{ marginTop: 200, alignContent: 'center' }}>
      <View
        style={{
          height: 150,
          width: '100%',
          top: -150,
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        {randomNumber === 0 && (
          // left: 80,
          <Image
            source={require('../assets/download.png')}
            style={{ alignSelf: 'center' }}
          />
        )}
        {randomNumber === 1 && (
          <Image
            source={require('../assets/images.png')}
            style={{ alignSelf: 'center' }}
          />
        )}
        {randomNumber === 2 && (
          <Image
            source={require('../assets/expload.png')}
            style={{ alignSelf: 'center' }}
          />
        )}
      </View>

      <Text style={{ fontSize: 18 }}>Youre new outfit:</Text>

      <Table
        borderStyle={{
          borderWidth: 5,
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
