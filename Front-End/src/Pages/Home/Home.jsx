//Components
import { Header } from "../../Components/Header/Header"
import { Menu } from "../../Components/Menu/Menu"
import { CaixaConteudo } from "../../Components/CaixaConteudo/CaixaConteudo"
//Hooks
import { useEffect, useState } from "react"
//Css
import styles from './Home.module.css'

export const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setExpanded(!expanded);
  }

  const children = (
    <div className={`${styles.content} ${expanded ? '' : styles.menuClosed}`}>
      <div className={styles.about + (loaded ? ` ${styles.loaded}` : '')}>
        <h1 className={styles.aboutTitle}>Bora Mineirar</h1>
      </div>
    </div>
  )

  return (
    <>
      <Header />
      {menuVisible && <Menu />}
      <div
        className={`${styles.arrow} ${expanded ? styles.expanded : ""}`}
        onClick={toggleMenu}
      >
        {menuVisible ? (
          <div className={styles.leftArrow}></div>
        ) : (
          <div className={styles.rightArrow}></div>
        )}
      </div>
      {menuVisible ? (
        <CaixaConteudo>
          <div className={styles.openMenu}>
            <h1>Seja Bem-Vindo</h1>
            <p>
              O Bora Mineirar é fruto das melhores experiências em viagens,
              passeios e saídas da rotina. A ideia aqui é mostrar um pouco de
              como pode ser bom dar uma "fugida" do cotidiano. Conheça um pouco
              das nossas Viagens.
            </p>
          </div>
        </CaixaConteudo>
      ) : (
        children
      )}
    </>
  );
}
