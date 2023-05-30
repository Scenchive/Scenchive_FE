import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { KeywordStyle, KeywordText } from './style';

type KeywordText = {
  keywordtext: string;
};


const UserReviewKeyword: React.FC<KeywordText> = ({keywordtext}) => {


  return (
    <View>
      <KeywordStyle>
        <KeywordText># {keywordtext}</KeywordText>
      </KeywordStyle>
    </View>

  );
};

export default UserReviewKeyword;