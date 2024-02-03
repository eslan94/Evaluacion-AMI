import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Ej4Screen = () => {
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
        justifyContent:'space-between',
    },
    boxPurple:{
        width: 100,
        height: 100,
        backgroundColor: '#4A235A',
        borderColor: 'white',
        borderWidth:7,
        alignSelf: 'flex-start',
        top: 10
    },
    boxOrange:{
      width:100,
      height: 100,
      backgroundColor: '#E67E22',
      borderColor: 'white',
      borderWidth:7,
      alignSelf: 'center'
    },
    boxBlue:{
      height:100,
      width:100,
      backgroundColor: '#48C9B0',
      borderColor: 'white',
      borderWidth:7,
      alignSelf:'flex-end',
      bottom:20
    }
})