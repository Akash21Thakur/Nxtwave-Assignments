import Cookies from "js-cookie";
import { makeObservable, observable } from "mobx";
import { HOME_VIDEOS_API_URL, LOGIN_API_URL } from "../../constants/api_url";

class HomeVideosStore {
  homeVideosList: any = [];

  async getVideoList() {
    const token=Cookies.get('jwt_token');
      // console.log(token);
      const option = {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        method: 'GET',
      }
      try{
        const response = await fetch(HOME_VIDEOS_API_URL,option);
        const data= await response.json();
        if(response.ok){
          this.homeVideosList=data;
          console.log(data);
        }else{
          // this.homeVideoList=[]
          console.log(data.error_msg);
        }
      }catch(err){
        console.error(err);
      }
  }

  constructor() {
    makeObservable(this, {
      homeVideosList: observable,
    });

    this.getVideoList();

  }
}

export default HomeVideosStore;
