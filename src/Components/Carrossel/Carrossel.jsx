//BOOTSTRAP
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap'

//ASSETS
//Carrossel
import firstImage from '../../Assets/Carrossel/01.jpeg'
import secondImage from '../../Assets/Carrossel/02.jpeg'
import thirdImage from '../../Assets/Carrossel/03.jpeg'
//Thumbs
import image1 from '../../Assets/Thumbs/image1.jpg'
import image2 from '../../Assets/Thumbs/image2.jpg'
import image3 from '../../Assets/Thumbs/image3.jpg'

//CSS
import styles from './Carrossel.module.css'


export const Carrossel = () => {
    return (
      <div className={styles.carrosselContainer}>
        <Carousel data-bs-theme="white" className={styles.carrossel}>
          <Carousel.Item>
            <img
              className={styles.firstImage}
              src={firstImage}
              alt="Linda Vista"
            />
            <Carousel.Caption>
              <h5>Linda Vista</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.secondImage}
              src={secondImage}
              alt="Floresta"
            />
            <Carousel.Caption>
              <h5>Floresta</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.thirdImage}
              src={thirdImage}
              alt="Cachoeira"
            />
            <Carousel.Caption>
              <h5>Cachoeira</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container>
      <Row className={styles.thumbs}>
        <Col xs={6} md={3}>
          <Image src={image1} thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src={image2} thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src={image3} thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src={image3} thumbnail />
        </Col>
      </Row>
    </Container>
      </div>
    );
  };