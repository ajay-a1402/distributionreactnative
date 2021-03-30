import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Dimensions,ScrollView,SafeAreaView} from 'react-native';
const {width,height}=Dimensions.get('window')
import moment from 'moment'
import {getAllIssue,getDailyUpdate} from '../../Servises/ApiServices'
// import { Container } from './styles';

 const landing = (props) => {
  const [inquiry,setInquiry]=useState([]);
  useEffect(async ()=>{
    let response;
    try {
      response = await getAllIssue();
      if(response){
        setInquiry(response.issue)
      }
    } catch (error) {
      throw error
    }
  },[]);
  const InquiryFunction= inquiry.map((data) =>
 
  <View  style={styles.dailyUpdates}>
   <View>
  <View style={{backgroundColor:[data.status==='Not completed'?"red":data.status==='Completed'? "#80E220":"#F7BC13"],padding:3,borderRadius:10,width:"auto",alignSelf:"flex-end"}}><Text style={{color:"white",justifyContent:"center"}}>{data.status}</Text></View>
  <View style={{flexDirection:"row"}}>
    <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10}}>Issue Type:</Text>
    <Text style={styles.data}>{data.Tc}</Text>
  </View>
  <View style={{flexDirection:"row"}}>
    <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10}}>Location:</Text>
    <Text style={styles.data}>{data.marksheet ? "yes": "no"}</Text>
  </View> 
  <View style={{flexDirection:"row"}}>
    <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10}}>Assigned to:</Text>
    <Text style={styles.data}>{data.assignedto}</Text>
  </View>
  <View style={{flexDirection:"row"}}>
    <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10}}>Reporting At:</Text>
     <Text style={styles.data}>{moment(data.createdAt).format("DD/MM/YYYY")}</Text> 
  </View>
  <TouchableOpacity style={{alignSelf:"flex-end", backgroundColor: "#1E538F",borderRadius:10,width:"auto",paddingTop:3,paddingBottom:3,paddingLeft:30,paddingRight:30,marginTop:3,marginBottom:3}} onPress={()=>props.navigation.navigate('Inquiry',{Inquiry:data})}>
    <Text style={{color:"white"}}>View &gt;&gt;</Text>
  </TouchableOpacity>
  </View>
   
  </View>
);

  return (
    <SafeAreaView style={{backgroundColor:"white",flex:1}}>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {InquiryFunction}

      
    </ScrollView>
    </SafeAreaView>
  )
}
export default landing;

const styles = StyleSheet.create({
  container:{
    width:width/1.23,
    alignSelf:"center",
    paddingTop:height/15,

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
    marginTop:height/15

   },
   dailyUpdates:{
     
    //  alignSelf:"center",
     height:height/3.5,
     width:width/1.23,
     borderRadius:10,
     borderWidth:1,
     marginBottom:10,
     padding:10,
    // justifyContent:"center",
    // alignItems:"center"
   },
   data:{
    height: 25,
    borderColor: "silver",
    borderWidth: 1,
    backgroundColor: "white",
    padding: 3,
    marginTop:5,
    flex: 1,
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 50,
    elevation: 10,
    borderTopWidth:0,
    alignSelf:"center"
   }
  })