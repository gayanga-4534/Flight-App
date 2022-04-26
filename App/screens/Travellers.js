
import React, { useState,useContext,useEffect } from "react";
import DatePicker from 'react-native-datepicker';
import {
  Picker,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  ImageBackground,
} from "react-native";
import {ConversionContext} from '../util/ConversionContext';

import {widthPercentageToDP as sw,heightPercentageToDP as sh,} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import Flightnew from './Flightnew';
import Flightnew2 from './Flightnew2';
import Passengers from './Passengers';
import RHome from './RHome';
import TwoWayFlight from './TwoWayFlight'
import Test from './Test';

export default ({navigation}) => {
  const [dates, setDates] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [DefaultmodalVisible, setDefaultModalVisible] = useState(true);

const {
  selectedValue,setSelectedValue,adults,
  setAdult,childrens,setChildrens,x,setX,airPort,toAirPort
  } = useContext(ConversionContext);
  return (
    <ScrollView> 
    <View >
       
       <ImageBackground source={{ uri: "https://images.pexels.com/photos/3223423/pexels-photo-3223423.png?auto=compress&cs=tinysrgb&dpr=2&w=500", }} style={styles.backgroundImage}>
       <View style={styles.content}>




       <View style={styles.contentContener}>
            



            <View style={{flexDirection:'row',marginBottom:10,marginLeft:20}}>
<Text style={{fontWeight:'bold',padding:10,borderWidth:1,borderRadius:2,color:'black',backgroundColor:'#edf2ef'}}>One way</Text>
      <TouchableOpacity onPress={() => navigation.push('RHome')} style={styles.buttomHed}>
      <Text style={{fontWeight:'bold',padding:10,color:'#939e97'}}> Round Trip</Text>
    </TouchableOpacity>
    
    </View>

            
     <View style={{flexDirection:'row',marginTop:0}}>     
        
<View style={{marginLeft:20,marginTop:10}}>
     <Text style={{fontWeight:'bold'}}>From</Text>

      <TextInput underlineColorAndroid='transparent' onFocus={() => navigation.push("Flightnew")} style={{paddingLeft:20,borderColor:'#035f87',borderWidth:0.6,fontSize:13,width: sw("40"),borderRadius:30,height: sh("6"),}}
        value={airPort}
        placeholder="">
      </TextInput>
</View>
<View style={{marginLeft:20,marginTop:10}}>
     <Text style={{fontWeight:'bold'}}>To</Text>

      <TextInput underlineColorAndroid='transparent' onFocus={() => navigation.push("Flightnew2")} style={{paddingLeft:20,borderColor:'#035f87',borderWidth:0.6,fontSize:13,width: sw("40"),borderRadius:30,height: sh("6"),}}
        value={toAirPort}
        placeholder="">
      </TextInput>
</View>

</View>


<Text style={{marginLeft:20,marginTop:10,fontWeight:'bold'}}>Depart</Text>

<DatePicker
      
      style={{ fontSize:16,
       
        // borderRadius: 0,
        height:40,
        margin:10,
        marginBottom:10,
        backgroundColor:'White'}}
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
          marginLeft:10,
          
          marginTop:1
          
        },
        dateInput: {
          // width:500,
          // height:50,
          padding:10,
        
           borderColor:'#035f87',
            borderWidth:0.6,
          marginLeft:9,
          marginTop:2 ,borderRadius:30,height:40,
        },
      }}
      onDateChange={(dates) => {
        setDates(dates);
      }}
    />

<View style={{marginLeft:20,marginTop:13,}}>
     <Text style={{fontWeight:'bold'}}>Travellers</Text>

      <TextInput underlineColorAndroid='transparent' onFocus={() => navigation.push("Passengers")} style={{paddingLeft:20,borderColor:'#035f87',borderWidth:0.6,fontSize:14,width: sw("86"),borderRadius:30,height: sh("6"),}}
        // value={airPort}
  
        value={`${adults} adults ${childrens} childrens ${x} Infants`}
        placeholder="">
      </TextInput>
</View>


<Text style={{marginLeft:20,marginTop:13,fontWeight:'bold'}} >Class</Text>
<View style={styles.separator} />
<View style={{marginLeft: sw("25"),marginTop:0}}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: sh("5"), width: 200,color:'#824211',borderWidth:1,borderColor:'red' }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >

      
      <Picker.Item label="Ecommomy" value="epe" />
      <Picker.Item label="Premium Ecommomy" value="pe" />
        <Picker.Item label="Business/First" value="java" />
        <Picker.Item label="Business" value="b" />
        <Picker.Item label="First" value="js" />
      </Picker>
   
</View>


      <View style={styles.separator} />


         
      <TouchableOpacity onPress={() => navigation.push('OneWayFlight')} style={styles.buttomContainer}>
      <Text style={styles.buttonText}> Search Flighht</Text>
    </TouchableOpacity>
            
    {/* <TouchableOpacity onPress={() => navigation.push('Test')} style={styles.buttomContainer}>
      <Text style={styles.buttonText}> Test</Text>
    </TouchableOpacity>
             */}
                {/* <TouchableOpacity onPress={() => navigation.pop()} style={styles.buttomContainer}>
      <Text style={{  color:'red',
fontSize:16,
fontWeight:'bold',
textAlign:'center'}}> Home</Text>
    </TouchableOpacity>
                 */}
         
            </View>
</View>
       </ImageBackground>
        


    </View>
    </ScrollView>
  );
   
};



const styles = StyleSheet.create({
  backgroundImage:{
    height: sh("100%"),
    width: sw("100%"),

  },
  content:{
      height: sh('200'),
    backgroundColor: 'white',
    width: sw("100"),
    marginTop: sh("30"),
    borderRadius: 15,
    paddingBottom: sh("10"),
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
    backgroundColor:'black',
    borderRadius:20,
    height: sh("8")
  
  },
  buttonText:{
    color:'white',
  fontSize:16,
  fontWeight:'bold',
  textAlign:'center'
  },
});



