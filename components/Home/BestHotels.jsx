import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import reusable from '../Reusable/reusable.style';
import { TEXT, COLORS } from '../../constants/theme';
import ReusableText from '../Reusable/ReusableText';
import Feather from '@expo/vector-icons'

const BestHotels = () => {
  return (
    <View>
      <View style={[reusable.rowWithSpace('space-between'), {paddingBottom: 20}]}>
        <ReusableText
              text={'Recomendations'}
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