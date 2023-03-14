import React, { Component } from "react";
import "./index.css";

// const data={
//     "umpires": "Nitin Menon, PR Reiffel",
//     "result": "Kolkata Knight Riders Won by 60 runs",
//     "man_of_the_match": "PJ Cummins",
//     "id": "1216530",
//     "date": "2020-11-01",
//     "venue": "At Dubai International Cricket Stadium, Dubai",
//     "competing_team": "Rajasthan Royals",
//     "competing_team_logo": "https://assets.ccbp.in/frontend/react-js/rr-logo-img.png",
//     "first_innings": "Kolkata Knight Riders",
//     "second_innings": "Rajasthan Royals",
//     "match_status": "Won"
//     }

class MatchCard extends React.Component {
    
  render() {
    const data = this.props.data;
    // console.log(data);

    // data.map((each) => {
    //     console.log(each.id);
    // })

    return (
      <div className="recent-matches-main-div">
        {data.map((each) => {
          return <div className="match-card-main-div">
            <img src={each.competing_team_logo} />
            <h1>{each.competing_team}</h1>

            <div>{each.result}</div>
            <div className={`${each.match_status}`}>{each.match_status}</div>
          </div>
        })}
      </div>
    );
  }
}

export default MatchCard;
