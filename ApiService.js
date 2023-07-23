import axios from 'axios';

//https://stackoverflow.com/questions/33704130/react-native-android-fetch-failing-on-connection-to-local-api
// const API_URL = 'http://10.0.2.15:8080'; // 에뮬레이터 ip주소
//스프링 부트 API의 기본 URL
// const API_URL = 'http://localhost:8080';
// const API_URL = 'http://localhost:3000';
// const API_URL = 'http://10.0.2.15:3000';
const API_URL='http://10.0.2.15:8080';


class ApiService {
    // GET 요청 예시
    //   static getExampleData() {
    //     return axios.get(API_URL + '/example');
    //   }
    static GETSIGNUPKEYWORD(){
        return axios.get(API_URL+'/survey');
    }
    static GETSEARCHSEASONPAGEKEYWORD(){
        return axios.get(API_URL+'/perfumes/recommend/type');
    }
    static GETSEARCHTPOPAGEKEYWORD(myHeader){
        console.log('------myh', myHeader)
        return axios.get(API_URL+'/perfumes/recommend/tpo', {headers:{Authorization:`Bearer ${myHeader}`}});
    }
    static GETSEARCHKEYWORDRESULT(params){
        return axios.get(API_URL+'/perfumes/recommend?'+params)
    }
    static GETPERFUMEBASICINFORMATION(params, myHeader){
        return axios.get(API_URL+'/notesinfo/'+params, {headers:{Authorization:`Bearer ${myHeader}`}})
    }
    static GETPERFUMERATING(perfumeId, myHeader){
        return axios.get(API_URL+'/perfumerating/'+perfumeId, {headers:{Authorization:`Bearer ${myHeader}`}})
    }    
    static GETSEASONRECOMMENDATION(seasonId, myHeader){
        return axios.get(API_URL+'/recommend?season='+seasonId, {headers:{Authorization:`Bearer ${myHeader}`}})
    }
    static GETBOOKMARKLIST(userId){
        return axios.get(API_URL+'/bookmark/'+userId)
    }
    static GETRECOMMENDATIONBYBOOKMARK(userId){
        return axios.get(API_URL+'/bookmark/recommend/'+userId)
    }
    static GETREVIEWLIST(perfumeId, myHeader){
        return axios.get(API_URL+'/review/'+perfumeId, {headers:{Authorization:`Bearer ${myHeader}`}})
    }
    static GETSHOPPINGINFORMATION(perfumeName, myHeader){
        return axios.get(API_URL+'/product/search?query='+perfumeName, {headers:{Authorization:`Bearer ${myHeader}`}})
    }
    static GETSEARCHRESULTLIST(searchWord){
        return axios.get(API_URL+'/search?name='+searchWord)
    }
    static GETUSERKEYWORDLIST(userId){
        return axios.get(API_URL+'/keyword/'+userId)
    }
    static GETBOARDSLIST(myHeader){
        return axios.get(API_URL+'/boards', {headers:{Authorization:`Bearer ${myHeader}`}})
    }
    static GETMENUBOARDSLIST(selectedMenu, myHeader){
        return axios.get(API_URL+'/boardtype/'+selectedMenu+'?page=0', {headers:{Authorization:`Bearer ${myHeader}`}})
    }
    static GETBOARDDETAIL(boardId, myHeader){
        return axios.get(API_URL+'/board/'+boardId, {headers:{Authorization:`Bearer ${myHeader}`}})

    }

    // POST 요청 예시
    //   static postExampleData(data) {
    //     return axios.post(API_URL + '/signup', data);
    //   }
    static SIGNUP(data) {
        return axios.post(API_URL + '/signup', data);
    }
    static LOGIN(data) {
        return axios.post(API_URL + '/login', data);
    }
    static KEYWORDSIGNUP(data){
        return axios.post(API_URL + '/survey', data)
    }
    static SETBOOKMARKYES(perfumeId, myHeader){
        console.log(`Bearer ${myHeader}`)
        return axios.post(API_URL + '/bookmark?perfumeId='+perfumeId, {headers:{Authorization:`Bearer ${myHeader}`}})
    }
    static REGISTERREVIEW(data, myHeader){
        console.log('headdddddddddd', myHeader)
        return axios.post(API_URL+'/review/', data, {headers:{Authorization:`Bearer ${myHeader}`}});
    }
    static REGISTERCOMMUNITYBOARD(data, myHeader){
        return axios.post(API_URL+'/board', data, {headers:{Authorization:`Bearer ${myHeader}`} })
    }


    // DELETE 요청 예시
    //   static postExampleData(data) {
    //     return axios.delete(API_URL + '/signup', data);
    //   }
    static SETBOOKMARKNO(perfumeId, myHeader ){
        console.log('perfumeId', perfumeId)
        return axios.delete(API_URL + '/bookmark?perfumeId='+perfumeId, {headers:{Authorization:`Bearer ${myHeader}`}})
    }
    
}

export default ApiService;
