//BOOTSTRAP
import { Container, Nav, Navbar, Tab, Tabs } from 'react-bootstrap';

import styles from './Header.module.css'

// HOOKS
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => {navigate('/')}} className={styles.logo}>Bora-Ali</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link eventKey={2} onClick={() => {navigate('/about')}}>
            Sobre
            </Nav.Link>
            <Nav.Link eventKey={3} onClick={() => {navigate('/contact')}}>
            Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}