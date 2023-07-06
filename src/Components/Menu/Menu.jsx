// ESTILO
import styles from './Menu.module.css';

// MODULOS
import Nav from 'react-bootstrap/Nav';

// HOOKS
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


export const Menu = () => {

  const navigate = useNavigate();

  //seta estado do hamburguerMenu como aberto ou fechado 
  const [show, setShow] = useState(false);

  const [openMinas, setOpenMinas] = useState(false);

//ABRIR SUBMENUS
  const togglePainel = () => {
    setOpenMinas(!openMinas);
  };


  return (
    <div className={styles.menu}>

      {!show ? (<img className={styles.abrirMenu}  alt="Ícone de abrir menu" onClick={() => setShow(true)} />) : 
      (<img className={styles.fecharMenu} src={fecharMenu} alt="Ícone de fechar menu" onClick={() => setShow(false)} />)}

      <aside className={show ? styles.hamburguerMenu : styles.lateralMenu}>
        
        <Nav defaultActiveKey="/dashboard"

          className={styles.nav}>

            <Nav.Link href="#" className={styles.navItem} onClick={togglePainel}>
            <div>
              <div><i class="bi bi-columns-gap"></i>Minas Gerais</div>
              {!openMinas ? (<i class="bi bi-chevron-down"></i>) : (<i class="bi bi-chevron-up"></i>)}
            </div>
            <div className={openMinas ? styles.submenu : styles.noneSubmenu} >
              <Nav.Link className={styles.navSubItem}
              onClick={() => {
                  navigate("/mg/belohorizonte");
                }}>Belo Horizonte</Nav.Link>

              <Nav.Link className={styles.navSubItem} 
              onClick={() => {
                navigate("#");
              }}>Lavras Novas</Nav.Link>

              <Nav.Link className={styles.navSubItem} 
              onClick={() => {
                navigate("#");
              }}>Ouro Preto</Nav.Link>
            </div>
          </Nav.Link>
        </Nav>
      </aside>
    </div >
  )
}