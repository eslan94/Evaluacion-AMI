import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Ej6Screen = () => {
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
    },
    boxPurple:{
        flex:1,
        backgroundColor: '#4A235A',
        borderColor: 'white',
        borderWidth:7,
    },
    boxOrange:{
      flex:1,
      backgroundColor: '#E67E22',
      borderColor: 'white',
      borderWidth:7,
    },
    boxBlue:{
      flex:2,
      backgroundColor: '#48C9B0',
      borderColor: 'white',
      borderWidth:7,
      bottom:20
    }
})