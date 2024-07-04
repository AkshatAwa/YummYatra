import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Suggestion.css';
import lp from './lp2.jpg'
import r2 from './r2.jpg'

function Suggestion() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      img: lp,
      title: 'We provide healthy food for your family.',
      description: 'Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance.',
      Author: 'Sanjay',
      contact: {
        rname:'The Visit',
        phone: '9857389489',
        email: 'thevisit@restaurant.com',
        address: '837 W. Marshall Lane, IA 50158, Chennai',
      },
    },
    {
      img: r2,
      title: 'Quality ingredients for a healthy life.',
      description: 'We believe that dining is not just about food, but also about the overall experience.',
      Author: 'Akshat',
      contact: {
        rname:'FineDine',
        phone: '9834888309',
        email: 'finedine@restaurant.com',
        address: '837 W. Marshall Lane, IA 50158, Kanpur',
      },
    },
    // Add more slides as needed
  ];

  return (
    <>
    <div className="suggestionbox" id='suggestions'>
      <div className="suggestion">
        <h1 className='sh'>Suggestions</h1>
        <p className='shp'>Get Suggestions from Verified Users</p>
        <div className="carousel-containers">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div className="carousel-slides" key={index}>
                <div className="suggestionbox2">
                    <img src={slide.img} alt={slide.title} className="carousel-images" />
                    <div className="suggestionbtn">
                        <button className="btns">Find Location</button>
                        <button className="btns2">View Menu</button>
                        <button className="btns3">Order Online</button>
                    </div>
                </div>
                <div className="carousel-contacts">
                    <h3>{slide.contact.rname}</h3>
                    <p><i className="fas fa-phone"></i> {slide.contact.phone}</p>
                    <p><i className="fas fa-envelope"></i> {slide.contact.email}</p>
                    <p><i className="fas fa-map-marker-alt"></i> {slide.contact.address}</p>
                </div>
                <div className="carousel-contents">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p><br/>
                  <p>By-{slide.Author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    
    <div className="seplinebox">
      <div className="sepline"></div>
    </div>
    </>
  );
}

export default Suggestion;
