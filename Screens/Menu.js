import React, {useState, useEffect} from 'react';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import {StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, SectionList, TextInput} from 'react-native';
import {queryChanged} from '../store/actions/actionTypes';
import {useSelector, useDispatch} from 'react-redux';

const Menu = props => {

    const dispatch = useDispatch();

    const changeQuery = (query) => dispatch({type: queryChanged, query: query});

    const displayedItems = useSelector(state => state.items.displayedItems);

    const renderItem = ({ item }) => 
        (<TouchableOpacity style={styles.row} onPress={() => props.navigation.navigate('FoodInfo', {id: item['id']})}>
            <Text style={styles.text}>{item['name']}</Text>
        </TouchableOpacity>)
    ;

    const renderSectionHeader = ({section}) => <SectionHeader section={section}/>
    
    // SectionHeader component only renders if section is not empty.
    const SectionHeader = ({section}) => {
        if (section.data.length > 0) {
            return <Text style={styles.section}>{section.title}</Text>
        }
        else {
            return null;
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.searchRow}>
                <TextInput style={styles.input} value={useSelector(state => state.items.query)} onChangeText={ (newQuery) => changeQuery(newQuery) } placeholder="What are you craving?" />
            </View>
            
            <SectionList 
                sections={displayedItems} 
                renderItem={renderItem} 
                renderSectionHeader={renderSectionHeader}
            />

        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    input: {
        backgroundColor: 'white',
        width: responsiveWidth(90),
        borderBottomWidth : 1.0,
        marginLeft: 10,
        marginBottom: 20,
        height: responsiveHeight(6)
    },
    row: {
        padding: 20
    },
    searchRow: {
        flexDirection: 'row'
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    },
    section: {
        color: 'red',
        fontSize: responsiveFontSize(3),
        marginLeft: 7,
        fontWeight: 'bold'
    }
});

export default Menu;