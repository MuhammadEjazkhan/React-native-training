import { StyleSheet, Text, View } from "react-native"

 const Box=({label})=>{
    return(
     <View>
     <Text style={styles.label} >{label}
  
     </Text>
     </View>
    )
 }
 const styles=StyleSheet.create({
label:{
   width:500,
   height:300,
   backgroundColor:'pink'
}
 })
 export default Box;

