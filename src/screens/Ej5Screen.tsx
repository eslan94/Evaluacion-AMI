import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Ej5Screen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxPurple}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxBlue}></View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#273746',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    boxPurple:{
        width:100,
        height: '95%',
        backgroundColor: '#4A235A',
        borderColor: 'white',
        borderWidth:7,
        top:10,
    },
    boxOrange:{
      width:100,
      height: '95%',
      backgroundColor: '#E67E22',
      borderColor: 'white',
      borderWidth:7,
      top:10
    },
    boxBlue:{
      width:100,
      height: '95%',
      backgroundColor: '#48C9B0',
      borderColor: 'white',
      borderWidth:7,
      top:10
    }
})