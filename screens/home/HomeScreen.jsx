import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import reusable  from '../../components/Reusable/reusable.style'
import {
  ReusableText, 
  HeightSpacer, 
  Places, 
  Recomendations,
  BestHotels
} from '../../components'
import { SIZES, COLORS } from '../../constants/theme'
import { AntDesign } from "@expo/vector-icons"
import home from './home.style';

const HomeScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={reusable.container}>
        <View>
          <View style={reusable.rowWithSpace('space-between')}>
            <ReusableText
              text={'Hey User!'}
              family={"regular"}
              size={SIZES.xLarge}
              color={COLORS.black}
            />

            <TouchableOpacity style={home.box}
              onPress={() => navigation.navigate("Settings")}>
              <AntDesign
                name='setting'
                size={26}
              />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={40}/>

          <Places/>
          
          <HeightSpacer height={15}/>

          <Recomendations/>

          <HeightSpacer height={30}/>

          <BestHotels/>
          
        </View>
      </SafeAreaView>
    );
  }

export default HomeScreen;