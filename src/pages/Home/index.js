import './index.scss'
import {Carousel, Col, Container, Row } from 'react-bootstrap';
import heroBg from '../../assets/images/hero-bg.png'
import carouselimg1 from '../../assets/images/slider-img.png'
import Service from '../Service';
import About from '../About';


const carouselItems = [
    {
      id: 1,
      Caption:
        "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.",
      image: carouselimg1,
      alt: "carouselimg1",
    },
    {
      id: 2,
      Caption:
        "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.",
      image: carouselimg1,
      alt: "carouselimg1",
    },
    {
      id: 3,
      Caption:
        "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.",
      image: carouselimg1,
      alt: "carouselimg1",
    },
  ];

const Home = () => {
    return(
        <>
            <div className='hero-bg-wrapper'>
                <div className='hero-bg'>
                    <div classname="bg_img_box">
                        <img src={heroBg} alt={heroBg} />
                    </div>
                </div>
                <section className="slider-section">
                <Carousel className='mb-5' id="customCarousel1">
                    {carouselItems.map((item, index) => (
                        <Carousel.Item key={index}>
                            <Container>
                                <Row>
                                    <Col md={6}>
                                        <div className="detail-box">
                                            <Carousel.Caption as="div" className=''>
                                                <div className='carousel-text p-2'>
                                                    <h1>
                                                        Crypto < br />
                                                        Currency
                                                    </h1>
                                                    <p>{item.Caption}</p>
                                                    <div class="btn-box">
                                                        <a href="#" class="btn1">
                                                            Read More
                                                        </a>
                                                    </div>
                                                </div>
                                            </Carousel.Caption>                                        
                                        </div>  
                                    </Col>
                                    <Col md={6}>
                                        <div class="img-box d-flex align-item-center ">
                                            <img src={item.image} alt={item.alt}  style={{width: '100%'}}/>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Item>
                    ))}
                </Carousel>
                </section>
            </div>
            <Service />
            <About />
        </>
    )
};
export default Home;