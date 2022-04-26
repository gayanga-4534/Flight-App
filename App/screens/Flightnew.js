import React, { useState, useEffect,useContext } from "react";
import DatePicker from 'react-native-datepicker';
import {
  View,
  Image,
  TouchableOpacity,
  Button,
  SafeAreaView,  
  Text,
  TextInput,
  StyleSheet,
  Modal,
  ImageBackground,
} from "react-native";
import Autocomplete from "react-native-autocomplete-input";
import {ConversionContext} from '../util/ConversionContext';
import AirportList from "../components/AirportList";

import {widthPercentageToDP as sw,heightPercentageToDP as sh,} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";


export default ({navigation}) => {
  const [dates, setDates] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [DefaultmodalVisible, setDefaultModalVisible] = useState(true);

const {
  selectedValue,setSelectedValue,adults,
  setAdult,childrens,setChildrens,x,setX,airPort,toAirPort
  } = useContext(ConversionContext);
  const {setAirPort} = useContext(ConversionContext);



  const [filteredFilms, setFilteredAirport] = useState([]);

  const [selectedAirport, setSelectedAirport] = useState({});
  // const [selectedAirport, setSelectedAirport] = useState();
  const findAirport = (query) => {
    if (query) {
      const regex = new RegExp(`${query.trim()}`, "i");

      setFilteredAirport(
        AirportList.filter(
          (AirportList) => AirportList.title.search(regex) >= 0
        )
      );
    } else {
      setFilteredAirport([]);
    }
  };



  return (
    <View style={styles.centeredView}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{
            uri:
         "https://images.pexels.com/photos/3223423/pexels-photo-3223423.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
            }}
          style={styles.image}>
{/* <View style={{marginTop:60}}>
          <Text style={{fontWeight:'bold',fontSize:50,color:'#5d499e'}}>Search Your Flight</Text>
          </View> */}
        </ImageBackground>
 
       
        <Modal
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            navigation.push("Home3");
            setDefaultModalVisible(false);
          }}
          visible={DefaultmodalVisible}
        >
     
          <ScrollView>
        
            <View style={styles.contentContener}>
            
            <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          data={filteredFilms}
          defaultValue={
            JSON.stringify(selectedAirport) === "{}"
              ? ""
              : selectedAirport.title
              
          }
          onChangeText={(text) => findAirport(text)}
          placeholder="Enter the Airport "
          renderItem={({ item }) => (
            // For the suggestion view
            <TouchableOpacity
              onPress={() => {
                setSelectedAirport(item);
                console.log(item.title);
                setAirPort(item.title);
                setFilteredAirport([]);
                navigation.pop();
              }}
            >
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
          <View style={{height:700}}>  


</View>
        

            
                <TouchableOpacity onPress={() => navigation.pop()} style={styles.buttomContainer}>
      <Text style={{  color:'red',
fontSize:16,
fontWeight:'bold',
textAlign:'center'}}> Home</Text>
    </TouchableOpacity>
                
         
            </View>
          </ScrollView>
        </Modal>


      
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  // modalView: {
  //   backgroundColor: 'white',
  //   width: sw("100%"),
  //   height: sh("97%"),
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  // },

  // modalText: {
  //   marginBottom: 15,
  //   textAlign: "center",
  // },
  image: {
    height: sh("68%"),
    width: sw("100%"),
    //backgroundColor : colors.liteWhiteBackground
  },

  contentContener: {
    backgroundColor: 'white',
    width: sw("100"),
    marginTop: sh("25"),
    borderRadius: 15,
    paddingBottom: sh("10"),
  },


  separator: {
    borderWidth:2,
    // borderColor:'#013810',
    borderColor:'#e1e8e2',
    
          marginTop:10,
          width: sw("95%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:10,
      },
      a:{
        flexDirection:'row',
        marginLeft:40,

      },
      b:{
        flexDirection:'row',
        marginLeft:40,
        marginBottom:30
      },
     
});
