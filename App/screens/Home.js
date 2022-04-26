
import React, { useState, useEffect, useContext } from 'react';
import { Picker, TouchableOpacity,ImageBackground, StyleSheet, Text, StatusBar,TextInput, View, Dimensions } from "react-native";
import DatePicker from 'react-native-datepicker';
import FlightSearch from './FlightSearch'
import ToSearch from './ToSearch';
import {ConversionContext} from '../util/ConversionContext';
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import OneWayFlight from './OneWayFlight'
import Flightnew from './Flightnew';

import Home3 from './Home3'

  export default ({ navigation }) => {
const [dates, setDates] = useState(new Date());

    // const [selectedAirport, setSelectedAirport] = useState({});
    const {
    selectedValue,setSelectedValue,adults,
    setAdult,childrens,setChildrens,x,setX,airPort,toAirPort
    } = useContext(ConversionContext);
   
  return(
  <View style={styles.container}>
  
    <ImageBackground source={{ uri: "https://images.pexels.com/photos/1928064/pexels-photo-1928064.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" }} style={styles.backgroundImage}>
     <View style={styles.content}>
      <Text style={styles.logo}>Find Your Flight</Text>
      <View style={styles.inputContent}>


<View style={{flexDirection:'row',marginBottom:10}}>
<Text style={{fontWeight:'bold',padding:10,borderWidth:1,borderRadius:30,color:'#821151'}}>One way</Text>
      <TouchableOpacity onPress={() => navigation.push('Home2')} style={styles.buttomHed}>
      <Text style={{fontWeight:'bold',padding:10,color:'#821151'}}> Round Trip</Text>
    </TouchableOpacity>
    
    </View>

      <Text style={styles.T_title}>From</Text>
      <TextInput underlineColorAndroid='transparent'  onFocus={() => navigation.push("FlightSearch")}  style={styles.input}
        value={airPort}
        placeholder='From'>
        
      </TextInput>
      <Text style={styles.T_title}>To</Text>
      <TextInput underlineColorAndroid='transparent'  onFocus={() => navigation.push("ToSearch")} style={styles.input}
        value={toAirPort}
        placeholder='To'>
      </TextInput>

   

<View>
  {/* <Text>aafa{this.props.navigation.state.params.P1}</Text>   */}
</View>

<Text style={styles.T_title}>Depart</Text>

       <DatePicker
      
      style={{ fontSize:16,
        borderRadius: 20,
        height:40,
        marginBottom:10,
        backgroundColor:'#F3FBF8'}}
      date={dates} // Initial date from state
      mode="date" // The enum of date, datetime and time
      placeholder="select date"
      format="DD-MM-YYYY"
      minDate="01-01-2016"
      maxDate="01-01-2022"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          // display: 'none',
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 10,
          
          marginTop:1
          
        },
        dateInput: {
           
            borderWidth:0,
          marginLeft: 25,
          marginTop:2
        },
      }}
      onDateChange={(dates) => {
        setDates(dates);
      }}
    />

 
<Text style={{fontWeight:'bold',}}>Travellers</Text>
      <TextInput underlineColorAndroid='transparent'  style={styles.input}
        placeholder='Travellers'
       
              onFocus={() => navigation.push("Travellers")}
              value={`${adults} adults ${childrens} childrens ${x} Infants`}
        > 

      </TextInput>



<Text style={styles.T_title}>Class</Text>
<View style={styles.containerr}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 200,color:'#824211',borderWidth:1,borderColor:'red' }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >

      
      <Picker.Item label="Ecommomy" value="epe" />
      <Picker.Item label="Premium Ecommomy" value="pe" />
        <Picker.Item label="Business/First" value="java" />
        <Picker.Item label="Business" value="b" />
        <Picker.Item label="First" value="js" />
      </Picker>
   
</View>


     


    <TouchableOpacity onPress={() => navigation.push('OneWayFlight')} style={styles.buttomContainer}>
      <Text style={styles.buttonText}> Search Flighht</Text>
    </TouchableOpacity>



    <TouchableOpacity onPress={() => navigation.push('Home3')} style={styles.buttomContainer}>
      <Text style={styles.buttonText}> Home3</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.push('Passenger')} style={styles.buttomContainer}>
      <Text style={styles.buttonText}> Flightnew</Text>
    </TouchableOpacity>

      </View>
      </View>
    </ImageBackground>
  </View>
);
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   flexDirection: "column"
  // },
  // image: {
  //   flex: 1,
  //   resizeMode: "cover",
  //   justifyContent: "center"
  // },
  // text: {
  //   color: "white",
  //   fontSize: 42,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   backgroundColor: "#000000a0"
  // }

container:{
  flex:1
},

backgroundImage:{
  flex:1,
  // width:null,
  // height:null,
  alignSelf:'stretch',
  width:null,
  justifyContent:'center'
},
content:{
  alignItems:'center'
},
logo:{
  color:'#ffff99',
  // color:'black',
  fontSize:40,
  fontStyle:'italic',
  fontWeight:'bold',
  textShadowColor:'#252525',
  textShadowOffset:{width:2,height:2},
  textShadowRadius:15,
  marginBottom:20
},

inputContent:{
  borderRadius:20,
  margin:20,
  marginBottom:40,
  padding:30,
  paddingBottom:10,
  alignSelf:'stretch',
  borderWidth:1,
  borderColor:'#fff',
  backgroundColor:'rgba(255,255,255,0.6)',
  // backgroundColor:'white'

},
input:{
  fontSize:14,
  height:40,
  padding:10,
  marginBottom:10,
  // backgroundColor:'rgba(255,255,255,1)',
  backgroundColor:'#F3FBF8',
  borderRadius:20,
  color:'#6dabad',
},
buttomContainer:{
  alignSelf:'stretch',
  margin:20,
  padding:20,
  backgroundColor:'blue',
  borderWidth:1,
  borderColor:'#fff',
  // backgroundColor:'rgba(255,255,255,0.6)',
  // backgroundColor:'#235A9D'
  backgroundColor:'#1a669c',
  borderRadius:20

},
buttonText:{
  color:'white',
fontSize:16,
fontWeight:'bold',
textAlign:'center'
},



containerr: {
  flex: 1,
  paddingTop: 0,
  alignItems: "center",
  

  // height: 70,
  marginTop: 0,
  padding: 50,
  backgroundColor: '#E6F2F6',
  // flexDirection: 'row',
  alignItems: "center",
  borderRadius: 20,
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 4,
  },
  shadowOpacity: 0,
  // shadowRadius: 4.65,
  elevation:8,
},

T_title:{
  fontWeight:'bold'
}

});

