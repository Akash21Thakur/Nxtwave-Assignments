import { useParams } from "react-router";
import SideNavBar from "../../components/SideNavBar";
import TopNavBar from "../../components/TopNavBar";
import VideoDetails from "../../components/VideoDetails";
import { MainContainer } from "../HomePage/styleComponents";

const VideoPlayerDiv = (props: any) => {
    const params=useParams();
    // console.log(prams);
    return <>
      <TopNavBar />
      <MainContainer>
        <SideNavBar />
           <VideoDetails videoId={params.id}/>
      </MainContainer>
    </>
}

export default VideoPlayerDiv