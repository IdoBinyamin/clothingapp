import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import React from 'react';
import StyledButton from '../Ui/StyledButton';
import { useSelector, useDispatch } from 'react-redux';
import { addShirt, addPants, addShoe } from '../store/completeSet';
import { useNavigation } from '@react-navigation/native';

export default function ProductsShow({
  products,
  choosingSizeHandler,
  choosenProduct,
  isChooseSize,
  isSizesShow,
}) {
  const navigation = useNavigation();
  const setComplition = useSelector(
    (state) => state.fullClothingSet.completeSet
  );
  const dispatch = useDispatch();

  const addItem = (p) => {
    if (p.type === 'shirt') {
      dispatch(addShirt({ id: p.id }));
    }
    if (p.type === 'pants') {
      dispatch(addPants({ id: p.id }));
    }
    if (p.type === 'shoes') {
      dispatch(addShoe({ id: p.id }));
    }
    navigation.goBack();
  };
  const isProductChoose = (p, size) => {
    console.log('you sure that is youre item?', p.brand, p.itemColor, size);
    Alert.alert(
      'You want this item?',
      `brand: ${p.brand}, color: ${p.itemColor}, size: ${size}`,
      [
        {
          text: 'Yes',
          onPress: () => {
            addItem(p);
          },
        },
        { text: 'No', onPress: isSizesShow },
      ]
    );
  };

  return (
    <>
      <ScrollView style={styles.itemsList}>
        {products.map((p, itemIndex) => (
          <View key={itemIndex} style={styles.itemContainer}>
            <Text>
              name: {p.name}
              {'\n'}
            </Text>
            <Text>
              brand: {p.brand}
              {'\n'}
            </Text>
            <View style={styles.itemColorsContainer}>
              {p.colors.map((c, colorsIndex) => (
                <StyledButton
                  key={colorsIndex}
                  style={{ backgroundColor: c, width: 70, marginRight: 3 }}
                  onPress={() =>
                    choosingSizeHandler({
                      name: p.name,
                      brand: p.brand,
                      itemColor: p.colors[colorsIndex],
                      sizes: [...p.sizes],
                    })
                  }
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
      {isChooseSize && (
        <View style={styles.sizesButtonsContainer}>
          {choosenProduct.sizes.map((s, sizesIndex) => (
            <StyledButton
              style={styles.sizesButtons}
              key={sizesIndex}
              text={s.toString()}
              textStyle={{ color: 'black' }}
              onPress={() => isProductChoose(choosenProduct, s)}
            />
          ))}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 3,
  },
  itemContainer: {
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: 370,
  },
  itemColorsContainer: {
    flexDirection: 'row',
    marginRight: 5,
    marginBottom: 5,
  },
  sizesButtonsContainer: {
    flex: 0.5,
    top: 50,
    height: 50,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sizesButtons: {
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 3,
    width: 35,
    alignItems: 'center',
  },
});
