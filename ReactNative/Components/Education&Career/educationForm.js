import React, { Children, useState } from "react";
import { View, StyleSheet, Text,Image,TouchableOpacity,SafeAreaView,ScrollView} from "react-native";
import Input from "../Form/textInput";
import { createEducation } from "../../Servises/ApiServices";
const Education = (props) => {
  const [intitution, setIntitution] = useState("");
  const [intitutionError, setIntitutionError] = useState("");
  const [degree, setDegree] = useState("");
  const [degreeError, setDegreeError] = useState("");
  const [field, setField] = useState("");
  const [fieldError, setFieldError] = useState("");
  const [grade, setGrade] = useState("");
  const [gradeError, setGradeError] = useState("");
  const [activities, setActivities] = useState("");
  const [activitiesError, setActivitiesError] = useState("");
  const [start, setStart] = useState("");
  const [startError, setStartError] = useState("");
  const [end, setEnd] = useState("");
  const [endError, setEndError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const onPress = () => {
    if(intitution!='' || intitution!=undefined)
    if(degree!='' || degree!=undefined)
    if(field!='' || field!=undefined)
    if(grade!='' || grade!=undefined)
    if(activities!='' || activities!=undefined)
    if(start!='' || start!=undefined)
    if(end!='' || end!=undefined)

    createEducation(intitution,degree,field,grade,activities,start,end,description).then((result) => {
            console.log(result)
            props.navigation.navigate('Education')
          }).catch((err) => {
            console.log(err)
          });
          
    }
  

 

  const onChangeName = (e) => {
    if (e.length > 3) {
      setIntitution(e);
      setIntitutionError("");
    } else setIntitutionError("Please Enter atleast 3 characters");
  };
  const onChangeDegree = (e) => {
    if (e.length > 3) {
      setDegree(e);
      setDegreeError("");
    } else setDegreeError("Please Enter atleast 3 characters");
  };
  const onChangeField = (e) => {
    if (e.length > 3) {
      setField(e);
      setFieldError("");
    } else setFieldError("Please Enter atleast 3 characters");
  };
  const onChangeGrade = (e) => {
    if (e.length >= 1) {
      setGrade(e);
      setGradeError("");
    } else setGradeError("Please Enter atleast 3 characters");
  };
  const onChangeActivities = (e) => {
    if (e.length > 3) {
      setActivities(e);
      setActivitiesError("");
    } else setActivitiesError("Please Enter atleast 3 characters");
  };
  const onChangeStart = (e) => {
    if (e.length > 3) {
      setStart(e);
      setStartError("");
    } else setStartError("Please Enter atleast 3 characters");
  };
  const onChangeEnd = (e) => {
    if (e.length > 3) {
      setEnd(e);
      setEndError("");
    } else setEndError("Please Enter atleast 3 characters");
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
          <Text style={{marginLeft:10,fontSize:16}}>Institution/University</Text>
      <Input
        placeholder="College Name"
        onChangeText={onChangeName}
        error={intitutionError}
      />
        <Text style={{marginLeft:10,fontSize:16}}>Degree</Text>
      <Input
        placeholder="eg(MCA)"
        onChangeText={onChangeDegree}
        error={degreeError}
      />
        <Text style={{marginLeft:10,fontSize:16}}>Field Of Study</Text>
      <Input
        onChangeText={onChangeField}
        error={fieldError}
      /> 
       <Text style={{marginLeft:10,fontSize:16}}>Grade</Text>
            <Input
        placeholder="eg(A)"
        onChangeText={onChangeGrade}
        error={gradeError}
      />
       <Text style={{marginLeft:10,fontSize:16}}>Activities</Text>
            <Input
        placeholder="Add Education"
        onChangeText={onChangeActivities}
        error={activitiesError}
      />
      <View>
      <Text style={{marginLeft:10,fontSize:16}}>Start</Text>
            <Input
        placeholder="2018"
        onChangeText={onChangeStart}
        error={startError}
      />
       <Text style={{marginLeft:10,fontSize:16}}>End</Text>
            <Input
        placeholder="2020"
        onChangeText={onChangeEnd}
        error={endError}
      />
      </View>
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
export default Education;

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
 }  
});
