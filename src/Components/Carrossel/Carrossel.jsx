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
import { CaixaConteudo } from '../CaixaConteudo/CaixaConteudo'

const children = (
<div className={styles.carrosselContainer}>
        <Carousel data-bs-theme="white" className={styles.carrossel}>
          <Carousel.Item>
            <img
              className={styles.firstImage}
              src={firstImage}
              alt="Serra da Moeda - MG"
            />
            <Carousel.Caption>
              <h3>Serra da Moeda - MG</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.secondImage}
              src={secondImage}
              alt="Parque Tanguá - PR"
            />
            <Carousel.Caption>
              <h3>Parque Tanguá - PR</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.thirdImage}
              src={thirdImage}
              alt="São Gonçalo do Rio das Pedras - MG"
            />
            <Carousel.Caption>
              <h3>São Gonçalo do Rio das Pedras - MG</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
)

export const Carrossel = () => {
    return (
      <CaixaConteudo children={children}/>
    );
  };