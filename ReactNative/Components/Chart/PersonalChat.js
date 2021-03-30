import React, { Children, useState,useEffect } from "react";
import { View, StyleSheet, Text,Image,TouchableOpacity,SafeAreaView,ScrollView,TextInput} from "react-native";
import Input from "../Form/textInput";
import { getAllUser } from "../../Servises/ApiServices";
const AddContact = ({navigation,route}) => {
  const [user, setUser] = useState([]);
  const [addSkill, setAddSkill] = useState([]);
  const[skill,setSkill]=useState('')
  const { id } = route.params;
  console.log("hello",route.params.id)

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
   <TouchableOpacity onPress={()=>{navigation.navigate(`personalChat`,{id:data.name})}}>
      
 <View style={{flexDirection:"row",backgroundColor:"#F7F7FA",marginBottom:10,width:"100%"}} key={data}>
        
<View style={{flex:0.1}}>
    <Image  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSskYmX3xnuzTqS5rcUHfgki7LZIKFRZ2WT6g&usqp=CAU' }} style={{height:50,width:50}}></Image>
</View>
<View style={{flex:0.3}}>
    <Text style={{marginLeft:20}}>{data.name}</Text>
    <Text style={{marginLeft:20}}>{data.education}</Text>
</View>
<View style={{flex:0.6}}>

</View>
 </View>
</TouchableOpacity>

 ) })}
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={{fontSize:10}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Text>
      </ScrollView>
      <View style={{flexDirection:"row",marginBottom:30}}>
      <TextInput  style={{ height: 40, borderColor: 'gray', borderWidth: 1,width:300 ,flex:0.95,borderRadius:50,paddingLeft:10}}
      // onChangeText={text => onChangeText(text)}
      // value={value}
      placeholder="Type a message..." />
      <Image source={require('../../assets/sent.png')} style={{height:40,width:40,marginLeft:10}} />
      
      </View>
    </SafeAreaView>
        


   
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
