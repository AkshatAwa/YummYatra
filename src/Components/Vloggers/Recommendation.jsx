import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Recommendation.css";
import delhi from "./assets/delhi.png";
import lucknow from "./assets/lucknow.png";
import mumbai from "./assets/mumbai.png";
import chennai from "./assets/chennai.png";
import hyderabad from "./assets/hyderabad.png";
import kolkata from "./assets/kolkata.png";

const Recommendation = () => {
  const { id, name } = useParams();
  const [recommendations, setRecommendations] = useState([]);

  return (
    <div className="Recommendationbox">
      <div className="rhb">
        <h1>Recommendations from {name}</h1>
        <p>Get Recommendation from your favourite content creator</p>
        <ul>
          {recommendations.map((rec) => (
            <li key={rec.id}>{rec.content}</li>
          ))}
        </ul>
      </div>
      <div className="flex-container">
        <div className="flex-box">
          <span className="logo">
            <img className="logos" src={delhi} alt="Delhi" />
          </span>
          <span className="cbrief">Delhi</span>
          <span className="linebr"></span>
          <span className="content">Delhi's cuisine boasts diverse flavors, from iconic butter chicken to tangy chaat, reflecting its rich cultural heritage.</span>
          <div className="rbtn">
            <button className="rb">Explore Food</button>
          </div>
        </div>

        <div className="flex-box">
          <span className="logo">
            <img className="logos" src={mumbai} alt="Mumbai" />
          </span>
          <span className="cbrief">Mumbai</span>
          <span className="linebr"></span>
          <span className="content">Mumbai's food scene, from spicy pav bhaji to indulgent vada pav, captures the city's vibrant spirit and culinary diversity.</span>
          <div className="rbtn">
            <button className="rb">Explore Food</button>
          </div>
        </div>

        <div className="flex-box">
          <span className="logo">
            <img className="logos" src={lucknow} alt="Lucknow" />
          </span>
          <span className="cbrief">Lucknow</span>
          <span className="linebr"></span>
          <span className="content">Lucknow's culinary heritage, from fragrant biryanis to melt-in-your-mouth kebabs, is a testament to its royal culinary legacy.</span>
          <div className="rbtn">
            <button className="rb">Explore Food</button>
          </div>
        </div>

        <div className="flex-box">
          <span className="logo">
            <img className="logos" src={chennai} alt="Chennai" />
          </span>
          <span className="cbrief">Chennai</span>
          <span className="linebr"></span>
          <span className="content">Chennai's vibrant essence of South Indian spices and flavors, offers a delightful journey through a diverse array of dishes.</span>
          <div className="rbtn">
            <button className="rb">Explore Food</button>
          </div>
        </div>

        <div className="flex-box">
          <span className="logo">
            <img className="logos" src={kolkata} alt="Kolkata" />
          </span>
          <span className="cbrief">Kolkata</span>
          <span className="linebr"></span>
          <span className="content">Kolkata's rich culinary tapestry offers a vibrant mosaic of flavors, from the iconic street food like kathi rolls and puchkas.</span>
          <div className="rbtn">
            <button className="rb">Explore Food</button>
          </div>
        </div>

        <div className="flex-box">
          <span className="logo">
            <img className="logos" src={hyderabad} alt="Hyderabad" />
          </span>
          <span className="cbrief">Hyderabad</span>
          <span className="linebr"></span>
          <span className="content">Hyderabad's culinary realm presents a tantalizing array of flavors, from the aromatic biryanis to the tangy haleem.</span>
          <div className="rbtn">
            <button className="rb">Explore Food</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
