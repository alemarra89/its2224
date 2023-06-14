import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Gatti from './src/pages/gatti';
import Cani from './src/pages/cani';
import {Image} from 'react-native';

export type TabParamList = {
  Gatti: undefined;
  Cani: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Cani">
        <Tab.Screen
          name="Gatti"
          component={Gatti}
          options={{
            headerTitle: 'Gattini',
            // headerShown: false,
            tabBarLabel: 'Tab Gatti',
            tabBarIcon: () => (
              <Image
                source={{
                  uri: 'https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D16690413W9915H10000/views/1,width=550,height=550,appearanceId=839,backgroundColor=F2F2F2/cat-icon-adesivo.jpg',
                  width: 30,
                  height: 30,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cani"
          component={Cani}
          options={{
            tabBarIcon: () => (
              <Image
                source={{
                  uri: 'https://www.creativefabrica.com/wp-content/uploads/2019/04/Dog-icon-Pet-animal-icon-vector-by-Hoeda80-2-580x386.jpg',
                  width: 30,
                  height: 30,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
