import { StyleSheet } from 'react-native';
import React from 'react';
import ProductPage from '../components/ProductPage';

export default function ShirtChoice({ navigation }) {
  const shirts = [
    {
      id: 476,
      type: 'shirt',
      name: 'sr_dwsa',
      colors: ['#928', 'red'],
      sizes: ['s', 'm'],
      brand: 'hollister',
    },
    {
      id: 4123,
      type: 'shirt',
      name: 'sr_13',
      colors: ['blue', 'gray', '#246'],
      sizes: ['s', 'm', 'xl'],
      brand: 'boss',
    },
    {
      id: 234,
      type: 'shirt',
      name: 'sr_dsa',
      colors: ['red', 'green'],
      sizes: ['m', 'xl'],
      brand: 'adidas',
    },
  ];

  return <ProductPage products={shirts} />;
}

const styles = StyleSheet.create({});
