import { Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../store/user'
import styles from '../styles/general.module.css'


export default function Header () {
  const dispatch = useDispatch()


  const userLogout = () => {
    dispatch(logoutUser())
  }


  return (
  <div className="header">
    {/* <Container> */}
      <Row className={styles.header}>
        <Col className={styles.format }>
          <h5 >To Do App</h5>
        </Col>
        <Col className={styles.right + ' ' + styles.format}>
          <Button variant="secondary" onClick={userLogout}>Logout</Button>
        </Col>
      </Row>
    {/* </Container> */}
  </div>
  )
}
