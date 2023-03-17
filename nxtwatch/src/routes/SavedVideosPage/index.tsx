import SideNavBar from "../../components/SideNavBar";
import TopNavBar from "../../components/TopNavBar";
import SavedVideosPageContent from "../../components/savedPageContent";
import { MainContainer } from "../HomePage/styleComponents";

const SavedVideosPage = () => {
  return (
    <>
      <TopNavBar />
      <MainContainer>
        <SideNavBar />
        <SavedVideosPageContent />
      </MainContainer>
    </>
  );
};

export default SavedVideosPage;
