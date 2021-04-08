import React, {useState} from 'react';
import {responsiveFontSize} from "react-native-responsive-dimensions";
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import items from '../MenuItems';

const FoodInfo = props => {

    const {route} = props;
    const {id} = route.params;
    const [displayedItem, setDisplayedItem] = useState({});

   

    const getItem = async () => {

        let tempDisplayedItem = {};
 
    
        await items.forEach(section => {
            section['data'].forEach( (item) => {
                if (item.id === id) {
                    tempDisplayedItem = item;
                }
            });
        });
    
        setDisplayedItem(tempDisplayedItem);

    }

    getItem();


    return (
            <SafeAreaView style={styles.container}>
                <View style={styles.centeredContent}>
                    <Image style={styles.image} source={{uri: displayedItem['image']}}/>
                    <Text style = {styles.name}>{displayedItem['name']}</Text>
                </View>
                <View style = {styles.description}>
                  <Text style = {styles.text}>Calories: {displayedItem['calories']}</Text>
                  <Text style = {styles.text}>Fat: {displayedItem['fat']} grams</Text>
                  <Text style = {styles.text}>Carbs: {displayedItem['carbs']} grams</Text>
                  <Text style = {styles.text}>Sugar: {displayedItem['sugar']} grams</Text>
                  <Text style = {styles.text}>Sodium: {displayedItem['sodium']} grams</Text>
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