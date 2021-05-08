import items from '../../MenuItems';
import {queryChanged, programStartup, itemSelected} from '../actions/actionTypes';

const initialState = {
    isLoaded: false,
    query: '',
    displayedItems: items,
    selectedItem: {}
};

const itemsReducer = (state = initialState, action) => {

    switch (action.type) {

        case programStartup:
            return {...state, isLoaded: true};

        case itemSelected:
            let tempSelectedItem = {};
            items.forEach(section => {
                section['data'].forEach( (item) => {
                    if (item.id === action.id) {
                        tempSelectedItem = item;
                    }
                });
            });

            return {...state, selectedItem: tempSelectedItem}; 

        case queryChanged:
            const lowerCaseQuery = action.query.toLowerCase();
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

            return {...state, displayedItems: intermediateArray, query: action.query};

        default:
            return state;
        
    }

};

export default itemsReducer;