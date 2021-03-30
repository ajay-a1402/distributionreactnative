import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Switch,
  Button,
  StyleSheet,
  TouchableOpacity,
  Picker,
  TextInput,
  AsyncStorage,
  Dimensions,
} from "react-native";
import Input from "../Form/textInput";
import { createInquiry } from "../../Servises/ApiServices";

const { width, height } = Dimensions.get("window");

const SignInScreen = (props) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [issueType, setIssueType] = useState("No Internet");
  const [location, setLocation] = useState("MCA");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const initialState = {
    marksheet: false,
    Tc: false,
    idcard: false,
    coursecertificate: false,
    SportsCertificate: false,
  };
  const [dist, setDist] = React.useState(initialState);
  const onChangeEmail = (e) => {
    if (
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e
      )
    ) {
      setEmail(e);
      setEmailError("");
    } else setEmailError("Please Enter Valid Email");
  };
  // const CreateFunction = async () => {
  //   if (description) {
  //     createInquiry(issueType, location, description)
  //       .then(async (res) => {
  //         if (res.success) {
  //           console.log(res);
  //           props.navigation.navigate("Landing");
  //         } else {
  //           console.log(res);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };

  const descriptionOnchange = (e) => {
    setDescription(e);
  };

  const  _addInQ = async () => {
    let response;
    try {
      response = await createInquiry(dist);
      if(response){
        console.log(response, 'createIssue')
      }
    } catch (error) {
      throw error
    }
  }
  return (
    <View style={styles.container}>

      
<Text style={{ fontWeight: "bold", fontSize: 20 }}>Name</Text>

<TextInput
  style={styles.box}
  onChangeText={descriptionOnchange}
  //   value={value}
/> 

<Text style={{ fontWeight: "bold", fontSize: 20 }}>regno</Text>

<TextInput
  style={styles.box}
  onChangeText={descriptionOnchange}
  //   value={value}
/> 
<Text style={{ fontWeight: "bold", fontSize: 20 }}>department</Text>

<TextInput
  style={styles.box}
  onChangeText={descriptionOnchange}
  //   value={value}
/> 

<Text style={{ fontWeight: "bold", fontSize: 20 }}>batch</Text>

<TextInput
  style={styles.box}
  onChangeText={descriptionOnchange}
  //   value={value}
/> 
<Text style={{ fontWeight: "bold", fontSize: 20 }}>No of days present</Text>

<TextInput
  style={styles.box}
  onChangeText={descriptionOnchange}
  //   value={value}
/> 

<Text style={{ fontWeight: "bold", fontSize: 20 }}>No of days absent</Text>

<TextInput
  style={styles.box}
  onChangeText={descriptionOnchange}
  //   value={value}
/> 

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* <Text style={{ fontWeight: "bold", fontSize: 20 }}>Mark Sheet</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setDist({ ...dist, marksheet: !dist.marksheet })}
          value={dist.marksheet}
        />
      </View>

      <View
        style={{
          marginTop:20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>TC</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setDist({ ...dist, Tc: !dist.Tc })}
          value={dist.Tc}
        />
      </View>

      <View
        style={{
          marginTop:20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>ID CARD</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setDist({ ...dist, idcard: !dist.idcard })}
          value={dist.idcard}
        />
      </View>

      <View
        style={{
          marginTop:20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>course certificate</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setDist({ ...dist, coursecertificate: !dist.coursecertificate })}
          value={dist.coursecertificate}
        />
      </View>
      <View
        style={{
          marginTop:20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>SportsCertificate</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setDist({ ...dist, coursecertificate: !dist.SportsCertificate })}
          value={dist.SportsCertificate}
        /> */}
      </View>



      {/* <Text style={{ fontWeight: "bold", fontSize: 20 }}>Description</Text>

      <TextInput
        style={styles.box}
        onChangeText={descriptionOnchange}
        //   value={value}
      />  */}
      <TouchableOpacity
        // onPress={() => props.navigation.navigate(' ')}
        onPress={() => _addInQ()}
        style={styles.button}
      >
        <Text style={{ fontSize: 18, color: "white" }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    // paddingTop:50,
    backgroundColor: "white",
    paddingTop: height / 7,
    paddingLeft: width / 10,
  },
  text: {
    color: "#807EDD",
    fontWeight: "bold",
    fontSize: 36,
    marginLeft: 70,

    marginBottom: "10%",
  },
  button: {
    backgroundColor: "#1E538F",
    borderRadius: 10,
    height: 40,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 10,
    borderWidth: 1,
    marginTop: 60,
  },

  box: {
    height: 50,
    borderWidth: 1,
    width: width / 1.3,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "silver",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 50,
    elevation: 10,
    borderWidth: 0.8,
    marginTop: 10,
  },
  select: {
    height: 10,
    borderWidth: 1,
    width: width / 1.3,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "silver",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 50,
    elevation: 10,
    borderWidth: 0.8,
    marginTop: 10,
  },
});
