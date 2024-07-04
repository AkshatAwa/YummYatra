import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './Components/MainPage/Mainpage';
import Navbar from './Components/Navbar/Navbar';
import Vloggers from './Components/Vloggers/Vloggers';
import Blogs from './Components/BlogsPosts/Blogs';
import Suggestion from './Components/Suggestion/Suggestion';
import Footer from './Components/Footer/Footer';
import Recommendation from './Components/Vloggers/Recommendation';
import Vd from './Components/VloggerDetails/Vd';
import Dishes from './Components/Cuisine/Dishes';
import NorthIndian from './Components/Cuisine/NorthIndian';
import SouthIndian from './Components/Cuisine/SouthIndian';
import Italian from './Components/Cuisine/Italian';
import Chinese from './Components/Cuisine/Chinese';
import Chaat from './Components/Cuisine/Chaat';
import Cafes from './Components/Cuisine/Cafes';


function App() {
  return (
    <>
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/creator" element={<Vloggers/>}/>
        <Route path="/suggestion" element={<Suggestion/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path='/recommendation/:id/:name' element={<Recommendation/>}/>
        <Route path='/details' element={<Vd/>}/>
        <Route path='/dishes' element={<Dishes/>}/>
        <Route path='/dishes/northIndian' element={<NorthIndian/>}/>
        <Route path='/dishes/southIndian' element={<SouthIndian/>}/>
        <Route path='/dishes/Italian' element={<Italian/>}/>
        <Route path='/dishes/Chinese' element={<Chinese/>}/>
        <Route path='/dishes/Chaat' element={<Chaat/>}/>
        <Route path='/dishes/Cafes' element={<Cafes/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
    </>
  );
}

export default App;

