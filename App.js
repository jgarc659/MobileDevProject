import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import AnimatedSplash from "react-native-animated-splash-screen";
import 'react-native-gesture-handler';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import FoodInfo from './Screens/FoodInfo';
import Home from './Screens/Home';
import Menu from './Screens/Menu';
import { programStartup } from './store/actions/actionTypes';
import itemsReducer from './store/reducers/itemsReducer';


const rootReducer = combineReducers({
  items: itemsReducer
});

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
  
  const dispatch = useDispatch();
  const startProgram = () => dispatch({type: programStartup});

  useEffect(() => {
    // Allow Splash screen to show for 3 seconds.
    setTimeout((() => { startProgram(); }), 3000); 
  }, []);

  const isLoaded = useSelector(state => state.items.isLoaded);

  return (
      <AnimatedSplash
        translucent={true}
        isLoaded={isLoaded}
        logoImage={require("./assets/app-logo.png")}
        backgroundColor={"blue"}
        logoHeight={350}
        logoWidth={350}
      >
        <NavigationContainer style={styles.container}>
          <StatusBar style="auto" />
          <RestaurantAppStack />
      
        </NavigationContainer>

      </AnimatedSplash>
 );
}

const AppWrapper = () => {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
});

export default AppWrapper;