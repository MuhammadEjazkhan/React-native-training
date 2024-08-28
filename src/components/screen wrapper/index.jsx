import { StyleSheet, View } from "react-native"

const Screenwrapper=({children})=>{
    return(
        <View style={styles.screenwrapper}>
                 {children}
        </View>
   
)
}
const styles=StyleSheet.create({
    screenwrapper:{
        flex:1,
        backgroundColor:"black",
        alignItems:"center",
        justifyContent:"center"
    }
})
export default Screenwrapper;