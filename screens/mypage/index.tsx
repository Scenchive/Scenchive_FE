import axios from "axios";
import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';

import {
  HeaderArea, BackButton, HeaderTitle, PerfumeCellArea, PerfumeCellTitleArea, PerfumeCellAreaTitle,
  UserInformationArea, ProfilePic, UserInformationTextArea, UserNameText, UserEmailText,
  ModifyButton, ModifyButtonText, PerfumeCellListArea, PerfumeArea,
  PerfumeTitleArea, PerfumeAreaTitle, MoreButton, MoreText, PerfumeListArea,
  PerfumeCell, LogoutButton, LogoutIcon, LogoutButtonText,
} from './style';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import ApiService from '../../ApiService';
import { ScrollView } from "react-native";
import MyPerfumeCell from "../../components/mypage/MyPerfumeCell";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PerfumeNameBookmarkRow } from "../../components/perfume-detail/PerfumeIntro/style";



const MyPage = () => {

  const [myToken, setMyToken] = useState("")
  const [isValidToken, setIsValidToken] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userKeywordList, setUserKeywordList] = useState<KEYWORD[]>([]);
  const [recommendedPerfumeList, setRecommendedPerfumeList] = useState<PERFUME[]>([]);
  const [bookmarkedPerfumeList, setBookmarkedPerfumeList] = useState<PERFUME[]>();

  type PERFUME = { brand_name: string, brandName_kr:string, perfume_name: string, perfume_id: number, perfumeImage: string, }
  type KEYWORD = { id: number, utag: string, utag_kr: string, utagtype_id: number }
  type BOOKMARKEDLIST = {
    totalBookmarkPerfumeCount: number, perfumes:
    [{
      perfume_id: number,
      perfume_name: string,
      brand_name: string,

    }]
  }

  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const goToHome = () => {
    //@ts-ignore
    navigation.navigate("Tabs", { screen: "홈" })
  }
  const goToSignupORLogin = () => {
    //@ts-ignore
    navigation.navigate("Stack", { screen: "SignupORLogin" })
  }

  const goToModifyPerfumeCell = (userKeywordList: KEYWORD[]) => {
    //@ts-ignore
    navigation.navigate("Stack", { screen: "ModifyPerfumeCellPage", params: { userKeywordList: userKeywordList } })
  }

  const goToMoreBookmarkedPage = () => {
    //@ts-ignore
    navigation.navigate("Stack", { screen: "MoreBookmarkedPage"})
  }

  const goToMoreNewPage = () => {
    //@ts-ignore
    navigation.navigate("Stack", { screen: "MoreNewPage"})
  }


  const goToPerfumeDetail = (el: PERFUME) => {
    //@ts-ignore
    navigation.navigate("Stack", { screen: "PerfumeDetail", params: { perfumeId: el?.perfume_id, perfumeName: el?.perfume_name, brandName: el?.brand_name , perfumeImage:el?.perfumeImage} })
  }

  const getMyToken = () => {
    AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        setMyToken(result)
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    });
  }

  const getUserInformation = async () => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        ApiService.GETUSERINFORMATION(result)
          .then((data) => {
            setUserEmail(data?.data?.email)
            setUserName(data?.data?.name)
          }
          ).catch(function (err) {
            console.log(`Error Message: ${err}`);
          })
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    })
  }

  const getUserKeywordList = async () => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        ApiService.GETUSERKEYWORDLIST(result)
          .then((data) => {
            setUserKeywordList(data?.data.slice(0, 8))
          }).catch(error => {
            console.log(error)
          })
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    })
  }


  const getRecommendationByBookmark = async () => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        ApiService.GETRECOMMENDATIONBYBOOKMARK(result)
          .then((data) => {
            setRecommendedPerfumeList(data?.data?.perfumes.slice(0, 3))

            // if (data?.data?.perfumes.length > 3) {
            // } else {
            //   setRecommendedPerfumeList(data?.data?.perfumes)
            // }
          }).catch(function (err) {
            console.log(`Error Message: ${err}`);
          })
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    })
  }


  const getBookmarkedList =async () => {
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
        ApiService.GETBOOKMARKLIST(result,0)
          .then((data) => {
            setBookmarkedPerfumeList(data?.data?.perfumes.slice(0,3))
          }
          ).catch(function (err) {
            console.log(`Error Message: ${err}`);
          })
      } else {
        console.log('토큰을 가져올 수 없습니다.')
      }
    })
  }

  const Logout = async() => {
    // console.log('myToken', myToken)
    await AsyncStorage.getItem('my-token', (err, result) => {
      if (result) {
    ApiService.LOGOUT(result)
      .then((data) => {
        if (data?.data === '로그아웃 성공') {
          goToSignupORLogin();
        }

      }).catch(function (err) {
        console.log(`Error Message: ${err}`);
      })
    } else {
      console.log('토큰을 가져올 수 없습니다.')
    }
  })
}


  useEffect(() => {
    getMyToken();
  }, [])

  // useEffect(() => {
  //   getUserInformation();
  //   getUserKeywordList();
  //   getRecommendationByBookmark();
  //   getBookmarkedList();
  // }, [ isFocused])


  useEffect(() => {
    if (isFocused===true){
      AsyncStorage.getItem('my-token', (err, result) => {
        // 토큰 유효성 검사
        if (result) {
          ApiService.TOKENVALIDATION(result)
            .then((data) => {
              if (data?.data) {
                setIsValidToken(true);
                getUserInformation();
                getUserKeywordList();
                getRecommendationByBookmark();
                getBookmarkedList();
              } else {
                console.log('유효하지 않은 토큰입니다.1')
              }
            }
            ).catch((res) => {
              console.log('유효하지 않은 토큰입니다.2')
              console.log(res)
            })
        } else {
          goToHome();
        }
      });

    }
  }, [isFocused===true])

  // console.log(bookmarkedPerfumeList)

  return (
    <View>
      <ScrollView>
        <HeaderArea>
          <BackButton onPress={() => navigation.goBack()}>
            {/* <Image style={{ position: "absolute" }} source={require('../../assets/images/icon/icon-btn-back.png')} /> */}
          </BackButton>

          <HeaderTitle>내 프로필</HeaderTitle >

        </HeaderArea>
        <UserInformationArea>
          {/* <ProfilePic source={require('../../assets/images/icon/icon-profile-pic.png')} /> */}
          {/* <UserInformationTextArea> */}
          <UserNameText numberOfLines={2}>
            {userName}
          </UserNameText>
          <UserEmailText numberOfLines={2}>
            {userEmail}
          </UserEmailText>
          {/* </UserInformationTextArea> */}

        </UserInformationArea>


        <PerfumeCellArea style={{ marginBottom: 33.3 }}>
          <PerfumeCellTitleArea>
            <PerfumeCellAreaTitle>나의 향수세포</PerfumeCellAreaTitle>
            <ModifyButton onPress={() => goToModifyPerfumeCell(userKeywordList)} >
              <ModifyButtonText># 수정하기</ModifyButtonText>
            </ModifyButton>


          </PerfumeCellTitleArea>

          <PerfumeCellListArea>
            {userKeywordList.map((el) => (
              <MyPerfumeCell
                utag_kr={el.utag_kr}
                id={el.id}
                utag={el.utag}
                utagtype_id={el.utagtype_id}
                key={el.id} />
            ))}

          </PerfumeCellListArea>
        </PerfumeCellArea>

        <PerfumeArea style={{ marginBottom: 33.3 }}>
          <PerfumeTitleArea>
            <PerfumeAreaTitle>북마크한 향수 목록</PerfumeAreaTitle>
            <MoreButton onPress={goToMoreBookmarkedPage}><MoreText>더보기</MoreText></MoreButton>
          </PerfumeTitleArea>
          <PerfumeListArea>
            {bookmarkedPerfumeList?.map((el, index) => (
              <PerfumeCell style={{ marginRight: index !== 2 ? 18 : 0 }} key={index} onPress={() => goToPerfumeDetail(el)}>
                <View style={{ width: "100%", height: 135 }}>
                  {/* <Text>이미지 준비중입니다.</Text> */}
                  {/* <Image style={{ resizeMode: "contain", width: "100%", height: 110, marginTop: 0, }} source={require('../../assets/images/icon/icon-perfume-pic.png')} /> */}
                  <Image
                    style={{ width: "100%", height: "100%", marginRight: 12, resizeMode: "contain" }}
                    source={el?.perfumeImage ? { uri: `${el?.perfumeImage}` } : require('../../assets/images/icon/icon-perfume-pic.png')} />

                </View>
                <Text>{el?.brandName_kr}</Text>
                <Text>{el?.brand_name}</Text>
                <Text>{el?.perfume_name}</Text>
              </PerfumeCell>
            ))}
          </PerfumeListArea>
        </PerfumeArea>


        <PerfumeArea>
          <PerfumeTitleArea>
            <PerfumeAreaTitle>이런 향수도 있어요.</PerfumeAreaTitle>
            <MoreButton onPress={goToMoreNewPage}><MoreText>더보기</MoreText></MoreButton>
          </PerfumeTitleArea>
          <PerfumeListArea>
            {recommendedPerfumeList?.map((el, index) => (
              <PerfumeCell style={{ marginRight: index !== 2 ? 18 : 0 }} key={index} onPress={() => goToPerfumeDetail(el)}>
                <View style={{ width: "100%", height: 135 }}>
                  {/* <Image style={{ resizeMode: "contain", width: "100%", height: 110, marginTop: 0, }} source={require('../../assets/images/icon/icon-perfume-pic.png')} /> */}
                  <Image
                    style={{ width: "100%", height: "100%", marginRight: 12, resizeMode: "contain" }}
                    source={el?.perfumeImage ? { uri: `${el?.perfumeImage}` } : require('../../assets/images/icon/icon-perfume-pic.png')} />

                </View>
                <Text>{el?.brandName_kr}</Text>
                <Text>{el?.brand_name}</Text>
                <Text>{el?.perfume_name}</Text>
              </PerfumeCell>
            ))}
          </PerfumeListArea>
        </PerfumeArea>


        <LogoutButton onPress={Logout}>
          <LogoutIcon source={require('../../assets/images/icon/icon-btn-logout.png')} />
          <LogoutButtonText>로그아웃</LogoutButtonText>
        </LogoutButton>
      </ScrollView>
    </View>
  );
};

export default MyPage;