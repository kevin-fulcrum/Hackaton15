import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const ProductSliderItem = ({item, onPress, sizeh, sizev, direct}) => {
  const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    flexDirection: direct,
    alignItems: 'center',
  },
  image: {
    width: width / sizeh,
    height: height / sizev,
    borderRadius: 10,
  },
  itemTitle: {
    color: '#212121',
    fontSize: 13,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: '#212121',
    fontSize: 13,
    fontWeight: '300',
  },
});

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
      </TouchableOpacity>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );
};

export default ProductSliderItem;
