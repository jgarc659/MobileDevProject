import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Screens/Home';
import Menu from './Screens/Menu';
import FoodInfo from './Screens/FoodInfo';

const Stack = createStackNavigator();

const RestaurantAppStack = () => {
  return (<Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#fff'
        }
      }}>

        <Stack.Screen name="Home" component={Home} options={{
          title: 'Welcome!',
          headerShown: true,
        }} />
        <Stack.Screen name="Menu" component={Menu} options={{
          title: 'Menu',
          headerShown: true,
        }} />
        <Stack.Screen name="FoodInfo" component={FoodInfo} options={{
          title: 'Item Details',
          headerShown: true,
        }} />

  </Stack.Navigator>);
};

const App = props => {
  return (
    <NavigationContainer style={styles.container}>
  
      <RestaurantAppStack />
  
    </NavigationContainer>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
});

export default App;