import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


// CSS
import styles from './City.module.css';

// ASSETS
import image1 from '../../Assets/Thumbs/image1.jpg';
import image2 from '../../Assets/Thumbs/image2.jpg';
import image3 from '../../Assets/Thumbs/image3.jpg';

// ICONS
import heart from '../../Assets/Icons/heart.svg'
import chat from '../../Assets/Icons/chat.svg'
import arrowup from '../../Assets/Icons/arrow-up-square.svg'
import bookmark from '../../Assets/Icons/bookmark.svg'
import profileImage from '../../Assets/Icons/profileImage.svg'


export function City() {
  return (
    <>
    <Container>
      <Row>
        <Col xs={6} md={4}>
            <div className={styles.user}>
                <p>imagem</p>
                <p>usuario</p>
                <p>1 dia</p>
            </div>
          <Image src={image1} thumbnail />
          <div className={styles.input}>
            <button><img src={heart} alt="curtida" /></button>
            <button><img src={chat} alt="comentário" /></button>
            <button><img src={arrowup} alt="compartilhar" /></button>
            <button><img src={bookmark} alt="salvar" /></button>
          </div>
        </Col>
        <Col xs={6} md={4}>
        <div className={styles.user}>
                <p>imagem</p>
                <p>usuario</p>
                <p>1 dia</p>
            </div>
          <Image src={image2} thumbnail />
          <div className={styles.input}>
            <button><img src={heart} alt="curtida" /></button>
            <button><img src={chat} alt="comentário" /></button>
            <button><img src={arrowup} alt="compartilhar" /></button>
            <button><img src={bookmark} alt="salvar" /></button>
          </div>
        </Col>
        <Col xs={6} md={4}>
        <div className={styles.user}>
                <p>imagem</p>
                <p>usuario</p>
                <p>1 dia</p>
            </div>
          <Image src={image3} thumbnail />
          <div className={styles.input}>
            <button><img src={heart} alt="curtida" /></button>
            <button><img src={chat} alt="comentário" /></button>
            <button><img src={arrowup} alt="compartilhar" /></button>
            <button><img src={bookmark} alt="salvar" /></button>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}