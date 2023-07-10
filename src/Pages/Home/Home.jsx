import { Header } from "../../Components/Header/Header"
import { Menu } from "../../Components/Menu/Menu"
import { CaixaConteudo } from "../../Components/CaixaConteudo/CaixaConteudo"

import styles from './Home.module.css'
import { useEffect, useState } from "react"


export const Home = () => {
  const [loaded, setLoaded] = useState(false);

  const children = (
    <>
    <div className={styles.about + (loaded ? ` ${styles.loaded}` : '')}>
    <h1 className={styles.aboutTitle}>Bora Mineirar</h1>
    <p>O Bora Mineirar é fruto das melhores experiências em viagens, passeios e saídas da rotina. A ideia aqui é mostrar um pouco de como pode ser bom dar uma "fugida" do cotidiano. Conheça um pouco das nossas Viagens.</p>
    </div>
    </>
  )

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
    <Header />
    <Menu />
    <CaixaConteudo children={children}/>
    </>
  )
}