import React from 'react'
import {View, StyleSheet, Text, TextInput, Image, Dimensions, FlatList, Animated} from 'react-native'
import {productSliderData} from '../resource/database/productSliderData'
import {productData} from '../resource/database/productData'
import ProductSlider from '../ProductSlider/ProductSlider'

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {flex: 1}
})

const Menu = ({navigation})=>{
    const scrollX = new Animated.Value(0);
    return(
    <View style={styles.container}>
        <View style={{marginTop: 70, height:20, justifyContent:'center', marginLeft:20, marginRight: 20}}>
            <View style={{flexDirection:'row',}}>
                <Image style={{width:20, height:20}} source={{uri: 'https://cdn.icon-icons.com/icons2/692/PNG/512/seo-social-web-network-internet_340_icon-icons.com_61497.png',}}/>
                <TextInput placeholder='Search Foods' style={{borderRadius:50, marginLeft: 10, marginRight: 20, width: width/1.4}}></TextInput>
                <Image style={{width:20, height:20}} source={{uri: 'https://cdn.icon-icons.com/icons2/1769/PNG/512/4092560-graph-line-list-menu-paragraph-stats-website_114036.png',}}/>
            </View>
        </View> 
        <View style={{height:height/3, marginLeft:20, marginRight: 20, marginTop: 20}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#ff8080'}}>Popular Choices</Text>
            <ProductSlider onPress={()=>{navigation.navigate('Welcome')}} data={productSliderData} direction={true} sizeh={1.5} sizev={5.5} direct='column'></ProductSlider>
        </View> 
        <View style={{height:height/2, marginLeft:20, marginRight: 20}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#ff8080'}}>New Restaurants</Text>
            <ProductSlider data={productData} direction={false} sizeh={4} sizev={7} direct='row'></ProductSlider>
        </View>
    </View>
    )    
}

export default Menu;