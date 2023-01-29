import React from 'react'
import Banner from 'components/Banner'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao() {
  return (
    <main>
        <Banner/>
        {/* Renderizar conteudo da rota aqui */}
        <Outlet/>
    </main>
  )
}
