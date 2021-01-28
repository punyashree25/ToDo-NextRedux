import styles from '../styles/general.module.css'

export default function Footer () {
  return (
    <footer className={styles.footer}>
        <a
          href="https://documenter.getpostman.com/view/8858534/SW7dX7JG#c438d742-5050-4dd1-a338-86f3d00cc4e7"
          target="_blank"
          rel="noopener noreferrer"
        >
          ToDo Api {' '}
          <img src="../PostmanLogo.png" alt="Postman Logo" className={styles.logo} />
        </a>
      </footer>
  )
}
