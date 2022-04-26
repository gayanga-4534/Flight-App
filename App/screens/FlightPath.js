import React, { useState,useContext } from "react";

import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  ImageBackground,
} from "react-native";

// import { Divider } from 'react-native-elements';
import {ConversionContext} from '../util/ConversionContext';

import {
  widthPercentageToDP as sw,
  heightPercentageToDP as sh,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";


export default ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [DefaultmodalVisible, setDefaultModalVisible] = useState(true);

  const {
airPort,toAirPort
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
          // animationType="slide"
          transparent={true}
          onRequestClose={() => {
            navigation.push("Home3");
            setDefaultModalVisible(false);
          }}
          visible={DefaultmodalVisible}
        >
          <ScrollView>
        
            <View style={styles.contentContener}>
            
            {/* <View style={{flexDirection:'row'}}> */}
         <View style={{flexDirection:'row',padding:20}}>
        
         <TextInput underlineColorAndroid='transparent'   style={{fontWeight:'bold',color:'black',fontSize:15}}
        value={airPort}
        placeholder=''>
      </TextInput>
  
        <View style={{    borderWidth:1,
    borderColor:'#013810',
          marginTop:14,
          width: sw("5%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:1,}} />
      <TextInput underlineColorAndroid='transparent'  style={{fontWeight:'bold',color:'black',fontSize:15}}
        value={toAirPort}
        placeholder="">
      </TextInput>

      </View>


      <View style={styles.separator} />
      <View style={styles.content} >
      <View style={{flexDirection:'row',backgroundColor:'#e3e3e1',margin:15}}>
      
      <ImageBackground
        source={{
          uri:
       "data:image/jpeg;base64,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",
          }}
        fadeDuration={0}
        style={{ width: 50, height: 50 ,margin:10}}
      >
       </ImageBackground>
       <View >
<Text style={{marginTop:10,fontWeight:'bold',}}>
  Qutar Airways
  </Text>
 
  <Text >
  Economy ECON CONVENIEENCE
  </Text>
  <Text style={{color:'#79a89c'}}>
 QR 669
  </Text>
  </View>
       </View>
<View style={styles.c}>
</View>
    <View style={styles.a}>
            <Text style={{fontWeight:'bold',marginRight:30}}>Colombo</Text>
            <Text style={{marginLeft:20}}>CMB</Text>
            <Text style={{marginRight:10,marginLeft:10}}>SIN</Text>
            <Text style={{fontWeight:'bold' ,marginLeft:40}}>Singapore</Text>
            {/* <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 230,000 </Text> */}
            </View> 
            

            <View style={styles.a}>
            <Text style={{fontWeight:'bold',marginRight:20,color:'#a4a6a5'}}>Sun, 28 Mar</Text>
            <View style={{borderWidth:0.5,
    borderColor:'#013810',
          marginTop:10,
          marginBottom:10,
          width: sw("20%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:5,}} />
            <Text style={{fontWeight:'bold' ,marginLeft:33,color:'#a4a6a5'}}>Sun, 28 Ma</Text>
        
            </View> 

            <View style={styles.a}>
            <Text style={{fontWeight:'bold',marginRight:30}}>07:40</Text>
           
            <Text style={{marginRight:10,marginLeft:40}}>4hr 10 min</Text>
            <Text style={{fontWeight:'bold' ,marginLeft:68}}>14:20</Text>
            {/* <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 230,000 </Text> */}
            </View> 
       
           
         
          
          

            <View style={{flexDirection:'row',backgroundColor:'#e3e3e1',margin:15}}>
      
      <ImageBackground
        source={{
          uri:
       "data:image/jpeg;base64,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",
          }}
        fadeDuration={0}
        style={{ width: 50, height: 50 ,margin:10}}
      >
       </ImageBackground>
       <View >
<Text style={{marginTop:10,fontWeight:'bold',}}>
  Qutar Airways
  </Text>
 
  <Text >
  Economy ECON CONVENIEENCE
  </Text>
  <Text style={{color:'#79a89c'}}>
 QR 669
  </Text>
  </View>
       </View>
<View style={styles.c}>
</View>
    <View style={styles.a}>
            <Text style={{fontWeight:'bold',marginRight:30}}>Singapore</Text>
            <Text style={{marginLeft:20}}>SIN</Text>
            <Text style={{marginRight:10,marginLeft:10}}>CMB</Text>
            <Text style={{fontWeight:'bold' ,marginLeft:40}}>Colombo</Text>
            {/* <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 230,000 </Text> */}
            </View> 
            

            <View style={styles.a}>
            <Text style={{fontWeight:'bold',marginRight:20,color:'#a4a6a5'}}>Sun, 28 Mar</Text>
            <View style={{borderWidth:0.5,
    borderColor:'#013810',
          marginTop:10,
          marginBottom:10,
          width: sw("20%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:5,}} />
            <Text style={{fontWeight:'bold' ,marginLeft:33,color:'#a4a6a5'}}>Sun, 28 Ma</Text>
        
            </View> 

            <View style={styles.a}>
            <Text style={{fontWeight:'bold',marginRight:30}}>07:40</Text>
           
            <Text style={{marginRight:10,marginLeft:40}}>4hr 10 min</Text>
            <Text style={{fontWeight:'bold' ,marginLeft:68}}>14:20</Text>
            {/* <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 230,000 </Text> */}
            </View> 
       





            </View>
          <View style={styles.separator} />




        
         
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
    backgroundColor: '#e3e3e1',
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
        marginBottom:16,

      },
      b:{
        flexDirection:'row',
        marginLeft:40,
        marginBottom:30
      },
      content:{
        backgroundColor:'white',
margin:14,
      }
     
});
