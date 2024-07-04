import React from 'react'
import './Mainpage.css'
import image from './lp3.jpg'
import Vloggers from "../Vloggers/Vloggers";
import Suggestions from "../Suggestion/Suggestion";
import Blogs from "../BlogsPosts/Blogs";
import { useNavigate } from 'react-router-dom';


function Mainpage() {
  const navigate = useNavigate();

  const onButtonClick=()=>{
    navigate("/dishes")
  }
  return (
    <>
    <div className='mainpage' id='home'>
      <div className='image'>
      <div className='text-container'>
        <h1 id='hm'>Find The Best Food<br/> Around You</h1>
        <p id='pm'>Guided by Vloggers<br/>Savored by You: Unearth Culinary Gems!</p>
        <div className='button-container'>
          <button className='buttonff'onClick={()=> onButtonClick()}>Find Food</button>
          <button className='buttonuf'>Upload Food(Coming Soon...)</button>
        </div>
      </div>
        <img src={image} alt="Image not Loaded"/>
      </div>
    </div>
    <Vloggers/>
    <Suggestions/>
    <Blogs/>
    </>
  )
}

export default Mainpage
