import React from 'react';
import {Video} from 'expo-av';
import { Asset } from 'expo-asset';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import {StyleSheet, Text, View, Button, Image} from 'react-native';

const Home = props => {

    return (
        <View style={styles.container}>
         <Video
                source={ require('../assets/footage.mp4') }
                rate={1.0}
                isMuted={true}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={styles.video}
                /> 

            <Text style={styles.text}>Nutrition App</Text>
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
        width: responsiveWidth(30),
        height: responsiveHeight(12),
        margin: 20,
        padding: 30
    },
    video: {
        width: responsiveWidth(80),
        height: responsiveHeight(25)
    }
});

export default Home;