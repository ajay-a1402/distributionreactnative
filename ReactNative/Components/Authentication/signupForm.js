



import React, { Children, useState } from "react";
import { View, StyleSheet, Text,Image,TouchableOpacity,Dimensions,AsyncStorage} from "react-native";
import Input from "../Form/textInput";
import { signUp } from "../../Servises/ApiServices";
const {width,height}=Dimensions.get('window')

const SignUp = (props) => {
  const [id, setId] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onPress = () => {
    if (id != "") {
      if (email != "") {

          signUp(id,email).then(async(result) => {
            console.log(result)

            if(result.success){

              props.navigation.navigate('Verify')
            await AsyncStorage.setItem("token", JSON.stringify(result.token));

            }
            else{
              console.log(result)
            }

          }).catch((err) => {
            console.log(err)
          });
          
        }
      }
    }
  

  const onChangeEmail = (e) => {
    if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)) {
      setEmail(e);
      setEmailError("");
    } else setEmailError("Please Enter Valid Email");
  };

  const onChangeId = (e) => {
      setId(e);    
  };

  const onChangePassword = (e) => {
    if (e.length >= 8) {
      setPassword(e);
      setPasswordError("");
    } else setPasswordError("Password Contain 8 Characters");
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Staff Id"
        onChangeText={onChangeId}
      />
      <Input
        textContentType="emailAddress"
        placeholder="Email"
        onChangeText={onChangeEmail}
        error={emailError}
      />
   
      {/* <PrimaryButton text="REGISTER" onPress={onPress} /> */}
      <TouchableOpacity
            // onPress={() => props.navigation.navigate(' ')}
            onPress={()=>{onPress()}}
            style={styles.button}>
        <Text style={{ fontSize: 20, color: 'white'}} >Register</Text>
      </TouchableOpacity>

      <View style={styles.text}>
      <Text style={{fontSize:12}}>Note:-{"\n"}
* This Signup Page Only for Faculity.{"\n"}
* If You are a Network Engineer Plese Contact Network Admin</Text>
        <Text style={{ color: "black" }}>
          Already Have an Account? &nbsp;
          <Text
            style={[{ textDecorationLine: "underline" }]}
            onPress={() => props.navigation.navigate("Login")}
          >
            Login Here!
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'flex-start', 
    paddingTop:50,
    backgroundColor:"white",
    paddingTop:height/3.5
  },
  head: {
    color:'#590995',
        fontWeight:'bold',
        fontSize:36,   
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
    marginLeft:70

  },
  button:{
  backgroundColor: "#1E538F",
  borderRadius: 10,
  height:40,
  alignSelf:"center",
  alignItems:"center",
  justifyContent:"center",
  padding:20,
  margin:10,
  borderWidth:1,
  marginTop:60 
  },
  text:{
    width:width/1.25,
    alignSelf:"center"
  }
});
