import 'react-native-gesture-handler';
import AnimatedSplash from "react-native-animated-splash-screen";
import React, {useState, useEffect} from 'react';
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
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    // Allow Splash screen to show for 3 seconds.
    setTimeout((() => { setLoaded(true); }), 3000);
    
  }, []);

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
    
        <RestaurantAppStack />
    
      </NavigationContainer>

    </AnimatedSplash>
 );
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

export default App;