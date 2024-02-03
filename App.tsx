
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ArregloScreen } from './src/screens/ArregloScreen'
import { Ej1Screen } from './src/screens/Ej1Screen'
import { Ej2Screen } from './src/screens/Ej2Screen'
import { Ej3Screen } from './src/screens/Ej3Screen'
import { Ej4Screen } from './src/screens/Ej4Screen'
import { Ej5Screen } from './src/screens/Ej5Screen'
import { Ej6Screen } from './src/screens/Ej6Screen'

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/*<ArregloScreen/>*/}
      {/*<Ej1Screen/>*/}
      {/*<Ej2Screen/>*/}
      {/*<Ej3Screen/>*/}
      {/*<Ej4Screen/>*/}
      {/*<Ej5Screen/>*/}
      <Ej6Screen/>
    </SafeAreaView>
  )
}
