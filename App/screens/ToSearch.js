import React, { useState, useEffect,useContext } from "react";

import {
  Button,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native";

import Autocomplete from "react-native-autocomplete-input";
import {ConversionContext} from "../util/ConversionContext";
import AirportList from "../components/AirportList";

const App = ({navigation}) => {


// const {setAirPort} = useContext(ConversionContext);

const {setToAirPort} = useContext(ConversionContext);



  // constructor(props)
  // {
  //   super(props);
  //   this.state={username:''};
  // }

 
  // global.selectedAirport.title = selectedAirport.title;

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
   
    <SafeAreaView style={{ flex: 1 }}>
     <ImageBackground source={{ uri: "https://images.pexels.com/photos/1928064/pexels-photo-1928064.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" }} style={styles.backgroundImage}>
      <View style={styles.container}>
    
      {/* "https://images.pexels.com/photos/1928064/pexels-photo-1928064.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" */}
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
                setToAirPort(item.title);
                setFilteredAirport([]);
                navigation.pop();
              }}
            >
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />






{/* <Text style={{fontWeight:'bold',}}>Travellers</Text>
      <TextInput  style={styles.input}
        placeholder={selectedAirport.title}>

      </TextInput> */}





        {/* <View style={styles.descriptionContainer}>
          {Autocomplete.length > 0 ? (
            <>
              <Text style={styles.infoText}>Selected Data</Text>
              <Text style={styles.infoText}>
                {JSON.stringify(selectedAirport)}
              </Text>
            </>
          ) : (
            <Text style={styles.infoText}>Enter Airport Name</Text>
          )}
        </View> */}
       
      </View>
      
      {/* <Text style={{fontSize:20,borderWidth:2,width:120,marginLeft:20,paddingLeft:20,color:'white',borderColor:'white',}}>gayanga</Text>
       */}






      {/* <View>
<TextInput
placeholder='u name'
onChangeText={username=>this.setState({username})}
/>
<Button
title='login'
onPress={()=>this.props.navigation.navigate('Home',{P1:this.state.username})}
/>
</View> */}



      
      </ImageBackground>
    </SafeAreaView>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
    // flex: 1,
    height:200,
    padding: 16,
    marginTop: 10,
  },
  autocompleteContainer: {
    backgroundColor: "#ffffff",
    borderWidth: 0,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "center",
  },
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
  },
  infoText: {
    textAlign: "center",
    fontSize: 16,
  },




  backgroundImage:{
    //   borderBottomRightRadius:6 ,
    //   width:500,
    //   height:730,
      flex:1,
  }
});
export default App;
