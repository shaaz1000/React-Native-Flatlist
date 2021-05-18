import React,{useState} from 'react';
import { Text,FlatList,View,SafeAreaView,StatusBar,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';

const {width, height} = Dimensions.get("window")
const App = () => {
  
  const [cardId,setCardId] = useState(0)
  const data = [
    {
    id:1,
    Name : "Shaaz Khan",
    Age : "22",
    Sex : "M",
    Address : [
      {
      id : 1,
      bldngName : "Sunrise",
      location : "Thane",
      Pincode : 400017
      },
      {
      id : 2,
      bldngName : "Sunrise",
      location : "Thane",
      Pincode : 400018
      },
    ]
  },
    {
    id:2,
    Name : "Radha",
    Age : "22",
    Sex : "F",
    Address : [
      {
      id : 1,
      bldngName : "Sunrise",
      location : "Thane",
      Pincode : 400019
      },
      {
      id : 2,
      bldngName : "Sunrise",
      location : "Thane",
      Pincode : 400020
      },
    ]
  },
    {
    id:3,
    Name : "Angad",
    Age : "22",
    Sex : "M",
    Address : [
      {
      id : 1,
      bldngName : "Sunrise",
      location : "Thane",
      Pincode : 400021
      },
      {
      id : 2,
      bldngName : "Sunrise",
      location : "Thane",
      Pincode : 400022
      },
    ]
  },
    {
    id:4,
    Name : "Negi",
    Age : "22",
    Sex : "M",
    Address : [
      {
      id : 1,
      bldngName : "Sunrise",
      location : "Thane",
      Pincode : 400023
      }
    ]
  },
    {
    id:5,
    Name : "Shaaz Khan",
    Age : "22",
    Sex : "M",
    Address : [
      {
      id : 1,
      bldngName : "Sunrise",
      location : "Thane",
      Pincode : 400024
      }
    ]
  },
  ]

  const renderItem = (item) => {
   
    
    return(
      <>
      <TouchableOpacity
        onPress={()=>{
          setCardId(item.id)
        }}
      >  
      <View style={[styles.firstContainer,{
        backgroundColor:item.id === cardId ? "#e4efe7" : "#faf1e6"
      }]}>
        <Text style={[styles.textStyle,{color:item.id === cardId ? "#ff7b54" : "black"}]}>Customer Id {item.id}</Text>
        <Text style={[styles.textStyle,{color:item.id === cardId ? "#ff7b54" : "black"}]}>Name {item.Name}</Text>
        <Text style={[styles.textStyle,{color:item.id === cardId ? "#ff7b54" : "black"}]}>Age {item.Age}</Text>
        <Text style={[styles.textStyle,{color:item.id === cardId ? "#ff7b54" : "black"}]}>Sex {item.Sex}</Text>
      </View>
      </TouchableOpacity>
      {
        item.id === cardId ?
        item.Address.map(i=>{
          return (
            <View style={{backgroundColor:"#ffd56b",margin:10,borderRadius:5,elevation:5}}>
              <Text style={{color:"black",padding:10,fontWeight:"bold"}}>BuildingName {i.bldngName}</Text>
              <Text style={{color:"black",paddingLeft:10,paddingLeft:10,fontWeight:"bold"}}>Location {i.location}</Text>
              <Text style={{color:"black",paddingLeft:10,fontWeight:"bold"}}>Pincode{i.Pincode}</Text>
            </View>
          )
        })
        :
        null
      }
      </>
    )
  }
  return(
    <>
    <StatusBar backgroundColor="purple" barStyle="light-content"/>
    <SafeAreaView style={{backgroundColor:"white",flex:1}}>
      <FlatList
        data={data}
       
        showsVerticalScrollIndicator={false}
        keyExtractor={({id})=>id}
        renderItem={({item})=>{
          return renderItem(item)
        }}
      />
    </SafeAreaView>
    </>
  )
}


const styles = StyleSheet.create({
  firstContainer:{
    margin:10,
    borderRadius:10,
    elevation:5,
    padding:10,
    
  },
  textStyle:{
    color:"orange",
    padding:10,
    fontSize:15,
    fontWeight:"bold"
  }
})
export default App;