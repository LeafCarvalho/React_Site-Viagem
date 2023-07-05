import { Header } from "../../Components/Header/Header"
import { Menu } from "../../Components/Menu/Menu"
import { CaixaConteudo } from "../../Components/CaixaConteudo/CaixaConteudo"

import styles from './About.module.css'


export const About = () => {

  const children = (
    <>
    <div className={styles.about}>
    <h1 className={styles.aboutTitle}>Sobre</h1>
    <p>O Bora Mineirar é fruto das melhores experiências em viagens, passeios e saídas da rotina. A ideia aqui é mostrar um pouco de como pode ser bom dar uma "fugida" do cotidiano. Conheça um pouco das nossas Viagens.</p>
    </div>
    </>
  )

  return (
    <>
    <Header />
    <Menu />
    <CaixaConteudo children={children}/>
    </>
  )
}