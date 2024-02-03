
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ArregloScreen } from './src/screens/ArregloScreen'
import { Ej1Screen } from './src/screens/Ej1Screen'
import { Ej2Screen } from './src/screens/Ej2Screen'
import { Ej3Screen } from './src/screens/Ej3Screen'

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/*<ArregloScreen/>*/}
      {/*<Ej1Screen/>*/}
      {/*<Ej2Screen/>*/}
      <Ej3Screen/>
    </SafeAreaView>
  )
}
