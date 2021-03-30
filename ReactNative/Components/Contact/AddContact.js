import React, { Children, useState,useEffect } from "react";
import { View, StyleSheet, Text,Image,TouchableOpacity,SafeAreaView,ScrollView} from "react-native";
import Input from "../Form/textInput";
import { getAllUser } from "../../Servises/ApiServices";
const AddContact = (props) => {
  const [user, setUser] = useState([]);
  const [addSkill, setAddSkill] = useState([]);
  const[skill,setSkill]=useState('')

  useEffect(()=>{
    getAllUser().then(res=>{
        // console.log(res.user)
        setUser(res.user)
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

 

  const userItem=()=>{
    return user.map(data=>{     
      return(
 <View style={{flexDirection:"row",backgroundColor:"#F7F7FA",marginBottom:10,width:"100%"}} key={data}>
<View style={{flex:0.1}}>
    <Image  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSskYmX3xnuzTqS5rcUHfgki7LZIKFRZ2WT6g&usqp=CAU' }} style={{height:50,width:50}}></Image>
</View>
<View style={{flex:0.3}}>
    <Text style={{marginLeft:20}}>{data.name}</Text>
    <Text style={{marginLeft:20}}>{data.education}</Text>
</View>
<View style={{flex:0.6}}>
<TouchableOpacity
            // onPress={() => props.navigation.navigate(' ')}
            onPress={()=>{props.navigation.navigate('Contact')}}
            style={styles.input}>
        <Text style={{ color: 'white'}} >Add to Contact</Text>
      </TouchableOpacity> 
</View>
 </View>
 ) })}
  return (
    <View style={styles.container}>
    {/* <ScrollView> */}
      <Input
        placeholder="Find People"
        onChangeText={onChangeSkill}
      />
        


    {userItem()}
      {/* </ScrollView> */}

    </View>
  );
};
export default AddContact;

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
    width:150,
    height:30,
    marginTop:5,
    marginLeft:20,
    borderRadius:5,
    padding:5
 }  
});
