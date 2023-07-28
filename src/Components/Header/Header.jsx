//BOOTSTRAP
import { Container, Nav, Navbar, Tab, Tabs } from 'react-bootstrap';
import logo from '../../Assets/Logo/logo.png'

import styles from './Header.module.css'

// HOOKS
import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <Navbar collapseOnSelect expand="lg" className={styles.header}>
      <Container fluid className={styles.content}>
        <Navbar.Brand onClick={() => {navigate('/')}} className={styles.logo}>
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to={"/"} className="nav-link"> {/* Adicionando a classe "nav-link" */}
              Home
            </Link>
            {/* Adicionando o espaçamento entre as opções */}
            <span style={{ marginRight: '1rem' }}></span>
            <Link to={"/contact"} className="nav-link"> {/* Adicionando a classe "nav-link" */}
              Contato
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}