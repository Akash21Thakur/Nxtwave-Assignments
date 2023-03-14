import React, { Component } from "react";
import "./index.css";
import { useParams } from "react-router-dom";
import LatestMatch from "../LatestMatch";
import MatchCard from "../MatchCard";

const withRouter = (Component) => {
  const RenderComponent = () => {
    const params = useParams();
    return <Component params={params} />;
  };

  return RenderComponent;
};

class TeamMatches extends React.Component {
  state = {
    teamDetails: [],
  };
  componentDidMount() {
    this.getTeamDetails();
  }
  temp = "KKR";

  getTeamDetails = async () => {
    const response = await fetch(
      `https://apis.ccbp.in/ipl/${this.props.params.id}`
    );
    const updatedTeamDetails = await response.json();
    // console.log(updatedTeamDetails.latest_match_details);

    this.setState({
      teamDetails: updatedTeamDetails,
    });
  };

  render() {
    // console.log(this.state.teamDetails);
    const teamDetails = this.state.teamDetails;
    // console.log(teamDetails.recent_matches);
    // const recentMatches = teamDetails.recent_matches;
    // // console.
    // recentMatches.map((each)=>{
    //   console.log(each.id);
    // })

    return (
      <div className={`team-matches-main-div team-${this.props.params.id}`}>
        <div className={`team-matches-div `}>
          <img src={teamDetails.team_banner_url} alt={this.props.params.id} />
          <p>Latest Matches</p>
          {/* <LatestMatch data={teamDetails.latest_match_details} /> */}
          {teamDetails.latest_match_details ? (
              <LatestMatch data={teamDetails.latest_match_details}/>
            ) : (
              <>Loading...</>
            )}
          

          {
            // console.log(teamDetails.recent_matches)
          }

          <div className="match-card">
            {teamDetails.recent_matches ? (
              <MatchCard data={teamDetails.recent_matches} />
            ) : (
              <>Loading...</>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TeamMatches);
