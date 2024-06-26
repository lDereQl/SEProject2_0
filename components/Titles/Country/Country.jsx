import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { TEXT, COLORS } from '../../../constants/theme'
import {NetworkImage, ReusableText, HeightSpacer} from '../../../components/index'
import { useNavigation } from '@react-navigation/native'

const Country = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=>navigation.navigate('EventDetails', {item})}>
        <View>

        <NetworkImage
          source={item.imageUrl}
          width={85}
          height={85}
          radius={12}
        />

        <HeightSpacer height={5}/>

        <ReusableText
              text={item.country}
              family={"medium"}
              size={TEXT.large}
              color={COLORS.black}
              align={"center"}
          />

        </View>
    </TouchableOpacity>
  )
}

export default Country