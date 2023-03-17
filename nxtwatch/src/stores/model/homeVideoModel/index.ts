// import { FetchedHomeDetails } from "../../homeVideoStore";
import { action, makeObservable, observable } from "mobx";
import { BaseFetchedVideoDetails, FetchedHomeDetails } from "../../types";
import { ChannelType } from "../homeChannelType";

// export interface
 export class BaseVideoModel {
  id: string;
  title: string;
  thumbnailUrl: string;
  viewCount: string;
  isSaved: boolean;

  constructor(datas: BaseFetchedVideoDetails) {
    // console.log(datas.channel);
    this.id = datas.id;
    //    this.channel.name

    this.thumbnailUrl = datas.thumbnail_url;
    this.title = datas.title;
    this.viewCount = datas.view_count;
    this.isSaved = false;

    makeObservable((this),{
      isSaved: observable,
      toggleSaved: action
    })
  }

  toggleSaved(){
    console.log(this.isSaved);
    this.isSaved = ! this.isSaved;
  }
} 

export class HomeVideoModel extends BaseVideoModel {
  channel: ChannelType;
  publishedAt: string;

  constructor(datas: FetchedHomeDetails) {
    super(datas);
    // console.log(datas.channel);

    //    this.channel.name
    this.channel = new ChannelType(datas.channel);

    this.publishedAt = datas.published_at;
  }
}

// export default HomeVideoModel;
