import React, { Children, useState } from "react";
import { CheckBox,View, StyleSheet, Text,Image,TouchableOpacity,SafeAreaView,ScrollView} from "react-native";
import Input from "../Form/textInput";
import { createExperience } from "../../Servises/ApiServices";
const Experience = (props) => {
  const [company, setCompany] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [from, setFrom] = useState("");
  const [fromError, setFromError] = useState("");
  const [to, setTo] = useState("");
  const [toError, setToError] = useState("");
  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [isSelected, setSelection] = useState(false);

  const onPress = () => {
    if(title!='' || title!=undefined)
    if(company!='' || company!=undefined)
    if(from!='' || from!=undefined)
    if(to!='' || to!=undefined)
    

    createExperience(title,company,from,to,isSelected,location,description).then((result) => {
            console.log(result)
            props.navigation.navigate('Education')
          }).catch((err) => {
            console.log(err)
          });
          
    }
  

 

  const onChangeCompany = (e) => {
    if (e.length > 3) {
      setCompany(e);
      setCompanyError("");
    } else setCompanyError("Please Enter atleast 3 characters");
  };
  const onChangeTitle = (e) => {
    if (e.length > 3) {
      setTitle(e);
      setTitleError("");
    } else setTitleError("Please Enter atleast 3 characters");
  };
  const onChangeFrom = (e) => {
    if (e.length > 3) {
      setFrom(e);
      setFromError("");
    } else setFromError("Please Enter atleast 3 characters");
  };
  const onChangeTo = (e) => {
    if (e.length >= 1) {
      setTo(e);
      setToError("");
    } else setToError("Please Enter atleast 3 characters");
  };
  const onChangeLocation = (e) => {
    if (e.length > 3) {
      setLocation(e);
      setLocationError("");
    } else setLocationError("Please Enter atleast 3 characters");
  };
  const onChangeDescription = (e) => {
    if (e.length > 3) {
      setDescription(e);
      setDescriptionError("");
    } else setDescriptionError("Please Enter atleast 3 characters");
  };

  
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
          <Text style={{marginLeft:10,fontSize:16}}>Company</Text>
      <Input
        placeholder="Company Name"
        onChangeText={onChangeCompany}
        error={companyError}
      />
        <Text style={{marginLeft:10,fontSize:16}}>Title</Text>
      <Input
        onChangeText={onChangeTitle}
        error={titleError}
      />
       <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>I Curently Work Here!</Text>
      </View>
        <Text style={{marginLeft:10,fontSize:16}}>From</Text>
      <Input
        placeholder="Year"
        onChangeText={onChangeFrom}
        error={fromError}
      /> 
       <Text style={{marginLeft:10,fontSize:16}}>To</Text>
            <Input
        placeholder="Year"
        onChangeText={onChangeTo}
        error={toError}
      />
       <Text style={{marginLeft:10,fontSize:16}}>Location(optional)</Text>
            <Input
        onChangeText={onChangeLocation}
        error={locationError}
      />
      <Text style={{marginLeft:10,fontSize:16}}>Description(optional)</Text>
            <Input
        onChangeText={onChangeDescription}
        error={descriptionError}
      />

      <TouchableOpacity
            // onPress={() => props.navigation.navigate(' ')}
            onPress={onPress}
            style={styles.input}>
        <Text style={{ fontSize: 20, color: '#000000' , marginLeft:100}} >Next - -</Text>
      </TouchableOpacity>
      </ScrollView>

    </SafeAreaView>
  );
};
export default Experience;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    // paddingTop: 70,
    marginLeft:20

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
  input:{
    backgroundColor:'#fff',
    padding:20,
    width:320,
    marginTop:5
 }  ,
 checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
