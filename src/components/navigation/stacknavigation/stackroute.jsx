import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from "../../screens/home";

const Stack = createStackNavigator()
const StackNavigation = ()=>{
    return(
<NavigationContainer>

<Stack.Screen name="Home" component={Home}/>
    
</NavigationContainer>
    )
}
export default StackNavigation;