const URL="http://9f0b90cba61c.ngrok.io/api"
import { AsyncStorage } from 'react-native';

export async function signIn(email, password) {
  let response;
  try {
    response = await fetch(URL+'/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    // console.log(response, 'response');
    return response.json();
  } catch (e) {
    throw e;
  }
}

export async function signUp(id,email) {
  try {
    const response = await fetch(URL+'user', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        employeeId: id,
        email: email,
      }),
    });
    return await response.json();
  } catch (e) {
    throw e;
  }
}
export async function SetPassword(code,password) {
  var token = await AsyncStorage.getItem('token');
  try {
    const response = await fetch(URL+'setPassword', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(token),

      },
      body: JSON.stringify({
        verifyCode: code,
        password: password,
      }),
    });
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export const getUserId = async (key) => {
  try {    
    var email
    var userId = await AsyncStorage.getItem(key)
    .then(value=>{
      email=value
      // console.log('Email',value)
      return value;
    })
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
  return userId;
}

export async function getUser() {
  try {
    var token = await AsyncStorage.getItem('token')
    // console.log(`Token`, token);
    const response = await fetch(URL+'user/get', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(token),
      },

    });
    // console.log('Response', response);
    return await response.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
}
export async function getAllIssue() {
  try {
    var token = await AsyncStorage.getItem('token')
    // console.log(`Token`, token);
    const response = await fetch(URL+'issue/getByDepartment', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(token),
      }
    });
    console.log('Response', response);
    return await response.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
}
export async function getDailyUpdate() {
  try {
    var token = await AsyncStorage.getItem('token')
    // console.log(`Token`, token);
    const response = await fetch(URL+'dailyUpdates/getByDepartment', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(token),
      }
    });
    console.log('Response', response);
    return await response.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
}
export async function getAllDailyUpdate() {
  try {
    var token = await AsyncStorage.getItem('token')
    // console.log(`Token`, token);
    const response = await fetch(URL+'dailyUpdates/getAll', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(token),
      }
    });
    console.log('Response', response);
    return await response.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
}
export async function getEducation() {
  try {
    var token = await AsyncStorage.getItem('token')
    console.log(`Token`, token);
    const response = await fetch(URL+'education/getAll', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(token),
      },

    });
    // console.log('Response', response);
    return await response.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
}
export async function getExperience() {
  try {
    var token = await AsyncStorage.getItem('token')
    // console.log(`Token`, token);
    const response = await fetch(URL+'experience/getAll', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(token),
      },

    });
    // console.log('Response', response);
    return await response.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
}
export async function dailyUpdates(department,description) {
  try {
    var token = await AsyncStorage.getItem('token')
    // console.log(`Token`, token);
    const response = await fetch(URL+'dailyUpdates/create', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(token),
      },
      body: JSON.stringify({
        department: department,
        description:description
      }),
    });
    return await response.json();
  } catch (e) {
    throw e;
  }
}
export async function createInquiry(body) {
  try {
    var token = await AsyncStorage.getItem('token')
    // console.log(`Token`, token);
    const response = await fetch(URL+'issue/create', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': JSON.parse(token),
      },
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (e) {
    throw e;
  }
}

export async function createExperience(title,company,from,to,isSelected,location,description) {
  try {
    var token = await AsyncStorage.getItem('token')
    // console.log(`Token`, token);
    const response = await fetch(URL+'experience/create', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(token),
      },
      body: JSON.stringify({
        title: title,
        company: company,
        from:from,
        to:to,
        currentlyWork:isSelected,
        location:location,
        Description:description

      }),
    });
    return await response.json();
  } catch (e) {
    throw e;
  }
}
export async function createSkills(skill) {
  try {
    var token = await AsyncStorage.getItem('token')
    // console.log(`Token`, token);
    const response = await fetch(URL+'skills/create', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(token),
      },
      body: JSON.stringify({
        skills:skill

      }),
    });
    return await response.json();
  } catch (e) {
    throw e;
  }
}
export async function getSkills() {
  try {
    var token = await AsyncStorage.getItem('token')
    // console.log(`Token`, token);
    const response = await fetch(URL+'skills/get', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(token),
      },

    });
    console.log('Response', response);
    return await response.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
}
export async function updateSkills(skill) {
  try {
    var token = await AsyncStorage.getItem('token')
    // console.log(`Token`, token);
    const response = await fetch(URL+'skills/get', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(token),
      },
      body: JSON.stringify({
        skills:skill
      }),
    });
    // console.log('Response', response);
    return await response.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
}










// import firebase from '../config';
// import { AsyncStorage } from 'react-native';
// import admin from 'firebase'
// export const getUserId = async (key) => {
//   try {
//     var email
//     var userId = await AsyncStorage.getItem(key)
//     .then(value=>{
//       email=value
//       console.log('Email',value)
//       return value;
//     })
//   } catch (error) {
//     // Error retrieving data
//     console.log(error.message);
//   }
//   return userId;
// }

// export async function  login(email, password ) {
//   let stringEmail=email.toString()
//   firebase.auth().signInWithEmailAndPassword(stringEmail, password)
//     .then(async(value) => {
//       await AsyncStorage.setItem("name", JSON.stringify(value.user.displayName));
//       await AsyncStorage.setItem("email", JSON.stringify(value.user.email));
//       // await AsyncStorage.setItem(
//       //   "phoneNumber",
//       //   JSON.stringify(value.user.phoneNumber)
//       // );
//       await AsyncStorage.setItem("photoURL", JSON.stringify(value.user.photoURL));
      
//       console.log(value.user)
    
//     })
// }

// export function userUpdate(data) {
//   firebase.auth().currentUser.updateProfile(data)
//     .then((value) => {
//       // await AsyncStorage.setItem("photoURL", JSON.stringify(value.user.photoURL));
      
//       console.log(value)})
// }

// export async function signup( email, password, displayName ) {
//   let stringEmail=email.toString()
//   var stringName=displayName.toString()
//   firebase.auth().createUserWithEmailAndPassword(stringEmail, password)

//    .then(async(userInfo) => {

//     // userInfo.user.updateProfile({ displayName: displayName.trim() })
//     // console.log('User account created & signed in!');
//     const update = { 
//       displayName: stringName,
//       photoURL: 'https://my-cdn.com/assets/user/123.png',
//     };
//     await firebase.auth().currentUser.updateProfile(update)
//     .then(async(res)=>{ 
//      await admin
//       .database()
//       .ref('/users/' + userInfo.user.uid)
//       .set({
//         gmail: userInfo.user.email,
//         name:userInfo.user.displayName,
//         photoURL:userInfo.user.photoURL,
//         first_name: userInfo.user.displayName,
//         created_at: Date.now()
//       }).then(res=>{
//         console.log("name",res)
//       })
       
//     })
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }

//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }

//     console.error(error);
//   });
// }


