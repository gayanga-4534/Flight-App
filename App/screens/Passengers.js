import React, { useState, useEffect,useContext } from "react";

import {
  View,
  Picker, 
  Pressable, Alert, 
  Image,
  Dimensions,StatusBar,
  TouchableOpacity,
  Button,
  SafeAreaView,  
  Text,
  TextInput,
  StyleSheet,
  Modal,
  ImageBackground,
} from "react-native";

import {ConversionContext} from '../util/ConversionContext';


import {widthPercentageToDP as sw,heightPercentageToDP as sh,} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import { Fontisto, AntDesign} from '@expo/vector-icons';
import Home3 from './Home3'
import { Ionicons } from '@expo/vector-icons';
const screen = Dimensions.get('window');


export default ({navigation, route = {} }) => {
  const params = route.params || {};
  
    
  const {adults,setAdult,childrens,setChildrens,x,setX, } = useContext(ConversionContext);



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
        
          {/* <View style={{height:100,backgroundColor:'white'}}> */}
          <TouchableOpacity 
                  
                  onPress={() => navigation.push('Home3')}
               >
                  <AntDesign name="leftcircle" size={30} color="white" style={{marginTop:45,marginLeft:20}} />
               </TouchableOpacity>

          
          {/* </View> */}
        </ImageBackground>
 
       
        <Modal
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            navigation.push("Home3");
            // setDefaultModalVisible(false);
          }}
        //   visible={DefaultmodalVisible}
        >
     
          <ScrollView>
        
            <View style={styles.contentContener}>
            
         
 




<View style={styles.mainScreen}>
       
        
       <View style={styles.centeredView}>

           <View style={styles.modelScreen}>
               <View style={styles.row}>




               
                   {/* <View style={{ flex: 1 }}> */}
                   <Text style={styles.font}>Adults</Text>

                   
                   <TouchableOpacity style={styles.minusIcon} onPress={() =>
                       setAdult(parseInt(adults) - 1)}>
                       <AntDesign name="minus" style={{ fontSize: 25,color:'white' }} />
                   </TouchableOpacity>
                   <Text style={styles.resultValue}>{adults}</Text>
                   <TouchableOpacity style={styles.icon} onPress={() =>
                       setAdult(parseInt(adults) + 1)}>
                       <AntDesign name="plus" style={{ fontSize: 25,color:'white' }} />
                   </TouchableOpacity>

                   {/* </View> */}
               </View>
               <View style={styles.row}>
               {/* <View style={{ flex: 1 }}> */}
               <Text style={styles.font}>Children</Text>
               <TouchableOpacity style={styles.minusIcon} onPress={() =>
                       setChildrens(parseInt(childrens) - 1)}>
                   <AntDesign name="minus" style={{ fontSize: 25,color:'white' }} />
               </TouchableOpacity>
               <Text style={styles.resultValue}>{childrens}</Text>
               <TouchableOpacity style={styles.icon} onPress={() =>
                       setChildrens(parseInt(childrens) + 1)}>
                   <AntDesign name="plus" style={{ fontSize: 25,color:'white' }} />
               </TouchableOpacity>
               {/* </View> */}
           </View>
           <View style={styles.row}>
           {/* <View style={{ flex: 1 }}> */}
           <Text style={styles.font}>Infants</Text>
           <TouchableOpacity style={styles.minusIcon} onPress={() =>
                       setX(parseInt(x) - 1)}>
               <AntDesign name="minus" style={{ fontSize: 25,color:'white', }} />
           </TouchableOpacity>
           <Text style={styles.resultValue}>{x}</Text>
           <TouchableOpacity style={styles.icon} onPress={() =>
                       setX(parseInt(x) + 1)}>
               <AntDesign name="plus" style={{ fontSize: 25,color:'white' }} />
           </TouchableOpacity>
           {/* </View> */}
       </View>





               <TouchableOpacity style={styles.button}
                   // style={[styles.button, styles.buttonClose]}
                   onPress={() =>
                   navigation.pop()}
               >
                   <Text style={{ textAlign: 'center',color:'white' }}>Done</Text>
               </TouchableOpacity>





               <View style={{height:200}}>  


</View>
       







           </View>
       </View>
   </View>






            

                
         
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









      mainScreen: {
        alignItems: 'center',
        flex: 3,
        width: screen.width,
        padding: 10,
        // backgroundColor: 'blue',
        opacity: 10

    },
    centeredView: {
        // padding: 10,
        width: screen.width - 20,
        flex: 3,
        // marginTop: screen.height / 2 - 80,
        marginTop: 0,
        backgroundColor: 'white',
        borderWidth: 0,
        // backgroundColor: colors.lightBlue,
        borderRadius: 15
    },
    modelScreen: {
        // padding: 5,
        textAlign: "center",

        // height: screen.height / 2,

    },
    row: {
        height: 40,
        marginTop: 20,
        padding: 10,
        // paddingRight: 20,
        backgroundColor: '#F6F3F9',
        flexDirection: 'row',
        alignItems: "center",
        // justifyContent: 'flex-start',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        shadowRadius: 4.65,

        elevation: 8,
    },
    icon: {
        backgroundColor:"#7F045D",
        padding: 2,
        borderRadius: 5,
        borderWidth: 2,
        // borderColor: colors.yellowLight,
        position: 'absolute',
        right: 10
    },
    minusIcon: {
        
        backgroundColor:'#0B4664',
        padding: 2,
        borderRadius: 5,
        borderWidth: 2,
        // borderColor: colors.yellowLight,
        position: 'absolute',
        right: 75,
       
    },
    font: {
        fontSize: 15,

    },
    resultValue: {
        position: 'absolute',
        right: 55,
        fontSize: 15
    },
    button: {



        height: 65,
        // marginTop: 20,
        padding: 10,
        // paddingRight: 20,
        backgroundColor: '#108A77',
        flexDirection: 'row',
        alignItems: "center",
        // justifyContent: 'flex-start',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        shadowRadius: 4.65,

        elevation: 8,


        // alignItems: 'baseline',
        marginTop: sh("16"),
        // backgroundColor: colors.lightBlue,
        height: 50,
        // alignContent: 'space-between',
        justifyContent: 'center',
        borderRadius: 6
    },
    closeArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerr: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center",

      
        // height: 70,
        marginTop: 40,
        padding: 100,
        backgroundColor: '#E6F2F6',
        // flexDirection: 'row',
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0,
        // shadowRadius: 4.65,
        elevation:8,
      },

      class: {
        //   color:'bold',
        // fontFamily: 'Montserrat',
        // fontSize:40,
       marginBottom:30,
       marginRight:20
      },
      backgroundImage:{
        //   borderBottomRightRadius:6 ,
          width:500,
          height:130
      }
     
});
