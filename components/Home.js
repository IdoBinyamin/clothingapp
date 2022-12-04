import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StyledButton from '../Ui/StyledButton';

export default function Home({ navigation }) {
  const user = {
    name: 'Buddy',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome {user.name}</Text>
      <View style={styles.pageContainer}>
        <Text style={{ fontSize: 18 }}>Choose a full set to seccess!</Text>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Sets amount:</Text>
          <View></View>
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Dress progress status:
          </Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          text={'Shirts'}
          onPress={() => navigation.navigate('Shirts')}
          style={styles.buttonStyle}
        />
        <StyledButton
          text={'Pants'}
          onPress={() => navigation.navigate('Pants')}
          style={styles.buttonStyle}
        />

        <StyledButton
          text={'Shoes'}
          onPress={() => navigation.navigate('Shoes')}
          style={styles.buttonStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
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
    height: 350,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonStyle: {
    backgroundColor: 'orange',
    marginRight: 5,
    paddingHorizontal: 26,
  },
});
