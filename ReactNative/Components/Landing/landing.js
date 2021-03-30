import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
const {width,height}=Dimensions.get('window')
import {getAllIssue,getDailyUpdate,getUserId,getAllDailyUpdate} from '../../Servises/ApiServices'
// import { Container } from './styles';
 const landing = (props) => {
// console.log("hello",getUserId('department'))

  const [dailyUpdates,setDailyUpdates]=useState()
  const [inquiry,setInquiry]=useState()
  const [department,setDepartment]=useState('')
  useEffect(()=>{
    getUserId('department').then(res=>{
      console.log("dep",res)
      setDepartment(JSON.parse(res))
    })
  })
  useEffect(()=>{
    getAllIssue().then((res)=>{
      console.log(res)
      setInquiry(res.issue[0])
    })
  },[]);
  useEffect(()=>{
    if(department==='Network'){
      getAllDailyUpdate().then((res)=>{
        console.log(res)
        setDailyUpdates(res.dailyUpdates[0])
      })
    }
    else{
      getDailyUpdate().then((res)=>{
        console.log(res)
        setDailyUpdates(res.dailyUpdates[0])
      })
    }

  },[]);
  return (
    <View style={{backgroundColor:"white",height:height,width:width}}>
    <View style={styles.container}>
    <View style={{flexDirection:"row",}}>
            <Text style={{fontWeight:"bold",fontSize:15,flex:1}}>Student Data</Text>
            <Text style={{fontWeight:"bold",color:"#1E538F",fontSize:15}}>View all &gt;&gt;</Text>
        </View>

    <View style={styles.dailyUpdates}>
              {/* {dailyUpdates?
              <Text>{dailyUpdates.description}</Text>:
              <Text style={{fontSize:18}}>Name           :    Abi</Text> 
              }
              {dailyUpdates?
              <Text>{dailyUpdates.description}</Text>:
              <Text style={{fontSize:18}}>REGNO         :    1P18MC001</Text> 
              }
              {dailyUpdates?
              <Text>{dailyUpdates.description}</Text>:
              <Text style={{fontSize:18}}>BATCH         :    2018</Text> 
              }
               {dailyUpdates?
              <Text>{dailyUpdates.description}</Text>:
              <Text style={{fontSize:18}}>NO OF DAYS PRESENT :  15  </Text> 
              }
              {dailyUpdates?
              <Text>{dailyUpdates.description}</Text>:
              <Text style={{fontSize:18}}>NO OF DAYS ABSENT  :  7</Text> 
              } */}
            </View>
      <View>
                    
            <View style={styles.dailyUpdates}>
              {dailyUpdates?
              <Text>{dailyUpdates.description}</Text>:
              <Text style={{fontSize:18}}>Name           :    ABINESH</Text> 
              }
              {dailyUpdates?
              <Text>{dailyUpdates.description}</Text>:
              <Text style={{fontSize:18}}>REGNO         :    1P18MC002</Text> 
              }
              {dailyUpdates?
              <Text>{dailyUpdates.description}</Text>:
              <Text style={{fontSize:18}}>BATCH         :    2018</Text> 
              }
                {dailyUpdates?
              <Text>{dailyUpdates.description}</Text>:
              <Text style={{fontSize:18}}>NO OF DAYS PRESENT :  18  </Text> 
              }
              {dailyUpdates?
              <Text>{dailyUpdates.description}</Text>:
              <Text style={{fontSize:18}}>NO OF DAYS ABSENT  :  6</Text> 
              }
             
            </View>
            
      </View>
       

       
{/* {department==='Network'?null:
      <View>
        <View style={{flexDirection:"row"}}>
            <Text style={{fontWeight:"bold",fontSize:15,flex:1}}>Your recent Inquiry</Text>
            <Text style={{fontWeight:"bold",color:"#1E538F",fontSize:15}}>View all&gt;&gt;</Text>
        </View>
            <View  style={styles.dailyUpdates}>
              {inquiry?
              <View>
              <View style={{backgroundColor:[inquiry.status==='Not completed'?"red":inquiry.status==='Completed'? "#80E220":"#F7BC13"],padding:3,borderRadius:10,width:"auto",alignSelf:"flex-end"}}><Text style={{color:"white",justifyContent:"center"}}>{inquiry.status}</Text></View>
              <View style={{flexDirection:"row"}}>
                <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10}}>Issue Type:</Text>
                <Text style={styles.data}>{inquiry.issueType}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10}}>Location:</Text>
                <Text style={styles.data}>{inquiry.location}</Text>
              </View> 
              <View style={{flexDirection:"row"}}>
                <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10}}>Assigned to:</Text>
                <Text style={styles.data}>{inquiry.assignedto}</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <Text style={{flex:0.8,fontWeight:"bold",marginLeft:10}}>Reporting At:</Text>
                <Text style={styles.data}>{inquiry.createdAt}</Text>
              </View>
              </View>
              :
              <Text style={{fontSize:18}}>No Inquiry Generated Before</Text>}
            </View>
      </View>} */}


      {department==='Network'?
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Add Daily Updates')}
        // onPress={loginFunction}
        style={styles.button}>
        <Text style={{ fontSize: 18, color: 'white' }} >Add Daily Updates</Text>
      </TouchableOpacity>: 
           <TouchableOpacity
        onPress={() => props.navigation.navigate('Add Inquiry')}
        // onPress={loginFunction}
        style={styles.button}>
        <Text style={{ fontSize: 18, color: 'white' }} >Add students</Text>
      </TouchableOpacity>}
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