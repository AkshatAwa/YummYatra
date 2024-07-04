import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import lp from './assets/lp2.jpg'
import r2 from './assets/r2.jpg'

const Cafes = () => {
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
          contact: {
            rname:'La eMe Cafe',
            phone: '9857389489',
            email: 'La eMe Cafe@restaurant.com',
            address: '837 W. Marshall Lane, IA 50158, Chennai',
          },
        },
        {
          img: r2,
          contact: {
            rname:'Shakespeare Bistro & Cafe',
            phone: '9834888309',
            email: 'Shakespeare Bistro & Cafe@restaurant.com',
            address: '431/12 Saket, New Delhi',
          },
        },
        {
            img: r2,
            contact: {
              rname:'Sardar-Ji-Bakhsh Coffee',
              phone: '9834888309',
              email: 'Sardar-Ji-Bakhsh Coffee@restaurant.com',
              address: 'Kidwai nagar, Kanpur',
            },
        },
        // Add more slides as needed
      ];
    
      return (
        <div className="suggestionbox" id='suggestions'>
          <div className="suggestion">
            <h1 className='sh'>Cafe's</h1>
            <p className='shp'>See fabulous cafe around you</p>
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
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
  )
}

export default Cafes
