import SideNavBar from "../../components/SideNavBar";
import TopNavBar from "../../components/TopNavBar";
import { MainContainer } from "../HomePage/styleComponents";

const GamingPage = () => {
  return (
    <>
      <TopNavBar />
      <MainContainer>
        <SideNavBar />
        <div>Gaming</div>
      </MainContainer>
    </>
  );
};

export default GamingPage;
