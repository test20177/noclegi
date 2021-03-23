import styles from './Header.module.css'
import withMousePosition from '../../hoc/withMousePosition'

function Header(props) {
    
    
    const paralaxStyles = {
        transform: `translate(
                ${props.mouseX / -20}px,
                ${props.mouseY / 120}px`
    }
    
    
    return (
        <header className={`${styles.header}`}>
            <div 
                style={paralaxStyles}
                className={styles.headerImage}>
            </div>
            {props.children} 
        </header>
    )
}

export default withMousePosition(Header)
