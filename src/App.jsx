import React from 'react'
import { BrowserRouter as Router,Route,NavLink,Routes} from 'react-router-dom';
import All from './Components/All';

import FullStackDevelopment from './Components/FullStackDevelopment';
import DataScience from './Components/DataScience';
import CyberSecurity from './Components/CyberSecurity';
import Career from './Components/Career';
import './App.css';
import Divider from '@mui/material/Divider';

const App = () => {
  return (
  <Router>
    <div>
      <nav>
        <ul>
          <li><NavLink to="/" exact>All</NavLink></li>&nbsp;
          <li><NavLink to="/fullstack" >Full Stack Development</NavLink></li>
          <li><NavLink to="/datascience" >Data Science</NavLink></li>
          <li><NavLink to="/cybersecurity" >Cyber Security</NavLink></li>
          <li><NavLink to="/career" >Career</NavLink></li>
          </ul>
         
      </nav>
      <Divider style={{opacity:'0.8'}}/>


    <Routes>
        <Route path="/" element={<All/>}/>
        <Route path="/fullstack" element={<FullStackDevelopment/>}/>
        <Route path="/datascience" element={<DataScience/>}/>
        <Route path="/cybersecurity" element={<CyberSecurity/>}/>
        <Route path="/career" element={<Career/>}/>
     
    </Routes>
    </div>
  </Router>
  )
}

export default App

