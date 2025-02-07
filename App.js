import { StyleSheet, Text, View } from 'react-native'
import React from 'react'




const Ligma = () => {
  return (
    <View style =  {mystyles.container}>
      <View style = {mystyles.box1}>
      </View>
      
      <View style = {mystyles.box2}>
      </View>

      <View style = {mystyles.box3}>
      </View>
    </View>
  )
}



const mystyles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  
  box1:{
    backgroundColor:'blue',
    width: 50,
    height: 50
  },
  box2:{
    backgroundColor:'red',
    width:80,
    height:80
  },


  })




const JohnXina = () => {
  return (
    <View style={textStyle.container}>
      <Text>Jai Jinendra</Text>
    </View>

  )
}
const textStyle = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});



 



  





export default Ligma

const styles = StyleSheet.create({})