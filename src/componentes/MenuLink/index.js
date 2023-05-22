import styles from './MenuLink.module.css'
import { NavLink } from 'react-router-dom'


export default function MenuLink({ children, to }) {

    return (
        <NavLink className={({ isActive }) => isActive ? `${styles.link} ${styles.linkDestacado}` : `${styles.link}`} to={to} end>
            {children}
        </NavLink >
    )
}
