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

import 'react-responsive-carousel/lib/styles/carousel.min.css';


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
              <h3>Linda Vista</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.secondImage}
              src={secondImage}
              alt="Floresta"
            />
            <Carousel.Caption>
              <h3>Floresta</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.thirdImage}
              src={thirdImage}
              alt="Cachoeira"
            />
            <Carousel.Caption>
              <h3>Cachoeira</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  };