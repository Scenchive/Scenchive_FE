import React from 'react';
import styled from 'styled-components/native';

const PerfumeIntroArea = styled.View`
    width:100%;
    padding-top:24px;
    padding-right:20px;
    padding-left:20px;
    justify-content:center;
    align-items:center;
`


const PerfumeNameBookmarkRow = styled.View`
    display:flex;
    flex-direction:row;
    
`

const PerfumeName = styled.Text`
    font-size:20px;
    color:#242424;

`

const BookmarkIcon = styled.Image`
    width:20px;
    margin-left:15px;

`

const PerfumeIntroductionArea = styled.View`
    width:100%;
    display:flex;
    flex-direction:row;
    margin-top:20px;
    height:167px;
`

const PerfumeImage = styled.Image`
    width:100%;
    height:167px;
    margin-right:10px;
    resize-mode:contain;
    border:1.5px solid #DCDCDC;


`

const PerfumeIntroductionTexts=styled.View`
    display:flex;
    height:167px;
    flex:1;
    flex-direction:column;
`

const PerfumeNameKorean = styled.Text`
    font-size:16px;
    color:#616161;
    margin-bottom : 5px;
    font-weight:600;
`

const PerfumeNameEnglish = styled.Text`
    font-size:15px;
    color:#616161;
`

const RateCell=styled.View`
    margin-right:20px;
    flex-direction:column;
    align-items:center;
`

const SeasonCell=styled.View`
    margin-right:11px;
    height:57px;
    flex-direction:column;
    align-items:center;
`

export { PerfumeIntroArea, PerfumeNameBookmarkRow, PerfumeName, BookmarkIcon, PerfumeIntroductionArea, PerfumeImage , PerfumeIntroductionTexts, PerfumeNameKorean, PerfumeNameEnglish,RateCell, SeasonCell, };