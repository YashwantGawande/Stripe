import React from 'react'
import logo from '../images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context/context'

const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
    const displaySubmenu = (e) => {
        const page = e.target.textContent
        const tempBtn = e.target.getBoundingClintRect()
        const center = (tempBtn.left + tempBtn.right) / 2
        const bottom = tempBtn.bottom - 3
        openSubmenu(page, { center, bottom })
    }

    const handleSubmenu = (e) =>{
        if(!e.target.classList.contains('link-btn')){
            closeSubmenu()
        }
    }

    return (
        <nav className='nav' onMouseOver={handleSubmenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="stripe" />
                    <button className="toggle-btn btn" onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            Products
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            Developers
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            Company
                        </button>
                    </li>
                    <button className='btn signin-btn'>
                        Sign in
                    </button>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar