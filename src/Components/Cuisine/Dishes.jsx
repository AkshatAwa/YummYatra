import React from 'react'
import "./Dishes.css"
import northindian from './assets/ni.jpg'
import southindian from './assets/si.jpg'
import chinese from './assets/chinese.jpg'
import italian from './assets/italian.jpg'
import chaat from './assets/chaat.jpg'
import cafes from './assets/cafes.jpg'
import { useNavigate } from 'react-router-dom';

const Dishes = () => {

  const navigate = useNavigate();

  const handleChinese=()=>{
    navigate('/dishes/Chinese');
  }
  const handleItalian=()=>{
    navigate('/dishes/Italian');
  }
  const handleNI=()=>{
    navigate('/dishes/northIndian');
  }
  const handleSI=()=>{
    navigate('/dishes/southIndian');
  }
  const handleChaat=()=>{
    navigate('/dishes/Chaat');
  }
  const handleCafe=()=>{
    navigate('/dishes/Cafes');
  }
  return (
    <>
    <div className="Dishesbox">
      <div className="rhb">
        <h1>Get the finest Food Around You</h1>
        <p>Explore the unexplored</p>
      </div>
      <div className="dflex-container">
        <div className="dflex-box">
          <span className="dlogo">
            <img className="dlogos" src={northindian} alt="NorthIndian Food" />
          </span>
          <span className="cbrief">North Indian</span>
          <span className="linebr"></span>
          <span className="content">Delhi's cuisine boasts diverse flavors, from iconic butter chicken to tangy chaat, reflecting its rich cultural heritage.</span>
          <div className="rbtn">
            <button className="rb" onClick={()=> handleNI()}>Explore Food</button>
          </div>
        </div>

        <div className="dflex-box">
          <span className="dlogo">
            <img className="dlogos" src={southindian}alt="South Indian Food" />
          </span>
          <span className="cbrief">South Indian</span>
          <span className="linebr"></span>
          <span className="content">Mumbai's food scene, from spicy pav bhaji to indulgent vada pav, captures the city's vibrant spirit and culinary diversity.</span>
          <div className="rbtn">
            <button className="rb" onClick={()=> handleSI()}>Explore Food</button>
          </div>
        </div>

        <div className="dflex-box">
          <span className="dlogo">
            <img className="dlogos" src={chinese} alt="Chinese Food" />
          </span>
          <span className="cbrief">Chinese</span>
          <span className="linebr"></span>
          <span className="content">Lucknow's culinary heritage, from fragrant biryanis to melt-in-your-mouth kebabs, is a testament to its royal culinary legacy.</span>
          <div className="rbtn">
            <button className="rb" onClick={()=> handleChinese()}>Explore Food</button>
          </div>
        </div>

        <div className="dflex-box">
          <span className="dlogo">
            <img className="dlogos" src={italian} alt="Italian Food" />
          </span>
          <span className="cbrief">Italian</span>
          <span className="linebr"></span>
          <span className="content">Chennai's vibrant essence of South Indian spices and flavors, offers a delightful journey through a diverse array of dishes.</span>
          <div className="rbtn">
            <button className="rb" onClick={()=> handleItalian()}>Explore Food</button>
          </div>
        </div>

        <div className="dflex-box">
          <span className="dlogo">
            <img className="dlogos" src={chaat} alt="Chaat Around you" />
          </span>
          <span className="cbrief">Chaat</span>
          <span className="linebr"></span>
          <span className="content">Kolkata's rich culinary tapestry offers a vibrant mosaic of flavors, from the iconic street food like kathi rolls and puchkas.</span>
          <div className="rbtn">
            <button className="rb" onClick={()=> handleChaat()}>Explore Food</button>
          </div>
        </div>

        <div className="dflex-box">
          <span className="dlogo">
            <img className="dlogos" src={cafes} alt="Cafes" />
          </span>
          <span className="cbrief">Cafes</span>
          <span className="linebr"></span>
          <span className="content">Hyderabad's culinary realm presents a tantalizing array of flavors, from the aromatic biryanis to the tangy haleem.</span>
          <div className="rbtn">
            <button className="rb" onClick={()=> handleCafe()}>Explore Food</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dishes
