import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
const {width,height}=Dimensions.get('window')
import moment from 'moment'
import {getAllIssue,getDailyUpdate} from '../../Servises/ApiServices'
// import { Container } from './styles';

 const landing = () => {
  const [dailyUpdates,setDailyUpdates]=useState([])
  useEffect(()=>{
    getDailyUpdate().then((res)=>{
      console.log(res)
      setDailyUpdates(res.dailyUpdates)
    })
  },[]);
  const dailyUpdatesFunction= dailyUpdates.map((data) =>
  <View style={styles.dailyUpdates}>
    <Text style={{fontSize:18}}>{data.Name}</Text>
    <Text style={{fontSize:18}}>{data.regno}</Text>
    <Text style={{fontSize:18}}>{data.batch}</Text>
  <Text style={{fontSize:18}}>{data.description}</Text>
  <Text style={{fontSize:18}}>{data.Tc}</Text>
  <Text style={{fontSize:18}}>{data.marksheet}</Text>
  <Text style={{fontSize:18}}>{data.coursecertificate}</Text>
  <Text style={{fontSize:18}}>{data.SportsCertificate}</Text>
  
  <Text style={{color:"silver",alignSelf:"flex-end",justifyContent:"flex-end"}}>{moment(data.createdAt).fromNow()}</Text>
</View>
);
  return (
    <View style={{backgroundColor:"white",height:height,width:width}}>
    <View style={styles.container}>
      <View>
            {dailyUpdatesFunction}
      </View>
    </View>
    </View>
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
     height:height/4,
     width:width/1.23,
     borderRadius:10,
     borderWidth:1,
     margin:10,
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