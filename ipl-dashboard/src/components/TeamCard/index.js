import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
// const teams= [
//     {
//       "name": "Royal Challengers Bangalore",
//       "id": "RCB",
//       "team_image_url": "https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png",
//       // use value of the key 'name' for alt as `${name}`
//     }
//   ]

class TeamCard extends React.Component{
    state={
        teams:[]
    }

    componentDidMount(){
        this.getTeamsData();
    }

    getTeamsData=async () =>{
        const response = await fetch('https://apis.ccbp.in/ipl');
        const teamdata= await response.json();
        console.log(teamdata.teams.length);
        this.setState({
            teams: teamdata.teams
        })
    }
    render() {
        const teams=this.state.teams;

       return ( <div className='list-teams'>
            {
                teams.map((each)=>{
                     return  <Link  className='each-team-link text-link' to={`/team-matches/${each.id}`}>
                     <div className='each-team' key={each.id}>
                     <img className='each-team-logo' src={each.team_image_url} />
                     <h1>{each.name}</h1>
                     </div> 
                     </Link>
                }
                     )
                }
        </div>
       )
        
    }
}

export default TeamCard;