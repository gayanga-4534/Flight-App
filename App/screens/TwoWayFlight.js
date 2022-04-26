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
            navigation.push("RHome");
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
      <TouchableOpacity onPress={() => navigation.push('FlightPath')} >
      <Image
        source={{
          uri:
       "data:image/jpeg;base64,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",
          }}
        fadeDuration={0}
        style={{ width: 50, height: 50 ,margin:10}}
      />
<View style={styles.c}>
</View>
    <View style={styles.a}>
            <Text>09.55</Text>
            <Text style={{marginLeft:30,marginRight:30}}>4 hr 25 min</Text>
            <Text>12.50</Text>
            <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 330,000 </Text>
            </View> 
            
            <View style={{borderWidth:0.5,
    borderColor:'#013810',
          marginTop:10,
          marginBottom:10,
          width: sw("55%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:40,}} />

            <View style={styles.b}>
            
            <Text>CMB</Text>
            <Text style={{marginLeft:30,marginRight:30}}>(1 Stop)</Text>
            <Text>DXB</Text>
            </View>


            <View style={styles.a}>
            <Text>19.55</Text>
            <Text style={{marginLeft:30,marginRight:30}}>4 hr 25 min</Text>
            <Text>02.50</Text>
            {/* <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 130,000 </Text> */}
            </View> 
            
            <View style={{borderWidth:0.5,
    borderColor:'#013810',
          marginTop:10,
          marginBottom:10,
          width: sw("55%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:40,}} />

            <View style={styles.b}>
            
            <Text>DXB</Text>
            <Text style={{marginLeft:30,marginRight:30}}>(1 Stop)</Text>
            <Text>CMB</Text>
            </View>


            </TouchableOpacity>

            
          <View style={styles.separator} />







          <Image
        source={{
          uri:
       "data:image/png;base64,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",
          }}
        fadeDuration={0}
        style={{ width: 50, height: 50 ,margin:10}}
      />
<View style={styles.c}>
</View>
    <View style={styles.a}>
            <Text>09.55</Text>
            <Text style={{marginLeft:30,marginRight:30}}>4 hr 25 min</Text>
            <Text>12.50</Text>
            <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 310,000 </Text>
            </View> 
            
            <View style={{ borderWidth:0.5,
    borderColor:'#013810',
          marginTop:10,
          marginBottom:10,
          width: sw("55%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:40,}} />

            <View style={styles.b}>
            
            <Text>CMB</Text>
            <Text style={{marginLeft:30,marginRight:30}}>(Non Stop)</Text>
            <Text>DXB</Text>
            </View>


            <View style={styles.a}>
            <Text>19.55</Text>
            <Text style={{marginLeft:30,marginRight:30}}>4 hr 25 min</Text>
            <Text>02.50</Text>
            {/* <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 130,000 </Text> */}
            </View> 
            
            <View style={{borderWidth:0.5,
    borderColor:'#013810',
          marginTop:10,
          marginBottom:10,
          width: sw("55%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:40,}} />

            <View style={styles.b}>
            
            <Text>DXB</Text>
            <Text style={{marginLeft:30,marginRight:30}}>(1 Stop)</Text>
            <Text>CMB</Text>
            </View>


            
          <View style={styles.separator} />




          <Image
        source={{
          uri:
       "data:image/png;base64,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",
          }}
        fadeDuration={0}
        style={{ width: 50, height: 50 ,margin:10}}
      />
<View style={styles.c}>
</View>
    <View style={styles.a}>
            <Text>09.55</Text>
            <Text style={{marginLeft:20,marginRight:20}}>4 hr 25 min</Text>
            <Text>12.50</Text>
            <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 110,000 </Text>
            </View> 
            
            <View style={{borderWidth:0.5,
    borderColor:'#013810',
          marginTop:10,
          marginBottom:10,
          width: sw("55%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:40,}} />

            <View style={styles.b}>
            
            <Text>CMB</Text>
            <Text style={{marginLeft:20,marginRight:20}}>(Non Stop)</Text>
            <Text>DXB</Text>
            </View>
            

            <View style={styles.a}>
            <Text>19.55</Text>
            <Text style={{marginLeft:30,marginRight:30}}>4 hr 25 min</Text>
            <Text>02.50</Text>
            {/* <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 130,000 </Text> */}
            </View> 
            
            <View style={{borderWidth:0.5,
    borderColor:'#013810',
          marginTop:10,
          marginBottom:10,
          width: sw("55%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:40,}} />

            <View style={styles.b}>
            
            <Text>DXB</Text>
            <Text style={{marginLeft:30,marginRight:30}}>(1 Stop)</Text>
            <Text>CMB</Text>
            </View>



            
          <View style={styles.separator} />




          <Image
        source={{
          uri:
       "data:image/jpeg;base64,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",
          }}
        fadeDuration={0}
        style={{ width: 50, height: 50 ,margin:10}}
      />
<View style={styles.c}>
</View>
    <View style={styles.a}>
            <Text>09.55</Text>
            <Text style={{marginLeft:20,marginRight:20}}>4 hr 25 min</Text>
            <Text>12.50</Text>
            <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 210,000 </Text>
            </View> 
            
            <View style={{borderWidth:0.5,
    borderColor:'#013810',
          marginTop:10,
          marginBottom:10,
          width: sw("55%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:40,}} />

            <View style={styles.b}>
            
            <Text>CMB</Text>
            <Text style={{marginLeft:20,marginRight:20}}>(Non Stop)</Text>
            <Text>DXB</Text>
            </View>
            


            <View style={styles.a}>
            <Text>19.55</Text>
            <Text style={{marginLeft:30,marginRight:30}}>4 hr 25 min</Text>
            <Text>02.50</Text>
            {/* <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 130,000 </Text> */}
            </View> 
            
            <View style={{borderWidth:0.5,
    borderColor:'#013810',
          marginTop:10,
          marginBottom:10,
          width: sw("55%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:40,}} />

            <View style={styles.b}>
            
            <Text>DXB</Text>
            <Text style={{marginLeft:30,marginRight:30}}>(1 Stop)</Text>
            <Text>CMB</Text>
            </View>




          <View style={styles.separator} />


          <Image
        source={{
          uri:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbXesExPtUR3pZgwCRhZ4SLjUWzGSxg9rySA&usqp=CAU",
          }}
        fadeDuration={0}
        style={{ width: 50, height: 50 ,margin:10}}
      />
<View style={styles.c}>
</View>
    <View style={styles.a}>
            <Text>09.55</Text>
            <Text style={{marginLeft:20,marginRight:20}}>4 hr 25 min</Text>
            <Text>12.50</Text>
            <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 220,000 </Text>
            </View> 
            
            <View style={{borderWidth:0.5,
    borderColor:'#013810',
          marginTop:10,
          marginBottom:10,
          width: sw("55%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:40,}} />

            <View style={styles.b}>
            
            <Text>CMB</Text>
            <Text style={{marginLeft:20,marginRight:20}}>(Non Stop)</Text>
            <Text>DXB</Text>
            </View>
            

            <View style={styles.a}>
            <Text>19.55</Text>
            <Text style={{marginLeft:30,marginRight:30}}>4 hr 25 min</Text>
            <Text>02.50</Text>
            {/* <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 130,000 </Text> */}
            </View> 
            
            <View style={{borderWidth:0.5,
    borderColor:'#013810',
          marginTop:10,
          marginBottom:10,
          width: sw("55%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:40,}} />

            <View style={styles.b}>
            
            <Text>DXB</Text>
            <Text style={{marginLeft:30,marginRight:30}}>(1 Stop)</Text>
            <Text>CMB</Text>
            </View>





          <View style={styles.separator} />

          <Image
        source={{
          uri:
       "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaIAAAB4CAMAAACHBwagAAABIFBMVEUBNGv///+BACfHACkAKmYAMmoAGV93haAAH2Hm6OwAMGkAI2MAKGUAHWAALmgALGfDzNeBkqwwS3nN1d9ygJz1+PqbACo/XYYPPnLIACeDACHJACBLPmsAOnAAFl41OGenssPx8vXW3eW2vsxLZoxcb5AAEl3d4+mGACBnd5UdRHawu8qap7syUX2Il694iqWOID22LkmhACBMLFWJSmjPAB8hNmk2RHNvHD2kI0afaoFHYIe+ACqzPlZIM15gOGSVKk5/DS0AAFRmI0elP1tUOWi9IjpYR3FbJk2EMVh4FTO4IkB1MFlzGTliN1y0NU2UPV1vKEhqNF+LbYLSrbBuXXndbHSLABfi0dO6io93QWajhpaSNlhfSWlULFRNUHkMqVuWAAAMA0lEQVR4nO2de3ubOBaH8UUOBozv9a1g41sSX7ftJk0n2TRNp5dJLzOddne6s53u9/8WizASAo4wnt0YnrV+/8zTGAnBi6Sjc440kiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkdFgykm6AULSU/l8Eo1QLtR49fpJ0I4Qi9dezB9nzpBuRkFDSDYgj9DSXe5C92LmcWvBLVrWysv1uBZ5KnLeVJ79H1KpxayWN45XMl/MbpZrVs56NqLvrUKfOi36NBovTWkHVI0uhmlXkqQ2+JW3l/jzk16wOuJW6qsOMkHxsuVLSy0j/oYd7UXbXoU6uZABZg0sz6oNUalCpjWYwooX7c7PMb8uIX+tGxQJYsDyhVyy0nR5/j0LLq06ngxHtONTBiGwdHxX4L/NPIKreI6KC9xBDc7fn36P+1sltEJ1c79TVuYjs9zHmzSspQ4TazCWt7RNpMnp+lnMRZbM7FYxAZI8aJodRuhCpc+aSOdekSFRodtWhiLqfdlnARiLK1GWYUboQmU32mpQa4De2rUB70cn1DiUpomZ9iHXsfydD+Jv0EA3rQXEsuhiItAVTzZDc4Zj540iFiq18TV6l0WBAeJjzEGVf7NCNKKLKbQmrYC4bdeaBB+A6xkM0npb84owzcRBJmleNuSR3OGXuABGSTP9nVeTOoAmqjYc5BlH3ZfyyHiLCQsmXDGZwn0Cv1EM0iV5AUcVCxN6hRe7Q2FJAufR3/Mw4ZpP2qR/xMMcgynYfxi4bRiRh38GYDu8WZDLsARHtRdsQkRnMqgNPkg6hVxtCDKIdhjoQkf1G6RvKrPPhUntARA3pLYgUw71uQfsdbLAkqNnrTghR923c0hxEknpKHrgILAZThIgaC8tpkcBKmcGAvrmdiEWUPenHLM5DJJnUpFqGF4PpQYQKLph6gcKyQKsiMaE3hJAPUfYu5lDHRVSm3QiwYhlEqu4T7z73hajcIJflkUSKnMa7x55kkGEugCjuUMdFJGnkgSthO9pDtJqMfeK5X+4LUcE1EiyZeZZ6qgyGn3owouzJ01iTJh9RiYx0Vngy4nsXeGv7e0JEGzKwBzd9TMrUUuSo69NhLogoe9eOUwEfkef52gUR2i8i6jNyJsypxQBLiYx3HS6i7vc4NUQMdCTCkwm/Iz4inhPzfhChsrt+28QgVBqUSo0vFb0/y3ERZbtxonsRiKjrSw/1jLQgyq/di46cxRvSM75/Jy/0lOlDAKIPMeqI04vCwea0ICq5FnezsGliiTzNcBrrLvcu41Ekomz343bLO2IuoojCEQk+It4kcC+IdOKeW0w3ySUyNRhSEtl738tFIoqTyMBH5IUposyFReOIVYO3MLoXRLSJq6qrI+JbTEdk79zXh2xEuSCi7sXWbsRFhGTiTwFWGezSNc+K+zrvA5G3VgWUhlQg9LO/E+VyvcfBXnSyNWeLi0iZkYcFLNh0OIC82RJQCiJ76IezQCfqPPv4odvdcajjIpIH5GEBd0o6ENFlECTI+7tnnV8FAP3Yt3t+/8NJYKjbUg0PkfeKIAsgFYjyjUyUwFjkPmU8o54f+7+9zo3r7zH6FydsT9qWyMBBhG5pdByaeFOByGQD+EA3SnikU54zw1wv9+0p4xsLQIq2GGBESt5LxoH8XWlAFJWF5AjOc9mXlMlVxwP0y9OAZ+z8EzMnfYqsCUKkyLr3gYLWaxoQ0ZZXZdamVGnwdZGso+6GBMN7Vz8Zbg9CzC6985cUUvRQ5yEynXhPWVNLM2op2FKhb5FBpCl+hb1FjjxEmu4vALdrKyJEgyWB77NAPfSJOoFeuVlZvatfDdJA4/mzB2/P6YB3/pZAehFl1VFEw5YT7zldzX05T3Av8RCtWwFdLrfk0QULcJIptyGiLsRRifNDppocI5J82nv9K+035+/f9XoPut2LhwykrAMpMmcrOhs1cwTPuVHzwBCMp1FEIcHhi62ISEA8lJOFFOJhqMNJ+nvRDSbUe/c7BdT/dtXrbLwLJ3cfvV7z9gWG1HUTGaCXEY1ozBnOoxABQVopApEFE9iGiIbvwoabl3ecXGTvVc8G9Oi5O8Qh4/mjTsfL6ba7zkuaXGI8wZBeONE9vQ+MeFGI6jOe3RqJaLdeZMH2xjZE1KcdTvfxgq/w17IHGa97vWfXpAed//K65wBiUx27H+jvxpO77gke6vTPX778PfRZ8RFZqwL3I0wcEaLuKcC0phnEzYSWRujm7B+bXqIg4/qmA2cAdV98d/uMfdHdb3YB9PWfX76ERwUOouGpqvHXFf9LRH9qoKOREiiTxLtXMpE99MfP/U26pTL5/d1ZRGC8+6lPutL1hSHl//X16+fQJyuHl+jN4ehIlyOXL146b1hw+k1g+wJzN7gXedu6jqCWkIA46OZBZVL2OJmlEenZ/W+53paQ3sndEzre2Y/1x5vw69AnR3611GlJ3rrx2jjiimOmtziXN+DRFEnkAnDOn63dX8tQS8v0obY8xj0JYdPMXgT1AuEiKKRnmw5vPRsBDKHoeb9iGkF5rjjuBoVzOa+3IrJNH24QKQ1/S/ShEvMBtd+/DgGCEeGudHEtzp3Zp+wO9PDmygEUggQiwpPS3fdDPdUkCbVtE+Gsx9HjLke/2aZD0i0/FKF/f37I05s3D/sRipWcKvTfCykoQkm3TkhISEhISEhI6NCElLD/ByHF968Ytir0u/9vvn+FfoJvoug6JxHjgKTMWpPg31C7zZybgGYGFiqVIkIjkmGE9m8iXMr7V61t0DgMktqG/0JXM7aEVlhOJhPJTD7vOEmhQjOUSoWMTKboBUtVEuQ+Xki82I86CCc1I7WZsbzUBVxNldSKT6TxMk/oll5feAmVFtbmvinIDU9QzrkBTb//He92YBCx55+NOS/LQRTgh1TfNmqH9KWLEe9KqtK6WETeQS0F7yCvBHNUktfm9A3/ZwogWjQapysc6+YcHMPtRQFE5GjbMCI3+LSm+WW4yuJpqVBbWYnlP6RBOHRbwUfe+SbvMKJTuVzWbivcfeBxEWXqm+2WemigU7RAaAofQrjUbGtGK8FpgQcinMQzqwQS4SBE+PXjbAk4Qy8uIhvFwqkgjMgIYECyt1v2kAlhGMPbcSAfhYcI5zJwpoWYiGS7Z5zifrgdkWTafU5J4bF2exZO4mnk5WP/HMNDpE24aXExERk4H3+chxDpWiACX6rjA5bNpHcoJa2SlWmaCCdUsXMMgGgia6pZs+CT8aTYiHQVJyEtFQBRdY3FDLi6k+FUmZgpOb4hGeEjsOw1EdKbmSaz+wJANFitBjiVrMIxf2Mi0pA5xxtAAEQbsVNdfuksi4rraToOB0hE2OLW7AFmOvB1D/66aMBboMRFZNdmj6ormYfIYsdRpTBxclqPZwc72ukt/P88qFara/vTLnpnjQCIhk42Zo17cHB8RHrbNhku1RAieYrl/wRQebp0vo80ncq1V5V8x6Z7bxhAdHmLJ/oJN7E0PiLH6Gi2W1stuo2UAr7xoa5dnXzg5kYZdicQZC7oKj6N6ZJnBMMOIBCRVLLNyON1TET2hKnYNz5QDxA+1aLqruk1e2aekdEERCThif6Yd1TjLogkc7PNYBsi8gd8JO6B+lFtLNSOU7HdTajAiBy35ijKoouLCOlWHESauvlmbpvQEUiHIHyqBV0N4Y3FdCcQB5FiNJlwgl8Y0eTWnE7NKb2Ai0gqX4YRaXZRu7hJpzvTWkimLMtTu8+NDnMuKhdZn4I89/zdHESbN9sCV5IYUabpdA66cYaPSFIbIUSW1XSqmKteIzLF0WiEK032+IakpPs9c9hFShYlOKRneRFWisiZ6DM16HWp3hkEdFDC8SJmhMIb3WhcqjBnt1+WmA3yxHhDNYsulmqH6arLryt1du+WPB80SOYAqlQGGnNlfeSGA8xBfQ1GBsqNCtGIlszPK8z/SQdXQ/e5IGlU8TZBaQtaukJDV2g6XlTq9fq8MT1MQvYrk2Xfo6uqt1FIllXfldQ7pPJ2ppVlIqakGqiGmVGQyt5do6VlxnbTNblUktWDdS0ICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJ/f/rPywrMEDo5xpAAAAAAElFTkSuQmCC",
          }}
        fadeDuration={0}
        style={{ width: 50, height: 50 ,margin:10}}
      />
<View style={styles.c}>
</View>
    <View style={styles.a}>
            <Text>09.55</Text>
            <Text style={{marginLeft:20,marginRight:20}}>4 hr 25 min</Text>
            <Text>12.50</Text>
            <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 230,000 </Text>
            </View> 
            
            <View style={{borderWidth:0.5,
    borderColor:'#013810',
          marginTop:10,
          marginBottom:10,
          width: sw("55%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:40,}} />

            <View style={styles.b}>
            
            <Text>CMB</Text>
            <Text style={{marginLeft:20,marginRight:20}}>(Non Stop)</Text>
            <Text>DXB</Text>
            </View>



            <View style={styles.a}>
            <Text>19.55</Text>
            <Text style={{marginLeft:30,marginRight:30}}>4 hr 25 min</Text>
            <Text>02.50</Text>
            {/* <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 130,000 </Text> */}
            </View> 
            
            <View style={{borderWidth:0.5,
    borderColor:'#013810',
          marginTop:10,
          marginBottom:10,
          width: sw("55%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:40,}} />

            <View style={styles.b}>
            
            <Text>DXB</Text>
            <Text style={{marginLeft:30,marginRight:30}}>(1 Stop)</Text>
            <Text>CMB</Text>
            </View>




            
          <View style={styles.separator} />


          <Image
        source={{
          uri:
         
       "data:image/jpeg;base64,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",
          }}
        fadeDuration={0}
        style={{ width: 50, height: 50 ,margin:10}}
      />
<View style={styles.c}>
</View>
    <View style={styles.a}>
            <Text>09.55</Text>
            <Text style={{marginLeft:20,marginRight:20}}>4 hr 25 min</Text>
            <Text>12.50</Text>
            <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 410,000 </Text>
            </View> 
            
            <View style={{borderWidth:0.5,
    borderColor:'#013810',
          marginTop:10,
          marginBottom:10,
          width: sw("55%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:40,}} />

            <View style={styles.b}>
            
            <Text>CMB</Text>
            <Text style={{marginLeft:20,marginRight:20}}>(Non Stop)</Text>
            <Text>DXB</Text>
            </View>


            <View style={styles.a}>
            <Text>19.55</Text>
            <Text style={{marginLeft:30,marginRight:30}}>4 hr 25 min</Text>
            <Text>02.50</Text>
            {/* <Text style={{marginLeft:30,fontWeight:'bold',fontSize:16,color:'green'}}>LKR 130,000 </Text> */}
            </View> 
            
            <View style={{borderWidth:0.5,
    borderColor:'#013810',
          marginTop:10,
          marginBottom:10,
          width: sw("55%"),
        height: StyleSheet.hairlineWidth,
        marginLeft:40,}} />

            <View style={styles.b}>
            
            <Text>DXB</Text>
            <Text style={{marginLeft:30,marginRight:30}}>(1 Stop)</Text>
            <Text>CMB</Text>
            </View>


            
          <View style={styles.separator} />
         
        
            
            
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
