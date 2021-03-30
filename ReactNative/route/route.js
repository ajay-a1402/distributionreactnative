import * as React from "react";
import { Text, View ,Image,LogBox,Dimensions} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../Components/Welcome/home";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Landing from "../Components/Landing/landing";
import Login from "../Components/Authentication/loginForm.js";
import Verify from "../Components/Authentication/verify.js";
import Signup from '../Components/Authentication/signupForm.js'
import DrawerContent from './Drawer'
import AddInquiry from '../Components/Inquiry/AddInquiry'
import AllInquiry from '../Components/Inquiry/AllInquiry'
import DailyUpdates from '../Components/DailyUpdates/dailyUpdates'


const {width,height}=Dimensions.get('window')

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation=(props)=>{
  return(

    <Drawer.Navigator drawerStyle={{height:height}} drawerContent={(props) => <DrawerContent {...props} />}>
    {/* <Drawer.Screen name="Home" component={Home} /> */}
    <Drawer.Screen name="profile" component={Landing} navigationOptions={{header: null}} />
    {/* <Drawer.Screen name="Education" component={Education} /> */}
    {/* <Drawer.Screen name="MyContact" component={MyContact} /> */}

  

    {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
  </Drawer.Navigator>

  )

}
function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: "black" }}
      style={{ backgroundColor: "black" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Specifications"
        component={Specifications}
        options={{
          tabBarLabel: "Specifications",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Stacks({navigation,route}) {
  console.log(navigation, 'navigation')
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={screenOptionStyle} >
    <Stack.Screen name=" " component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Sign up" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Verify" component={Verify} options={{ headerShown: false }} />
      <Stack.Screen name="Landing" component={Landing,DrawerNavigation} />
      <Stack.Screen name="Add Inquiry" component={AddInquiry}  />
      <Stack.Screen name="Daily Updates" component={DailyUpdates} />
      <Stack.Screen name="Your Inquiry" component={AllInquiry}  />
    </Stack.Navigator>
  );
}

export default function App({navigation,route}) {
console.disableYellowBox = true;
  
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#FF9900",
    alignItem:"center",
    justifyContent:"center",
  },
  headerTintColor: "white",
  // headerBackTitle: "white",
  // alignItem:"center",
  // justifyContent:"center",

};