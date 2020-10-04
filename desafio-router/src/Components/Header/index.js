import React from 'react'
import styles from './styles.module.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className={styles.header}>
            <ul>
                <li>
                    <NavLink activeClassName={styles.active} className={styles.link}  to="/">Produtos</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active}  className={styles.link}  to="/contato">Contato</NavLink>
                </li>
            </ul>
            Header
        </nav>
    )
}

export default Header
