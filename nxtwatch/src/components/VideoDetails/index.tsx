import Cookies from "js-cookie";
import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";



const VideoDetails = inject('videoDetailsStore')(observer((props: any) => {

  const {videoDetailsStore} = props ;
  
  // videoDetailsStore.id=props.videoId;
  // videoDetailsStore.demoComputed;
  // console.log(videoDetailsStore);
  
useEffect(()=>{
  // console.log(videoDetailsStore.getDe)
  videoDetailsStore.getDetails(props.videoId);
},[]); 
  const renderVideoDetails = () => {
    // console.log(videoState.videoList.video_details);
    console.log(videoDetailsStore.videoDetailsData);
    const data = videoDetailsStore.videoDetailsData?.thumbnailUrl;
    return (
      <>
        
        <ReactPlayer light = {data} url='https://www.youtube.com/watch?v=nLQ-9vfEjUI&ab_channel=CodeWithYd' ></ReactPlayer>
      </>
    );
  };   

  const renderLoader = () => {
    // getVideoList();
    return <div>Loading...</div>;
  };

  return (
    <>
      {/* <div>akash</div> */}
      {/* {console.log(videoDetailsStore.isLoading)} */}
      {videoDetailsStore.isLoading ? renderLoader() : renderVideoDetails()}
    </>
  );
}))

export default VideoDetails;
