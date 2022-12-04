import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProductPage from '../components/ProductPage';

export default function ShoesChoise({ navigation }) {
  const shoes = [
    {
      id: 223,
      type: 'shoes',
      name: 's_a',
      colors: ['green', 'blue', 'pink'],
      sizes: [30, 32, 33, 37],
      brand: 'adidas',
    },
    {
      id: 543,
      type: 'shoes',
      name: 's_ads',
      colors: ['black', 'white', 'green'],
      sizes: [31, 30, 38, 37],
      brand: 'abcds',
    },
  ];
  return <ProductPage products={shoes} />;
}

const styles = StyleSheet.create({});
