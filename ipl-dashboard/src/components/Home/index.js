import React, {Component} from 'react';
import './index.css';
import TeamCard from '../TeamCard';


class Home extends React.Component{
    render(){
        return ( <div className='home-main-div'> 
        

        <div className='logo-head'>
            <img className='ipl-logo' src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" alt='ipl logo'/>
            <h1>IPL DashBoard</h1>
        </div>
        
        <TeamCard />
        </div>
        
        )
       
    }
}

export default Home;