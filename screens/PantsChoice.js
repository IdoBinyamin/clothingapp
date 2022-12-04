import { StyleSheet } from 'react-native';
import React from 'react';
import ProductPage from '../components/ProductPage';

export default function PantsChoice({ navigation }) {
  const pants = [
    {
      id: 432,
      type: 'pants',
      name: 'p_a',
      colors: ['green', 'blue', 'pink'],
      sizes: [38, 39, 43],
      brand: 'adidas',
    },
    {
      id: 462,
      type: 'pants',
      name: 'p_1dsa',
      colors: ['red', 'black', 'yellow', 'green'],
      sizes: [33, 34, 35, 36, 37, 38, 39],
      brand: 'boss',
    },
    {
      id: 1736,
      type: 'pants',
      name: 'p_rio',
      colors: ['black', 'gray', 'black', 'orange', 'red'],
      sizes: [39, 38, 37, 36, 35, 34, 33, 32, 31, 30],
      brand: 'pull&bear',
    },
    {
      id: 1736,
      type: 'pants',
      name: 'p_rio',
      colors: ['black', 'gray', 'black', 'orange', 'red'],
      sizes: [39, 38, 37, 36, 35, 34, 33, 32, 31, 30],
      brand: 'pull&bear',
    },
    {
      id: 1736,
      type: 'pants',
      name: 'p_rio',
      colors: ['black', 'gray', 'black', 'orange', 'red'],
      sizes: [39, 38, 37, 36, 35, 34, 33, 32, 31, 30],
      brand: 'pull&bear',
    },
    {
      id: 1736,
      type: 'pants',
      name: 'p_rio',
      colors: ['black', 'gray', 'black', 'orange', 'red'],
      sizes: [39, 38, 37, 36, 35, 34, 33, 32, 31, 30],
      brand: 'pull&bear',
    },
    {
      id: 1736,
      type: 'pants',
      name: 'p_rio',
      colors: ['black', 'gray', 'black', 'orange', 'red'],
      sizes: [39, 38, 37, 36, 35, 34, 33, 32, 31, 30],
      brand: 'pull&bear',
    },
    {
      id: 1736,
      type: 'pants',
      name: 'p_rio',
      colors: ['black', 'gray', 'black', 'orange', 'red'],
      sizes: [39, 38, 37, 36, 35, 34, 33, 32, 31, 30],
      brand: 'pull&bear',
    },
    {
      id: 1736,
      type: 'pants',
      name: 'p_rio',
      colors: ['black', 'gray', 'black', 'orange', 'red'],
      sizes: [39, 38, 37, 36, 35, 34, 33, 32, 31, 30],
      brand: 'pull&bear',
    },
    {
      id: 1736,
      type: 'pants',
      name: 'p_rio',
      colors: ['black', 'gray', 'black', 'orange', 'red'],
      sizes: [39, 38, 37, 36, 35, 34, 33, 32, 31, 30],
      brand: 'pull&bear',
    },
    {
      id: 1736,
      type: 'pants',
      name: 'p_rio',
      colors: ['black', 'gray', 'black', 'orange', 'red'],
      sizes: [39, 38, 37, 36, 35, 34, 33, 32, 31, 30],
      brand: 'pull&bear',
    },
  ];

  return <ProductPage products={pants} />;
}

const styles = StyleSheet.create({});
