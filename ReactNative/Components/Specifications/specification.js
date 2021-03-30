import React,{useState} from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,SafeAreaView, FlatList,Item
} from "react-native";
import LinearGradient from "../LinearGradient/linearGradient";
export default function specifications(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [input,changeInput]=useState({})
  const [DATA,setDATA] = useState([
    {
      id: 1,
      title: 'Mongo Db',
    },
    {
      id: 2,
      title: 'React js',
    },
  ]);
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
 
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <LinearGradient />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { 
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Create Class</Text>
            <TextInput
      style={{ height: 40,width:200, borderColor: 'rgb(173,43,118)', borderBottomWidth: 1}}
      onChangeText={text => changeInput({id:DATA.length+1,title:text})}
      placeholder="Class name" 
      placeholderTextColor="black"
    />
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "rgb(173,43,118)" }}
              onPress={() => {
                setModalVisible(!modalVisible);
                setDATA([...DATA,input])
              }}
            >
              <Text style={styles.textStyle}>Create Class</Text>
            </TouchableHighlight>
          
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Create Class</Text>
      </TouchableHighlight>
      {/* <Text></Text> */}
      <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "rgb(173,43,118)",
    fontSize: 25,
    fontWeight: "bold",
  },
  image: {
    width: 400,
    height: 200,
    position: "absolute",
    top: 30,
    left: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "rgb(173,43,118)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "rgb(173,43,118)",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop:50
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    color:"rgb(173,43,118)",
    marginBottom: 15,
    textAlign: "center",
    fontSize:25,
    fontWeight:"bold"
  },
  item: {
    backgroundColor: 'rgb(173,43,118)',
    padding: 5,
    width:250,
    marginTop:10,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  
});
