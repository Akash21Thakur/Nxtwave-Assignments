import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import TeamCard from './components/TeamCard';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App=() => {
  return (
    
    <BrowserRouter>
   
      <Routes>        
          <Route path="/" element={<Home/>}/>
          <Route path='/team-matches/:id' element={<TeamMatches/>} />
     </Routes>  
      {/* <Home/> */}
    </BrowserRouter>
    
    
  )
    
       {/* <Route path="/" component={Home}/> */}
        
   
    
    // <Home/>
  
}

export default App
