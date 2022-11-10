import React from 'react'
import '../css/general.css';
import logo from '../images/logoplaceholder.png'

//*TODO -- Base de la Navbar (Estilo) -- 

const NavbarMain = () => {

    // --- HTML --- //
    return (
        <div className='centrar'>
            <img className='nav-img d-inline-block' src={logo} />
        </div>
    )
}

export default NavbarMain