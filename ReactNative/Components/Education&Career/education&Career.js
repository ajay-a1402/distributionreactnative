import React ,{useState,useEffect}from 'react';
import { View,Text,StyleSheet,Image,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';
import {getEducation,getExperience} from '../../Servises/ApiServices'
import addExp from '../../assets/Add Button1.png'
import addEdu from '../../assets/Add Button.png'
import { add } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

 const Education = (props) => {
    const [education,setEducation]=useState([])
    const [experience,setExperiecne]=useState([])
    
  useEffect(()=>{


    getEducation().then((result) => {
      console.log("EDU",result)
      setEducation(result.data)
    }).catch((err) => {
      console.log(err)
    });  

      getExperience().then((result) => {
        console.log("EXP",result)
      setExperiecne(result.data)
    }).catch((err) => {
      console.log(err)
    });

  
        
  },[])
  const Education=()=>{
    return education.map(data=>{     
      return(
        <View style={styles.education}>
        <Text>{data.field}</Text>
        <Text>{data.institution}</Text>
        <Text>{data.start} - {data.end}</Text>
        </View>

      ) })}
      const Experirnce=()=>{
        return experience.map(data=>{     
          return(
            <View style={styles.education}>
            <Text>{data.title}</Text>
            <Text>{data.company}</Text>
            <Text>{data.from} - {data.to}</Text>
            </View>
    
          ) })}
  return (
      <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:"center",alignContent:"center"}}>
      <ScrollView>
     
     <View style={{flexDirection:'row'}}>
      <Text style={{fontSize: 20,fontWeight:"bold",color:"#2C78E4",flex:0.8}}>Experience</Text>
      <TouchableOpacity style={{backgroundColor:"#2C78E4",borderRadius:10,flex:0.5,height:30,width:25,padding:5,margin:3}}
      onPress={()=>props.navigation.navigate('Add Experience')}>
  <Text style={{color:"white",fontWeight:"bold"}}>+Experience</Text>

      </TouchableOpacity>
     </View>
          {Experirnce()}
          <View style={{flexDirection:'row'}}>
      <Text style={{fontSize: 20,fontWeight:"bold",color:"#2C78E4",flex:0.8}}>Education</Text>
      <TouchableOpacity style={{backgroundColor:"#2C78E4",borderRadius:10,flex:0.5,height:30,width:25,padding:5,margin:3}}
      onPress={()=>props.navigation.navigate('Add Education')}>
  <Text style={{color:"white",fontWeight:"bold"}}> + Education</Text>

      </TouchableOpacity>
     </View>
          {Education()}

</ScrollView>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    text: {
      fontSize: 20,
    fontWeight:"bold",
    marginLeft:120
    },
    tinyLogo:{
        height:60,
        width:60,
        borderRadius:50,
        marginLeft:120,
        marginTop:20,
        marginBottom:10
    },
    education:{
      height:100,
      width:300,
      backgroundColor:"#F7F7FA",
      // alignItems:'center',
      // justifyContent:"center"
      marginBottom:10
    }
  });
export default Education