import './index.scss';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container, Row } from 'react-bootstrap';
import { FaQuoteRight } from 'react-icons/fa';
import customer1 from '../../assets/images/client1.jpg'
import customer2 from '../../assets/images/client2.jpg'
import customer3 from '../../assets/images/Client3.jpg'
import customer4 from '../../assets/images/Client4.jpg'


const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, // Default arrows enabled
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
      
      const testimonials = [
        {
          id: 1,
          name: "LusDen",
          role: "magna aliqua. Ut",
          image: customer1,
          feedback:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
        },
        {
          id: 2,
          name: "Zen Court",
          role: "magna aliqua. Ut",
          image:customer2,
          feedback:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
        },
        {
          id: 3,
          name: "John Doe",
          role: "magna aliqua. Ut",
          image: customer3,
          feedback:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
        },
        {
          id: 4,
          name: "Jane Smith",
          role: "magna aliqua. Ut",
          image: customer4,
          feedback:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
        },
      ];
    
      return (
        <div className="testimonial-slider-container ">
            <Container>
                <Row>                        
                    <div className='section-title'>
                        <h2>
                            What says our <span>Customers</span>
                        </h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                        </p>
                    </div>
                    <Slider {...settings}>
                        {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            {/* Profile Image */}
                            <div className="testimonial-image">
                            <img src={testimonial.image} alt={testimonial.name} />
                            </div>
                            {/* Content */}
                            <div className="testimonial-content">
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <h6>{testimonial.name}</h6>
                                        <p className="testimonial-role">{testimonial.role}</p>
                                    </div>
                                    <FaQuoteRight />
                                </div>
                            
                            <p className="testimonial-feedback">{testimonial.feedback}</p>
                            </div>
                            
                        </div>
                        ))}
                    </Slider>
                </Row>
            </Container>
        </div>
    )
};
export default Testimonial;