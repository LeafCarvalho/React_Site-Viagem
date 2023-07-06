import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


// CSS
import styles from './City.module.css';

// ICONS
import heart from '../../Assets/Icons/heart.svg'
import chat from '../../Assets/Icons/chat.svg'
import arrowup from '../../Assets/Icons/arrow-up-square.svg'
import bookmark from '../../Assets/Icons/bookmark.svg'


export function City({ picture, user, profileImage }) {
  return (
    <>
    <Container>
        <Col>
            <div className={styles.user}>
                <img src={profileImage} alt="" />
                <p>{user}</p>
                <p>1 dia</p>
            </div>
          <Image src={picture} thumbnail />
          <div className={styles.input}>
            <button><img src={heart} alt="curtida" /></button>
            <button><img src={chat} alt="comentário" /></button>
            <button><img src={arrowup} alt="compartilhar" /></button>
            <button><img src={bookmark} alt="salvar" /></button>
          </div>
        </Col>
    </Container>
    </>
  );
}