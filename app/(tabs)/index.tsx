import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from "../Screens/Homepage";
import { NavigationContainer } from "@react-navigation/native";
import Pages from "./Navigator/AppNavigator";
const Stack = createStackNavigator();
export default function App(){

    return(
        <Stack.Navigator initialRouteName="Home">
            {Pages.map(screen=>(
            <Stack.Screen key={screen.name} name={screen.name} component={screen.component}/> 
        ))}
        </Stack.Navigator>
    );
}