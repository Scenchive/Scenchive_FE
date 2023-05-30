import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { HeaderArea, LogoNameArea, HeaderLogoImage, HeaderTitle, AlertIcon, } from './style';
import { useNavigation } from '@react-navigation/native';
import PerfumeIntro from "../../components/perfume-detail/PerfumeIntro/index"
import DetailTab from '../../components/perfume-detail/DetailTab/index'
import BasicInformation from "../../components/perfume-detail/BasicInformation/index";
import ShoppingInformation from "../../components/perfume-detail/ShoppingInformation/index";
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import Reviews from '../../components/perfume-detail/BasicInformation/Reviews';
import UserReview from '../../components/perfume-detail/BasicInformation/UserReview';

const PerfumeDetail: React.FC = ({ }) => {

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Home")
  }
  const [clickedTab, setClickedTab] = useState<string>('기본정보');

  const array = [1, 2, 3,]

  return (
    <View style={{ height: "100%" }}>
      {clickedTab === "기본정보" ?

        <SafeAreaView >
          <FlatList
            data={array}
            numColumns={1}
            keyExtractor={item => item.toString()}

            ListHeaderComponent={() => (
              <View>
                <HeaderArea>
                  <LogoNameArea>
                    <HeaderLogoImage source={require('../../assets/images/logo/logo-scenchive-purple.png')} />
                    <HeaderTitle>센카이브</HeaderTitle >
                  </LogoNameArea>
                  <AlertIcon source={require('../../assets/images/icon/icon-notice-bell.png')} />
                </HeaderArea>
                <PerfumeIntro />
                <DetailTab clickedTab={clickedTab} setClickedTab={setClickedTab} />
                <BasicInformation />
              </View>
            )}
            renderItem={({ item }) => <View>
              <UserReview />
            </View>}
            style={{ flexGrow: 1, }}
          />
        </SafeAreaView>
        :
        <SafeAreaView >
          <FlatList
            data={array}
            numColumns={1}
            keyExtractor={item => item.toString()}
            ListHeaderComponent={() => (
              <View>
                <HeaderArea>
                  <LogoNameArea>
                    <HeaderLogoImage source={require('../../assets/images/logo/logo-scenchive-purple.png')} />
                    <HeaderTitle>센카이브</HeaderTitle >
                  </LogoNameArea>
                  <AlertIcon source={require('../../assets/images/icon/icon-notice-bell.png')} />
                </HeaderArea>
                <PerfumeIntro />
                <DetailTab clickedTab={clickedTab} setClickedTab={setClickedTab} />
                <ShoppingInformation />        
                </View>
            )}
            renderItem={({ item }) => <View>
              <Text>여기에는 구매 어쩌고가 들어갈거야</Text>
            </View>}
            style={{ flexGrow: 1, }}
          />
        </SafeAreaView>



      }


    </View>
  );
};

export default PerfumeDetail;