import { StyleSheet, Text, View } from "react-native"

 const Screenheading=({lable})=>{
    return(
     <View>
     <Text style={styles.label}>{lable}
  
     </Text>
     </View>
    )
 }
 const styles=StyleSheet.create({
label:{
    fontSize:40,
    color:"black",
    fontWeight:"600"
}
 })
 export default Screenheading;

