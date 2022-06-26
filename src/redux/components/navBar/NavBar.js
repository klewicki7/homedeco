import React from 'react'
import logo from '../../../image.jpg'
import '../../../styles/NavBar.css'
import Search from './Search'
import Contactos from './Contactos'
import CarroCuenta from './CarroCuenta'
import VariedadProductos from './VariedadProductos'

export default function NavBar() {
  return (
    <div>
      <div className='containerNav'>

        <div className='contactos'>
          <Contactos/>
        </div>

        <div className='busqueda'>
          <div className='logo'>
            <img src={logo} alt='logo' className='img'/>
          </div>
          <div>
            <Search />
          </div>
          <div>
            <CarroCuenta/>
          </div>
        </div>

      </div>

      <div className='containerTypes'>
        <VariedadProductos/>
      </div>

    </div>
  )
}
