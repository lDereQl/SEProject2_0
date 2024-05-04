import { View, SafeAreaView } from 'react-native'
import React from 'react'
import AppBar from '../../components/Reusable/AppBar'

const Recommended = () => {
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <View style={{height: 0}}>
        <AppBar title={'Recommendatiion'}/>
      </View>
    </SafeAreaView>
  )
}

export default Recommended