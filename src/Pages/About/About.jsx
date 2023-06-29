import { Header } from "../../Components/Header/Header"

import styles from './About.module.css'


export const About = () => {
  return (
    <>
    <Header />
    <div className={styles.about}>
    <h1 className={styles.aboutTitle}>Sobre</h1>
    <p>O Bora Mineirar é fruto das melhores experiências em viagens, passeios e saídas da rotina. A ideia aqui é mostrar um pouco de como pode ser bom dar uma "fugida" do cotidiano. Conheça um pouco das nossas Viagens.</p>
    </div>
    </>
  )
}