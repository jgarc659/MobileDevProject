import React, {useState, useEffect} from 'react';
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
            <Text style={styles.text}>{item['name']} - ${item['price']}</Text>
        </TouchableOpacity>)
    ;

    const renderSectionHeader = ({section}) => <Text style={styles.section}>{section.title}</Text>

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.searchRow}>
                <TextInput style={styles.input} onChangeText={ (newQuery) => updateQuery(newQuery) } placeholder="What are you craving?" />
            </View>
            
            <SectionList sections={displayedItems} renderItem={renderItem} renderSectionHeader={renderSectionHeader} />

        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '100%',
        marginRight: 5,
        height: 50
    },
    row: {
        padding: 20
    },
    searchRow: {
        flexDirection: 'row'
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    section: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Menu;