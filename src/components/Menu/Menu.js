import style from './Menu.module.css'
import { useContext } from 'react'
import AuthContext from '../../context/authContext'

function Menu() {

    const auth = useContext(AuthContext)

    const logout = (e) => {
        e.preventDefault()
        auth.logout()
    }

    const login = (e) => {
        e.preventDefault()
        auth.login()
    }

    return (
        <div className={`${style.menuContainer} breadcrumb`} >
            <div>
                <ul className={style.menu}>
                    <li className={style.menuItem}>
                        <a href="#">Home</a>
                    </li>
                    {
                        auth.isAuthenticated 
                            ? (
                                <li className={style.menuItem}>
                                    <a href="#" onClick={logout}>Wyloguj</a>
                                </li>
                            ) : (
                                <li className={style.menuItem}>
                                    <a href="#" onClick={login}>Zaloguj</a>
                                </li>
                            )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu
