import GamingPageContent from "../../components/GamingPageContent";
import SideNavBar from "../../components/SideNavBar";
import TopNavBar from "../../components/TopNavBar";
import { MainContainer } from "../HomePage/styleComponents";

const GamingPage = () => {
  return (
    <>
      <TopNavBar />
      <MainContainer>
        <SideNavBar />
        <GamingPageContent />
      </MainContainer>
    </>
  );
};

export default GamingPage;
