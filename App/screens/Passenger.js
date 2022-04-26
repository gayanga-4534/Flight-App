import React, { useState,useEffect,useContext } from "react";

import {
  Picker,
  View,
  Image,
  TouchableOpacity,
  Text,SafeAreaView,Dimensions,StatusBar,
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

export default ({navigation}) => {
  // const [dates, setDates] = useState(new Date());
  // // const [modalVisible, setModalVisible] = useState(false);
  // const [DefaultmodalVisible, setDefaultModalVisible] = useState(true);
  // const params = route.params || {};
  
    
  // const {adults,setAdult,childrens,setChildrens,x,setX, } = useContext(ConversionContext);



const [modalVisible, setModalVisible] = useState(false);
const [selectedValue, setSelectedValue] = useState("java");
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
     
          <ScrollView>
        
            <View style={styles.contentContener}>
            
          
        
<View style={{marginLeft:10,marginTop:20}}>
     <Text>From</Text>

      <TextInput underlineColorAndroid='transparent' onFocus={() => navigation.push("Flightnew")} style={{fontWeight:'bold',borderColor:'black',borderWidth:2,fontSize:15,width: sw("80")}}
        // value={airPort}
        placeholder="">
      </TextInput>
</View>
<View style={{marginLeft:10,marginTop:20}}>
     <Text>To</Text>

      <TextInput underlineColorAndroid='transparent' onFocus={() => navigation.push("Flightnew2")} style={{fontWeight:'bold',borderColor:'black',borderWidth:2,fontSize:15,width: sw("80")}}
        // value={toAirPort}
        placeholder="">
      </TextInput>
</View>




<Text style={{marginLeft:10,marginTop:10}}>Depart</Text>

<DatePicker
      
      style={{ fontSize:16,
        borderRadius: 0,
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
          marginLeft:5,
          
          marginTop:1
          
        },
        dateInput: {
          // width:200,
           borderColor:'black',
            borderWidth:2,
          marginLeft: 25,
          marginTop:2
        },
      }}
      onDateChange={(dates) => {
        setDates(dates);
      }}
    />

<View style={{marginLeft:10,}}>
     <Text>Travellers</Text>

      <TextInput underlineColorAndroid='transparent' onFocus={() => navigation.push("Travellers")} style={{fontWeight:'bold',borderColor:'black',borderWidth:2,fontSize:15,width: sw("80")}}
        // value={airPort}
        placeholder="">
      </TextInput>
</View>


<Text >Class</Text>
<View >
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


      <View style={styles.separator} />


         
        <View>
          <Text>
            gagaagaga
          </Text>

          <Text>
            gagaagaga
          </Text>

          <Text>
            gagaagaga
          </Text>

          <Text>
            gagaagaga
          </Text>

          <Text>
            gagaagaga
          </Text>

          <Text>
            gagaagaga
          </Text>


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
    marginTop: sh("30"),
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
