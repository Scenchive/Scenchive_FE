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
    static GETSEARCHTPOPAGEKEYWORD(){
        return axios.get(API_URL+'/perfumes/recommend/tpo');
    }
    static GETSEARCHKEYWORDRESULT(params){
        return axios.get(API_URL+'/perfumes/recommend?'+params)
    }
    static GETPERFUMEBASICINFORMATION(params){
        return axios.get(API_URL+'/notesinfo/'+params)
    }
    static GETPERFUMERATING(perfumeId){
        return axios.get(API_URL+'/perfumerating/'+perfumeId)
    }    
    static GETSEASONRECOMMENDATION(userId, seasonId){
        return axios.get(API_URL+'/recommend?userId='+userId+'&season='+seasonId)
    }
    static GETBOOKMARKLIST(userId){
        return axios.get(API_URL+'/bookmark/'+userId)
    }
    static GETRECOMMENDATIONBYBOOKMARK(userId){
        return axios.get(API_URL+'/bookmark/recommend/'+userId)
    }
    static GETREVIEWLIST(perfumeId){
        return axios.get(API_URL+'/review/'+perfumeId)
    }
    static GETSHOPPINGINFORMATION(perfumeName){
        return axios.get(API_URL+'/product/search?query='+perfumeName)
    }
    static GETSEARCHRESULTLIST(searchWord){
        return axios.get(API_URL+'/search?name='+searchWord)
    }

    static GETUSERKEYWORDLIST(userId){
        return axios.get(API_URL+'/keyword/'+userId)
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
    static SETBOOKMARKYES(userId,perfumeId ){
        return axios.post(API_URL + '/bookmark?userId='+userId+'&perfumeId='+perfumeId)
    }
    static REGISTERREVIEW(data){
        console.log('daata', data)
        return axios.post(API_URL+'/review/', data);
    }

    // DELETE 요청 예시
    //   static postExampleData(data) {
    //     return axios.delete(API_URL + '/signup', data);
    //   }
    static SETBOOKMARKNO(userId,perfumeId ){
        return axios.delete(API_URL + '/bookmark?userId='+userId+'&perfumeId='+perfumeId)
    }
    
}

export default ApiService;
