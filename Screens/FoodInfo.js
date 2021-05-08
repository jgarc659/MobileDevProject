import React, {useState} from 'react';
import {responsiveFontSize} from "react-native-responsive-dimensions";
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import {itemSelected} from '../store/actions/actionTypes';
import {useSelector, useDispatch} from 'react-redux';

const FoodInfo = props => {

    const {route} = props;
    const {id} = route.params;

    const dispatch = useDispatch();
    dispatch({type: itemSelected, id: id});
    
    const selectedItem = useSelector(state => state.items.selectedItem);

    return (
            <SafeAreaView style={styles.container}>
                <View style={styles.centeredContent}>
                    <Image style={styles.image} source={{uri: selectedItem['image']}}/>
                    <Text style = {styles.name}>{selectedItem['name']}</Text>
                </View>
                <View style = {styles.description}>
                  <Text style = {styles.text}>Calories: {selectedItem['calories']}</Text>
                  <Text style = {styles.text}>Fat: {selectedItem['fat']} grams</Text>
                  <Text style = {styles.text}>Carbs: {selectedItem['carbs']} grams</Text>
                  <Text style = {styles.text}>Sugar: {selectedItem['sugar']} grams</Text>
                  <Text style = {styles.text}>Sodium: {selectedItem['sodium']} grams</Text>
                </View>
            </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        color: 'black'
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: 15,
        fontSize: responsiveFontSize(2),
        marginBottom: 5
    },
    centeredContent: {
        alignItems: 'center',
        height: '50%'
    },
    image: {
        margin: 30,
        height: '80%',
        width: '80%'
    },
    name: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3),
        marginBottom: 15
    },
    description: {
        marginTop: 50
    }
});

export default FoodInfo;