import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

const numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];

export const ArregloScreen = () => {

    const [pares, setPares] = useState<number[]>([]);
    const [impares, setImpares] = useState<number[]>([]);

    const clasificarNumeros = ()=>{
        
        const paresTemporal: number[] = [];
        const imparesTemporal:  number[] = [];

        numeros.forEach(numero => {
            if(numero%2===0){
                paresTemporal.push(numero);
            }else{
                imparesTemporal.push(numero);
            }
        });

        setPares(paresTemporal);
        setImpares(imparesTemporal);
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>BIENVENIDO</Text>
        <Text style={styles.subTitle}>Vector: {numeros.join(', ')}</Text>
        <Button title="Clasificar" onPress={clasificarNumeros}></Button>
        <Text style={styles.subTitle}>Pares: {pares.join(', ')}   Impares: {impares.join(', ')}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color: 'blue',
        fontSize: 30,

    },
    subTitle:{
        color: 'black',
        fontSize: 15
    },
})
