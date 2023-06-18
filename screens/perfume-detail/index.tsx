import React, { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';

import { HeaderArea, LogoNameArea, HeaderLogoImage, HeaderTitle, AlertIcon, UserReviewArea, } from './style';
import { useNavigation } from '@react-navigation/native';
import PerfumeIntro from "../../components/perfume-detail/PerfumeIntro/index"
import DetailTab from '../../components/perfume-detail/DetailTab/index'
import BasicInformation from "../../components/perfume-detail/BasicInformation/index";
import ShoppingInformation from "../../components/perfume-detail/ShoppingInformation/index";
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import Reviews from '../../components/perfume-detail/BasicInformation/Reviews';
import UserReview from '../../components/perfume-detail/BasicInformation/UserReview';
import ShoppingRow from '../../components/perfume-detail/ShoppingInformation/ShoppingRow';
import ApiService from '../../ApiService';


// type PERFUMEPARAMS = {
//   perfumeId: Number;
// };

const PerfumeDetail = (route: any) => {

  // console.log('route,-----------------')
  // console.log(route?.route?.params?.perfumeId)

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("홈")
  }
  const [clickedTab, setClickedTab] = useState<string>('기본정보');


  // console.log('route?.route?.params?.perfumeId')
  // console.log(route?.route?.params?.perfumeId)


  const getPerfumeBasicInformation = () => {
    ApiService.GETPERFUMEBASICINFORMATION(route?.route?.params?.perfumeId)
      .then((data) => {
        console.log('data---------------')
        console.log(data?.data)

      }
      ).catch((res) => {
        console.log('향수 기본 정보 받아오기 실패')
        console.log(res)
      })
  }

  useEffect(() => {
    getPerfumeBasicInformation();
  }, [])




  return (
    <View style={{ height: "100%" }}>

      {clickedTab === "기본정보" ?

        <ScrollView>
          <View>
            <HeaderArea>                
              <TouchableOpacity onPress={goToHome}>
              <LogoNameArea>
                <HeaderLogoImage source={require('../../assets/images/logo/logo-scenchive-purple.png')} />
                <HeaderTitle>센카이브</HeaderTitle >
              </LogoNameArea>              
                </TouchableOpacity>

              <AlertIcon source={require('../../assets/images/icon/icon-notice-bell.png')} />
            </HeaderArea>
            <PerfumeIntro />
            <DetailTab clickedTab={clickedTab} setClickedTab={setClickedTab} />
            <BasicInformation />
          </View>
          <UserReviewArea>

            <UserReview />
            <UserReview />
            <UserReview />
            <UserReview />
          </UserReviewArea>

        </ScrollView>
        :

        <ScrollView>

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



          <ShoppingRow />
          <ShoppingRow />
          <ShoppingRow />
          <ShoppingRow />
          <ShoppingRow />
          <ShoppingRow />

        </ScrollView>


        // <SafeAreaView >
        //   <FlatList
        //     data={array}
        //     numColumns={1}
        //     keyExtractor={item => item.toString()}
        //     ListHeaderComponent={() => (
        //       <View>
        //         <HeaderArea>
        //           <LogoNameArea>
        //             <HeaderLogoImage source={require('../../assets/images/logo/logo-scenchive-purple.png')} />
        //             <HeaderTitle>센카이브</HeaderTitle >
        //           </LogoNameArea>
        //           <AlertIcon source={require('../../assets/images/icon/icon-notice-bell.png')} />
        //         </HeaderArea>
        //         <PerfumeIntro />
        //         <DetailTab clickedTab={clickedTab} setClickedTab={setClickedTab} />
        //         <ShoppingInformation />
        //         </View>
        //     )}
        //     renderItem={({ item }) => <View>
        //           <ShoppingRow />
        //     </View>}
        //     style={{ flexGrow: 1, }}
        //   />
        // </SafeAreaView>
      }


    </View>
  );
};

export default PerfumeDetail;