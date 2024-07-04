import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import lp from './assets/lp2.jpg'
import r2 from './assets/r2.jpg'

const Italian = () => {
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
            rname:'Aioli Bistro',
            phone: '9857389489',
            email: 'aiolibistro@restaurant.com',
            address: '837 W. Marshall Lane, IA 50158, Chennai',
          },
        },
        {
          img: r2,
          contact: {
            rname:'The Basil Box',
            phone: '9834888309',
            email: 'thebasilbox@restaurant.com',
            address: '837 W. Marshall Lane, IA 50158, Kanpur',
          },
        },
        {
          img: r2,
          contact: {
            rname:'The Backyard',
            phone: '9834888309',
            email: 'thebackyard@restaurant.com',
            address: '837 W. Marshall Lane, IA 50158, Kanpur',
          },
        },
        // Add more slides as needed
      ];
    
      return (
        <div className="suggestionbox" id='suggestions'>
          <div className="suggestion">
            <h1 className='sh'>Italian Food</h1>
            <p className='shp'>Get Authentic Intalian taste</p>
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

export default Italian
