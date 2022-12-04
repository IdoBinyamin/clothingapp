import { Button, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import SetTable from '../Ui/SetTable';
import { useDispatch } from 'react-redux';
import {
  countSuccessSets,
  resetProgressCounter,
  addShirt,
  addPants,
  addShoe,
} from '../store/completeSet';

export default function Success({ navigation }) {
  const dispatch = useDispatch();

  const [randomNumber, setRandomNumber] = useState(getRandomInt(3));

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const makeAnotherSet = () => {
    dispatch(countSuccessSets());
    dispatch(resetProgressCounter());
    dispatch(addShirt(''));
    dispatch(addPants(''));
    dispatch(addShoe(''));

    navigation.navigate('home');
    console.log('work');
  };
  return (
    <View style={{ marginHorizontal: 15 }}>
      <SetTable randomNumber={randomNumber} />
      <Button title="Make another set!" onPress={makeAnotherSet} />
    </View>
  );
}

const styles = StyleSheet.create({});
