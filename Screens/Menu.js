import React, {useState, useEffect} from 'react';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import {StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, SectionList, TextInput} from 'react-native';
import items from '../MenuItems';

const Menu = props => {

    const [query, setQuery] = useState('');

    const [displayedItems, setDisplayedItems] = useState(items);

    const updateQuery = (newQuery) => {
        setQuery(newQuery);
    };

    useEffect(() => {
        const lowerCaseQuery = query.toLowerCase();

        const intermediateArray = [
            {
                key: "burgers",
                title: "Burgers",
                data: []
            },
            {
                key: "pizzas",
                title: "Pizzas",
                data: []
            },
            {
                key: "seafood",
                title: "Seafood",
                data: []
            },
            {
                key: "desserts",
                title: "Desserts",
                data: []
            },
            {
                key: "drinks",
                title: "Drinks",
                data: []
            },
        ];


        let i;
        for (i = 0; i < items.length; i++) {
            items[i]['data'].forEach( (item) => {
                if (item['name'].toLowerCase().includes(lowerCaseQuery)) {
                    
                    intermediateArray[i]['data'].push(item);
                }
            });
        }

        setDisplayedItems(intermediateArray);
    }, [query]);

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
                <TextInput style={styles.input} onChangeText={ (newQuery) => updateQuery(newQuery) } placeholder="What are you craving?" />
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