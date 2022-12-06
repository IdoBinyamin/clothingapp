import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import StyledButton from '../Ui/StyledButton';
import { useSelector, useDispatch } from 'react-redux';
import * as Progress from 'react-native-progress';
import { getProductsFetch } from '../store/actins';
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from 'react-native-vector-icons';

export default function Home({ navigation }) {
  const user = {
    name: 'Buddy',
  };
  const setComplition = useSelector(
    (state) => state.fullClothingSet.completeSet
  );
  const setComplitionAmount = useSelector(
    (state) => state.fullClothingSet.successSets
  );
  const setProgressCounter = useSelector(
    (state) => state.fullClothingSet.progressCounter
  );

  const moveTooSuccessScreen = () => {
    navigation.navigate('success');
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsFetch());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome {user.name}</Text>
      <View style={styles.pageContainer}>
        <Text style={{ fontSize: 18 }}>Choose a full set to seccess!</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <Text>Progress bar</Text>
        <Progress.Bar progress={setProgressCounter} width={300} height={50} />
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          text={'Shirts'}
          onPress={() => navigation.navigate('Shirts')}
          style={styles.buttonStyle}
          icon={<Ionicons name={'shirt'} size={30} color="black" />}
        />
        <StyledButton
          text={'Pants'}
          onPress={() => navigation.navigate('Pants')}
          style={styles.buttonStyle}
          icon={<Image source={require('../assets/pants.png')} />}
        />

        <StyledButton
          text={'Shoes'}
          onPress={() => navigation.navigate('Shoes')}
          style={styles.buttonStyle}
          icon={
            <MaterialCommunityIcons
              name={'shoe-sneaker'}
              size={35}
              color="black"
            />
          }
        />
      </View>
      <View style={styles.progressContainer}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Dress progress status:
        </Text>
        <Text>
          {' '}
          {setComplition.shirt && setComplition.pants && setComplition.shoe ? (
            <Button title="Comlete" onPress={moveTooSuccessScreen} />
          ) : (
            'Missing clothes'
          )}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <FontAwesome
          style={{ marginRight: 5 }}
          name={'shopping-bag'}
          size={40}
          color={'black'}
        />
        <Text style={{ top: 15, fontSize: 20, fontWeight: 'bold' }}>
          You'r sets amount: {setComplitionAmount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
    top: 50,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },

  pageContainer: {
    justifyContent: 'center',
    height: 250,
  },
  progressBarContainer: {
    height: 150,
  },
  progressContainer: {
    height: 90,
    width: 250,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 15,
    top: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonStyle: {
    backgroundColor: 'rgba(1, 118, 255, 1)',
    marginRight: 5,
    height: 80,
    paddingLeft: 30,
  },
});
