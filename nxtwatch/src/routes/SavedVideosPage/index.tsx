import SideNavBar from "../../components/SideNavBar";
import TopNavBar from "../../components/TopNavBar";
import { MainContainer } from "../HomePage/styleComponents";

const SavedVideosPage = () => {
  return (
    <>
      <TopNavBar />
      <MainContainer>
        <SideNavBar />
        <div>Saved videos</div>
      </MainContainer>
    </>
  );
};

export default SavedVideosPage;
