import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import './NavbarDark.css'
import './NavbarLight.css'

const Navbar = () => {
    const { toggleTheme, darkMode } = useContext(ThemeContext)

    return (
        <nav className={`${darkMode ? 'NavbarDark' : 'NavbarLight'}` }>
            <div></div>
                <Link to="/">Posts and Comments</Link>
                <button onClick={toggleTheme}>Change Theme</button>
        </nav>
    )
}

export default Navbar;