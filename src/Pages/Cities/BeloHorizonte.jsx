import React from 'react'
import { City } from '../../Components/City/City'
import { Menu } from '../../Components/Menu/Menu'
import { Header } from '../../Components/Header/Header'
import { CaixaConteudo } from '../../Components/CaixaConteudo/CaixaConteudo'

export const BeloHorizonte = () => {
  const children = (
    <City />
  )

  return (
    <>
    <Header />
    <Menu />
    <CaixaConteudo children={children}/>
    </>
  )
}