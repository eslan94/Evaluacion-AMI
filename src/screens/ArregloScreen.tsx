import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

const numeros=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export const ArregloScreen = () => {
    const [numerosPares, setNumerosPares] = useState([]);
    const [numerosImpares, setNumerosImpares] = useState([]);

    

  return (
    <View style={styles.container}>
            <Text style={styles.title}>BIENVENIDO</Text>
            <Text style={styles.subTitle}>Vector: </Text>
            
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center'
    },

    title:{
        color: 'blue',
        fontSize: 30,

    },

    subTitle:{
        color: 'black',
    },
})
