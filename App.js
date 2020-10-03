import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from "./Screens/LoginScreen";
import Login from "./Screens/Login";

function Demo() {
  return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
        <Text>This is top text.</Text>
        <Text>This is bottom text.</Text>
      </SafeAreaView>
  );
}

const AuthStack = createStackNavigator();
// const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <SafeAreaProvider>
        {/*<NavigationContainer>*/}
        {/*  <Stack.Navigator initialRouteName="Home" headerMode="none">*/}
        {/*    <Stack.Screen name="Home">*/}
        {/*      {() => (*/}
        {/*          <Tab.Navigator initialRouteName="Analitics" tabBar={() => null}>*/}
        {/*            <Tab.Screen name="Analitics" component={Demo} />*/}
        {/*            <Tab.Screen name="Profile" component={Demo} />*/}
        {/*          </Tab.Navigator>*/}
        {/*      )}*/}
        {/*    </Stack.Screen>*/}

        {/*    <Stack.Screen name="Settings" component={Demo} />*/}
        {/*  </Stack.Navigator>*/}
        {/*</NavigationContainer>*/}
        <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen name="Sign In" component={Login} options={{ headerShown:false }} />
            </AuthStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}
