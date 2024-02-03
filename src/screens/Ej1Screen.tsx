import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Ej1Screen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxPurple}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#273746',
        alignItems:'flex-end'
    },

    boxPurple:{
        flex:1,
        width:100,
        backgroundColor: '#4A235A',
        borderColor: 'white',
        borderWidth:7,
    },

    boxOrange:{
      flex:7,
      width:100,
      backgroundColor: '#E67E22',
      borderColor: 'white',
      borderWidth:7,
    },

    boxGreen:{
      flex:1,
      width:100,
      backgroundColor: '#48C9B0',
      borderColor: 'white',
      borderWidth:7,
      
    },

    title:{
        fontSize:20
    },
})