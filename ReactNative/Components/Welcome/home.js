import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity} from 'react-native';

const HomeScreen = (props) =>{
  return(
      <View style={styles.container}>
          <Text style={styles.text}>Rathnavel subramaniam college of ats and science </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sign up")}
            style={styles.input}>
        <Text style={{ fontSize: 20, color: '#000000', marginLeft:100 }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
            style={styles.input}>
        <Text style={{ fontSize: 20, color: '#000000' , marginLeft:100}}>Sign In</Text>
      </TouchableOpacity>
      </View>
  )
     
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center'
          },
    text:{
        color:'#807EDD',
        fontWeight:'800',
        fontSize:36,
        // fontFamily:'Mulish',
        // alignItems:'center',
        // justifyContent:'center',
        marginBottom:150,
        fontWeight:"bold"
    },
    input:{
        backgroundColor:'#fff',
        padding:20,
        width:320,
        marginTop:10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
        backgroundColor : "#0000",
        shadowRadius: 10,
        shadowOffset : { width: 56, height: 13},
        borderWidth:0,
        borderRadius:0,
       
     }      
    
})
