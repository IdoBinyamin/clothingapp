import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button
        onPress={() => navigation.navigate('success')}
        title={' Move to Success'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: 'yellow',
  },
});
