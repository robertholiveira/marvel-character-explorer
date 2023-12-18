
import styles from "./Header.module.scss"

const Header = () => {
    return (<header className={styles.header}>
        <img src='/images/marvel-logo.png' />
        <h1>Marvel Characters</h1>
    </header>)
}

export default Header