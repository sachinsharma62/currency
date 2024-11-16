import { Container, Row ,Col} from 'react-bootstrap';
import './index.scss'
import icon1 from '../../assets/images/s1.png'
import icon2 from '../../assets/images/s2.png'
import icon3 from '../../assets/images/s3.png'

const Servicedetail = [
    {
        id: 1,
        icon: icon1,
        alt:'Currency Wallet' ,
        heading: 'Currency Wallet',
        title: 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
    },
    {
        id: 2,
        icon: icon2,
        alt:'Security Storage' ,
        heading: 'Currency Wallet',
        title: 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
    },
    {
        id: 3,
        icon: icon3,
        alt:'Expert Support' ,
        heading: 'Currency Wallet',
        title: 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
    },
]
const Service = () => {
    return(
        <>
            <section className='service-section'>
                <Container>
                    <Row>
                        <div className='section-title'>
                            <h2>
                                Our <span>Services</span>
                            </h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            </p>
                        </div>
                        {Servicedetail.map((item , index) => (
                            <Col md={4}  key={index}>
                                    <div className="box ">
                                        <div className="img-box" >
                                            <img src={item.icon} alt={item.alt} />
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                {item.heading}
                                            </h5>
                                            <p>
                                                {item.title}
                                            </p>
                                            <a href="Read">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                            </ Col>
                        ))}
                        <div className="btn-box">
                            <a href="view">
                                View All
                            </a>
                        </div> 
                    </Row>
                </Container>
            </section>
        </>
    )
};
export default Service;