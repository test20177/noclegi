import style from './Menu.module.css'
import useAuth from '../../hooks/useAuth'

function Menu() {

   const [ auth, setAuth ] = useAuth()

    const logout = (e) => {
        e.preventDefault()
        // auth.logout()
        setAuth(false)
    }

    const login = (e) => {
        e.preventDefault()
        // auth.login()
        setAuth(true)
    }

    return (
        <div className={`${style.menuContainer} breadcrumb`} >
            <div>
                <ul className={style.menu}>
                    <li className={style.menuItem}>
                        <a href="#">Home</a>
                    </li>
                    {
                        auth 
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
