import React, { useState,useContext } from "react";
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
import Passenger from './Passenger';
import TwoWayFlight from './TwoWayFlight'
export default ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [dates, setDates] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [DefaultmodalVisible, setDefaultModalVisible] = useState(true);

const {
  selectedValue,setSelectedValue,adults,
  setAdult,childrens,setChildrens,x,setX,airPort,toAirPort
  } = useContext(ConversionContext);

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
            navigation.push("FlightSearch");
            setDefaultModalVisible(false);
          }}
          // visible={DefaultmodalVisible}
        >
     
          {/* <ScrollView> */}
        
            <View style={styles.contentContener}>
            

            <View style={{flexDirection:'row',marginBottom:10,marginLeft:40}}>
      <TouchableOpacity onPress={() => navigation.push('Home3')} style={styles.buttomHed}>
      <Text style={{fontWeight:'bold',padding:10,color:'#a2a3a2',borderWidth:1,borderRadius:2,borderColor:'black',}}> One way</Text>
    </TouchableOpacity>

    
    <Text style={{fontWeight:'bold',padding:10,borderWidth:1,borderRadius:2,color:'black',backgroundColor:'#edf2ef'}}>Round Trip</Text>
    </View>
          
    <View style={{flexDirection:'row',marginTop:0}}>     
<View style={{marginLeft:20,marginTop:10}}>
     <Text style={{fontWeight:'bold'}}>From</Text>

      <TextInput underlineColorAndroid='transparent' onFocus={() => navigation.push("Flightnew")} style={{paddingLeft:20,borderColor:'#035f87',borderWidth:0.6,fontSize:13,width: sw("40"),borderRadius:30,height: sh("6"),}}
        value={airPort}
        placeholder="">
      </TextInput>
</View>
<View style={{marginLeft:10,marginTop:10}}>
     <Text style={{fontWeight:'bold'}}>To</Text>

      <TextInput underlineColorAndroid='transparent' onFocus={() => navigation.push("Flightnew2")} style={{paddingLeft:20,borderColor:'#035f87',borderWidth:0.6,fontSize:13,width: sw("40"),borderRadius:30,height: sh("6"),}}
        value={toAirPort}
        placeholder="">
      </TextInput>
</View>

</View>

<View style={{flexDirection:'row'}}>
<Text style={{marginLeft:20,marginTop:20,fontWeight:'bold'}}>Depart</Text>
<Text style={{marginLeft:sw("32"),marginTop:20,fontWeight:'bold'}}>Return</Text>
</View>
<View style={{flexDirection:'row'}}>
<DatePicker
      
      style={{ fontSize:16,
        marginTop:4,
        width: sw("40"),
         marginLeft:20,
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
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft:5,
          marginTop:1 
        },
        
        dateInput: {
          padding:10,
           borderColor:'#035f87',
            borderWidth:0.6,
          paddingLeft:20,
          marginTop:2 ,borderRadius:30,height:50,
        },
      }}
      onDateChange={(dates) => {
        setDates(dates);
      }}
    />


<DatePicker
      
      style={{ fontSize:16,
        marginTop:4,
        width: sw("40"),
         marginLeft:20,
         marginBottom:10,
         backgroundColor:'White'}}
      date={date} // Initial date from state
      mode="date" // The enum of date, datetime and time
      placeholder="select date"
      format="DD-MM-YYYY"
      minDate="01-01-2016"
      maxDate="01-01-2022"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft:5,
          marginTop:1 
        },
        
        dateInput: {
          padding:10,
           borderColor:'#035f87',
            borderWidth:0.6,
          paddingLeft:20,
          marginTop:2 ,borderRadius:30,height:50,
        },
      }}
      onDateChange={(date) => {
        setDate(date);
      }}
    />
</View>

<View style={{marginLeft:20,marginTop:10}}>
     <Text style={{fontWeight:'bold'}}> Travellers</Text>

      <TextInput underlineColorAndroid='transparent' onFocus={() => navigation.push("Passengers")} style={{paddingLeft:40,borderColor:'#035f87',borderWidth:0.6,fontSize:14,width: sw("86"),borderRadius:30,height: sh("6"),fontWeight:'bold'}}
        // value={airPort}
        value={`${adults} adults ${childrens} childrens ${x} Infants`}
        placeholder="">
      </TextInput>
</View>


<Text style={{marginLeft:20,marginTop:20,fontWeight:'bold'}} >Class</Text>
{/* <View style={styles.separator} /> */}
<View style={styles.row}>
<View style={{marginLeft: sw("25"),marginTop:0}}>
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
</View>


    


         
      <TouchableOpacity onPress={() => navigation.push('TwoWayFlight')} style={styles.buttomContainer}>
      <Text style={styles.buttonText}> Search Flight</Text>
    </TouchableOpacity>
            
            

                
         
            </View>
          {/* </ScrollView> */}
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
    borderColor:'#035f87',
    
          marginTop:10,
          width: sw("85%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:20,
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
      row: {
        width: sw('86'),
        height: sh('6%'),
        marginLeft:20,
        borderColor:'#035f87',
        borderWidth:0.6,
        borderRadius:30,
    },
     
});
