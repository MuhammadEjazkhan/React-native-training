import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import index from "../newscreen";
import React, { useState } from 'react';
import Screenheading from "../../screen heading";
import Screenwrapper from "../../screen wrapper";
import Box from "../../box";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Home  = ({navigation}) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
      console.log(count)
    };
    const dec = () =>{
        setCount(count - 1)
        console.log(count)
    }
            console.log(count)
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Screenwrapper>
                <Screenheading label={900} />
                <Text style={styles.counterText}>{count}</Text>
                <View >
                <Button title="Increment" onPress={increment} />
                </View>
                <View style={styles.button}>
                 <Button title="Decrement" onPress={dec} />
                 </View>
                 <View style={styles.button}>
                 <Button title="NExt"  onPress={() => navigation.navigate('index')} />
                 </View>
                <Box label={"Hello"} />
            </Screenwrapper>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#07faeb",
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    counterText: {
        fontSize: 24,
        margin: 10,
        color:'white'

    },
    button:{
        marginTop:10

    }
});
export default Home;