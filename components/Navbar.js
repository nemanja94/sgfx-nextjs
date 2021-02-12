import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import navbarStyles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={navbarStyles.navbar}>
            <input type="checkbox" id="check" className={navbarStyles.check}></input>
            <label htmlFor="check" className={navbarStyles.checkbtn}>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </label>
            <div className={navbarStyles.logo_container}>
                <Link href="/"><a>SGFX</a></Link>
            </div>
            <div className={navbarStyles.menu_container}>
                <div className={navbarStyles.menu}>
                    <Link href="/">
                        <a className={navbarStyles.active}>Home</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/services"><a>Services</a></Link>
                </div>
            </div>
            <div className={navbarStyles.contact_container}>
                <Link className={navbarStyles.menuItem} href="/contact"><a>Contact</a></Link>
            </div>
        </nav>
    )
}

export default Navbar
