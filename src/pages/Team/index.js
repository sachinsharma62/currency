import { Col, Container, Row } from 'react-bootstrap';
import './index.scss'
import teammember1 from '../../assets/images/team-1.jpg'
import teammember2 from '../../assets/images/team-2.jpg'
import teammember3 from '../../assets/images/team-3.jpg'
import teammember4 from '../../assets/images/team-4.jpg'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const teamdetails = [
    {
        id:1 ,
        image: teammember1,
        alt:'member1',
        membername:'Joseph Brown',
        role:'Marketing Head',
        social:
        <>
            <a href=''><FaFacebookF /></a>
            <a href=''><FaTwitter /></a>
            <a href=''><FaLinkedinIn /></a>
            <a href=''><FaInstagram /></a>
            <a href=''><FaYoutube /></a>
        </>,
    },
    {
        id:2 ,
        image: teammember2,
        alt:'member2',
        membername:'Joseph Brown',
        role:'Marketing Head',
        social:
        <>
            <a href=''><FaFacebookF /></a>
            <a href=''><FaTwitter /></a>
            <a href=''><FaLinkedinIn /></a>
            <a href=''><FaInstagram /></a>
            <a href=''><FaYoutube /></a>
        </>,
    },
    {
        id:3 ,
        image: teammember3,
        alt:'member3',
        membername:'Joseph Brown',
        role:'Marketing Head',
        social:
        <>
            <a href=''><FaFacebookF /></a>
            <a href=''><FaTwitter /></a>
            <a href=''><FaLinkedinIn /></a>
            <a href=''><FaInstagram /></a>
            <a href=''><FaYoutube /></a>
        </>,
    },
    {
        id:4 ,
        image: teammember4,
        alt:'member4',
        membername:'Joseph Brown',
        role:'Marketing Head',
        social:
        <>
            <a href=''><FaFacebookF /></a>
            <a href=''><FaTwitter /></a>
            <a href=''><FaLinkedinIn /></a>
            <a href=''><FaInstagram /></a>
            <a href=''><FaYoutube /></a>
        </>,
    },
]
const Team = () => {
    return(
        <>
        <section className='team-section'>
            <Container>
                <div className='section-title'>
                    <h2>
                        Our <span>Team</span>
                    </h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                    </p>
                </div>
                <div className="team-wrapper">
                <Row>
                    {teamdetails.map((item ,index) =>(
                        <Col lg={3} key={index}>
                            <div className='box'>
                                <div className='img-box'>
                                    <img src={item.image} alt={item.alt} />
                                </div>
                                <div className='detail-box'>
                                    <h4>{item.membername}</h4>
                                    <p>{item.role}</p>
                                </div>
                                <div className="profile-box">
                                    {item.social}
                                </div>
                            </div>
                        </Col>
                    )
                )}
                </Row>
                </div>
            </Container>
        </section>
        </>
    )
};
export default Team;