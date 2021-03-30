import React,{useEffect,useState} from 'react';
import { View, StyleSheet,AsyncStorage,TouchableOpacity,Dimensions} from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Image
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {getUserId} from '../Servises/ApiServices'

const {width,height}=Dimensions.get('window')

  function DrawerContent(props) {
      const [name,setName]=useState('')
      
    
    useEffect(()=>{
       
          const getName = async () => {
            const fetchData = await getUserId('name'); // fetchDailyData() is calling Api 
            setName(JSON.parse(fetchData));
          }

          getName()
    })

    return(
        <View style={{flex:1,backgroundColor:"white",marginTop:-30}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                   

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                           
                            label="My Inquiry"
                            onPress={() => {props.navigation.navigate('Your Inquiry')}}
                        />
                        <DrawerItem 
                           label="Notification"
                            onPress={() => {props.navigation.navigate('Notification')}}
                        />
                        <DrawerItem 
                            
                            label="Daily Updates"
                            onPress={() => {props.navigation.navigate('Daily Updates')}}
                        />
                        <DrawerItem 
                            
                            label="Logout"
                            onPress={() => {props.navigation.navigate('Logout')}}
                        />
                    </Drawer.Section>
                   
                </View>
            </DrawerContentScrollView> 
            
        </View>
    );
} 
export default DrawerContent

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      
    },
    userInfoSection: {
      backgroundColor:"#FF9900",
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color:"white",
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: 'white',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
  