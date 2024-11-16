import { Col, Container, Row } from 'react-bootstrap';
import './index.scss'
import whyimage1 from '../../assets/images/w1.png'
import whyimage2 from '../../assets/images/w2.png'
import whyimage3 from '../../assets/images/w3.png'
import whyimage4 from '../../assets/images/w4.png'

    const whydetails = [
        {
            id: 1,
            image: whyimage1,
            heading:'Expert Management',
            details:'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
        },
        {
            id: 2,
            image: whyimage2,
            heading:'Expert Management',
            details:'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
        },
        {
            id: 3,
            image: whyimage3,
            heading:'Expert Management',
            details:'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
        },
        {
            id: 4,
            image: whyimage4,
            heading:'Expert Management',
            details:'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
        },
    ]
const WhyUs = () => {
    return(
        <>
            <section className='whyus-section'>
                <Container>
                    <Row>
                        <div class="section-title">
                            <h2>
                                Why Choose <span>Us</span>
                            </h2>
                        </div>
                        {whydetails.map((item , index) =>   (
                            <Col xs={12} key={index}>
                                <div className="box">
                                    <div className="img-box">
                                        <img src={item.image} alt={item.alt} />
                                    </div>
                                    <div className="detail-box">
                                        <h4>{item.heading}</h4>
                                        <p>{item.details}</p>
                                    </div>
                                </div>
                            </Col>   
                        ) )}
                        
                    </Row>
                </Container>
            </section>
        </>
    )
};
export default WhyUs;