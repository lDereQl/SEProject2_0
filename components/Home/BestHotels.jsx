import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TEXT, COLORS } from '../../constants/theme'
import reusable from '../Reusable/reusable.style'
import ReusableText from '../Reusable/ReusableText'
import { Feather } from '@expo/vector-icons'

const BestHotels = () => {
  return (
    <View>
      <View style={[reusable.rowWithSpace('space-between'), {paddingBottom: 20}]}>
        <ReusableText
              text={'Nearby Hotels'}
              family={"medium"}
              size={TEXT.large}
              color={COLORS.black}
          />

        <TouchableOpacity onPress={() => navigation.navigate('Recommended')}>
            <Feather 
                name="list"
                size={20}
            />
        </TouchableOpacity>

        </View>
    </View>
  )
}

export default BestHotels

const styles = StyleSheet.create({})