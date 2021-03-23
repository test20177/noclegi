import { useContext } from 'react'
import ThemeContext from '../../context/themeContext'

const Footer = () => {
    
    const theme = useContext(ThemeContext)
    
    return (
        <div className={`text-center m-3 text-${theme.color}`}>
            &copy;2021 Noclegi
        </div>
    )
}

export default Footer