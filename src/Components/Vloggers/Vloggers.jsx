import React, { useEffect, useState } from 'react';
import './Vloggers.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const Vloggers = () => {
  const navigate = useNavigate();
  const [vloggers, setVloggers] = useState([]);

  const handleRecommendation = (id, name) => {
    navigate(`/recommendation/${id}/${name}`);
  }

  useEffect(() => {
    fetch('http://localhost:8082/users')
      .then(res => res.json())
      .then(data => setVloggers(data))
      .catch(err => console.log(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    horizontal: true,
    horizontalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
<>
  <div className='vloggersection' id='creators'>
    <div className="headingv">
      <h1 className='vh' id='creators'>Your Favourite Creators</h1>
      <p className='vhp'>Get Recommendation from your fav.</p>
    </div>
    <div className="carousel-container">
      <Slider {...settings}>
        {vloggers.map((d, id) => (
          <div className="carousel-vloggers" key={id}>
            <div className="carousel-content">
              <img src={`http://localhost:8082/uploads/${d.image}`} alt={d.name} className="carousel-image" />
              <h3 className="carousel-name">{d.name}</h3>
              <p className="carousel-description">{d.description}</p>
              <button className="carousel-button" onClick={() => handleRecommendation(d.id, d.name)}>Get Recommendation</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</>

  );
}

export default Vloggers;
