import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import ProductSliderItem from './ProductSliderItem';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  dot: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const ProductSlider = ({data, direction, onPress, sizeh, sizev, direct}) => {
  const scrollX = new Animated.Value(0);

  if (data && data.length) {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          horizontal={direction}
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => {
            return <ProductSliderItem item={item.item} onPress={onPress} sizeh={sizeh} sizev={sizev} direct={direct} />;
          }}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false}
          )}
        />
      </View>
    );
  }
  return null;
};

export default ProductSlider;
