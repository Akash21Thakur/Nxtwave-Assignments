import SideNavBar from "../../components/SideNavBar";
import TopNavBar from "../../components/TopNavBar";
import { MainContainer } from "../HomePage/styleComponents";

const TrendingPage = () => {
  return (
    <>
      <TopNavBar />
      <MainContainer>
        <SideNavBar />
        <div>Trending Page</div>
      </MainContainer>
    </>
  );
};

export default TrendingPage;
