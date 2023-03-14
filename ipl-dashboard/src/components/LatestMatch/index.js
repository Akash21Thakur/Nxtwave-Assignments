import React,{Component} from "react";
import './index.css'

class LatestMatch extends React.Component {
    componentDidMount(){
        console.log(this.props.data);
    }
    render(){
        const data=this.props.data;
        return <div className="latest-match-main-div">
                     <div className="left-match-details">
                        <h1 className="defeat-team-name">{data.competing_team}</h1>
                        <div className="match-date">{data.date}</div>
                        <div className="stadium">{data.venue}</div>
                        <div className="results">{data.result}</div>
                     </div>
                     <div className="defeat-team-logo">
                        <img src={data.competing_team_logo} alt={data.competing_team}></img>
                     </div>
                     <div className="right-match-details">
                        <div className="first-inn">First Innings</div>
                        <div className="value">{data.first_innings}</div>
                        <div className="first-inn">Second Innings</div>
                        <div className="value">{data.second_innings}</div>
                        <div className="first-inn">Man Of The Match</div>
                        <div className="value">{data.man_of_the_match}</div>
                        <div className="first-inn">Umpires</div>
                        <div className="value">{data.umpires}</div>
                     </div>
               </div>
    }
}

export default LatestMatch;