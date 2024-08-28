// import React from 'react'
// import cars from "./data/data.json"
// import { Text, View,StyleSheet } from 'react-native'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>
//         App 
//       </Text>
//       <View style={styles.secondbox}>
//         <Text style={styles.paragraph}>
//         Schools are fundamental institutions in society, 
//         dedicated to educating and nurturing young minds. They provide structured environments where students learn a wide range of subjects, develop critical thinking skills, and foster social interactions. Schools offer more than just academic knowledge; they also play a crucial role in the holistic development of children, including their emotional, social, and physical growth. Through various extracurricular activities, sports, and clubs, schools encourage students to explore their interests and talents. They serve as a community hub, connecting families, teachers, and local organizations, and help shape responsible, informed citizens who can contribute positively to society. The foundation laid in schools prepares students for future educational pursuits and career paths,
//          emphasizing the importance of lifelong learning.
//         </Text>
//       </View>
//       <View style={styles.thirdbox}>
//         <Text style={styles.secondparagraph}>
//         Schools are fundamental institutions in society, 
//         dedicated to educating and nurturing young minds. They provide structured environments where students learn a wide range of subjects, develop critical thinking skills, and foster social interactions. Schools offer more than just academic knowledge; they also play a crucial role in the holistic development of children, including their emotional, social, and physical growth. Through various extracurricular activities, sports, and clubs, schools encourage students to explore their interests and talents. They serve as a community hub, connecting families, teachers, and local organizations, and help shape responsible, informed citizens who can contribute positively to society. The foundation laid in schools prepares students for future educational pursuits and career paths,
//          emphasizing the importance of lifelong learning.
//         </Text>
//       </View>
//     </View>
//   )
// }
//  const styles=StyleSheet.create({
//   text:{
//     color:"red",
//     fontSize:30,
//     marginBottom:2,
//     fontWeight:'bold',
//     marginBottom:10
 
//   },
//   container:{
   
//     borderWidth:10,
//     alignItems:"center",
//     flex:1,
//     padding:10,
//     borderColor:"pink"
//   },
//   secondbox:{
//    borderWidth:5,
//    borderColor:"green",
//    marginBottom:50,
//    padding:10
//   },
//   paragraph:{
//      color:"pink"

//   },
//   thirdbox:{
//     borderWidth:5,
//     borderColor:"red",
//      padding:10,
//    },
//    secondparagraph:{
//       color:"pink"
 
//    },
  

  
//  }) 

// import React, { useEffect }  from 'react'
// // import Drawerna from './src/components/navigation/drawernavigation/drawer'
// // import Home from './src/components/screens/home'
// // import StackNavigation from './src/components/navigation/stacknavigation/stackroute'
// import {Text, View } from "react-native" 
// const App =() => {
// useEffect=(()=>{

// setTimeout=(()=>{

// },2000)
//     },[])

//   return (
//    <View style={{backgroundColor:'black',flex:1}}>
//     <Text style={{color:'black',fontSize:'20',fontWeight:'bold'}}>
//       Splash
//     </Text>
//    </View>
//   )
// }

// export default App;
import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
function App() {

   const [email, setEmail] = useState('')

   console.log(email)

   const [password,setPassword]= useState('')
   console.log(password)


   return (
      <View style={styles.mainCon}>
         <View style={{ marginTop: 0, width: '100%', alignItems: 'center',}}>
            <Image source={require('./images/14.png')} style={styles.img} />
            <Image source={require('./images/10.png')} style={styles.img2} />
            <TextInput style={{ borderWidth: 2, width: '80%', borderRadius: 10, borderColor: 'gray', padding: 10, marginBottom: 15,color:'black'}} placeholder='Enter Email' placeholderTextColor={'black'}
               value={email} onChangeText={(text) => setEmail(text)}  />
            <TextInput style={{ borderWidth: 2, width: '80%', borderRadius: 10, borderColor: 'gray', padding: 10, marginBottom: 50,color: 'black' }} placeholder='Enter Password' placeholderTextColor={'black'}
               value={password} onChangeText={(text) => setPassword(text)} keyboardType='number-pad'/>
            <TouchableOpacity style={{ width: '50%', backgroundColor: '#C13584', borderRadius:100, marginBottom:20 }}>
               <Text style={{ padding: 10, textAlign: 'center', fontSize: 22, fontWeight: '500', color: 'white' }}>Login</Text>

            </TouchableOpacity>
            <TouchableOpacity style={{ width: '50%', backgroundColor: '#833AB4', borderRadius:100}}>
               <Text style={{ padding:10, textAlign: 'center', fontSize: 22, fontWeight: '500', color: 'white' }}>Create Account</Text>

            </TouchableOpacity>


         </View>
      </View>
   )
}

export default App

const styles = StyleSheet.create({
   mainCon: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
   img: {
      width: 150, height:150, marginBottom: 33
   },
   img2: {
      width:300, height:100, marginBottom: 33
   }
})

