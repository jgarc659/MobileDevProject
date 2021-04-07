import React from 'react';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import {StyleSheet, Text, View, Button, Image} from 'react-native';

const Home = props => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Restaurant App</Text>
            <Image style={styles.logo} source={{uri: 'https://freepngimg.com/thumb/food/4-2-food-png.png'}}/>
            <Button title="LOGIN" onPress={() => props.navigation.navigate('Menu')} />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: responsiveFontSize(5),
        fontWeight: 'bold',
        color: 'black'
    },
    logo: {
        width: responsiveWidth(40),
        height: responsiveHeight(20),
        margin: 20,
        padding: 30
    }
});

export default Home;