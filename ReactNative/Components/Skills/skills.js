import React, { Children, useState,useEffect } from "react";
import { View, StyleSheet, Text,Image,TouchableOpacity,SafeAreaView,ScrollView} from "react-native";
import Input from "../Form/textInput";
import { getSkills,createSkills,updateSkills } from "../../Servises/ApiServices";
const Education = (props) => {
  const [skills, setSkills] = useState([]);
  const [addSkill, setAddSkill] = useState([]);
  const[skill,setSkill]=useState('')

  useEffect(()=>{
    getSkills().then(res=>{
        // console.log(res.data[0].skills)
        setSkills(res.data[0].skills)
    }).catch(err=>{
        console.log(err)
    })
  },[])

  const onPress = async () => {
    if(skill!=''){
        setSkills([...skills,skill])
        await updateSkills(skills).then(res=>{
            // console.log("hai")
            getSkills()
        })
    }
          
    }
  

 

  const onChangeSkill = (e) => {
   
    setSkill(...skill,e);
      
  };

 

  const skillItem=()=>{
    return skills.map(data=>{     
      return(
 <View style={{flex:0.5}} key={data}>
     <Text style={{backgroundColor:"#79FFBF",borderRadius:5,height:30,margin:5,padding:3}}>{data}✖</Text>
 </View>
 ) })}
  return (
    <View style={styles.container}>
    {/* <ScrollView> */}
          <Text style={{marginLeft:10,fontSize:16}}>Skills</Text>
      <Input
        placeholder="Add Skills (e.g., ReactJS)"
        onChangeText={onChangeSkill}
      />
        

      <TouchableOpacity
            // onPress={() => props.navigation.navigate(' ')}
            onPress={onPress}
            style={styles.input}>
        <Text style={{ color: 'white'}} >Save</Text>
      </TouchableOpacity>
      <View style={{flexDirection:"row",backgroundColor:"#F7F7FA"}}>
      {skillItem()}

</View>
      {/* </ScrollView> */}

    </View>
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
    backgroundColor:'#2C78E4',
    width:50,
    height:30,
    marginTop:5,
    marginLeft:200,
    borderRadius:5,
    padding:5
 }  
});
