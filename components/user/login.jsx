import React, { useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector} from 'react-redux'
import { useRouter } from 'next/router'
import { addUser, loginUser, getUser, logoutUser, setToken } from '../../store/user'

const validationsLogin = {
  email: {
    required: {value: true, message: "Email is required"}
  },
  password: {
    required: {value: true, message: "Password is required"}
  }
}

const validationsRegister = {
  name: {
      required: {value: true, message: "Name is required"}
  },
  email: {
    required: {value: true, message: "Email is required"}
  },
  password: {
    required: {value: true, message: "Password is required"}
  },
  age: {
    required: {value: true, message: "Age is required"}
  }
}

const Login = () => {
  const router = useRouter()
  const {register, handleSubmit, errors} = useForm()
  const { register: registerLogin,
          errors: errorsLogin,
          handleSubmit: handleSubmitLogin
        } = useForm()

  const dispatch = useDispatch()
  const { loading, error, token} = useSelector(state => state.user)

  const userLogin = data => {
    dispatch(loginUser(data))
  }

  const registerUser = data => {
    dispatch(addUser(data))
  }

  const userLogout = () => {
    dispatch(logoutUser())
  }

  const fetchUser = () => {
    dispatch(getUser())
  }

  useEffect(() => {
    dispatch(setToken())
  }, [loading])

  useEffect(() => {
    if (token.length > 0) {
      router.push('/')
    }
  }, [token])

  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <h1 className={styles.title}>
            Welcome to ToDo App
          </h1>
          <p className={styles.description}>
            Get started by logging in
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form id="loginForm" onSubmit={handleSubmitLogin(data => userLogin(data))}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" ref = { registerLogin(validationsLogin.email) }/>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Enter Password" ref = { registerLogin(validationsLogin.password) }/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Click to Login
            </Button>
          </Form>
        </Col>
        <Col>
          <Form id="registerForm" onSubmit={handleSubmit(data => registerUser(data))} >
            <Form.Group controlId="registerName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter name" ref = { register(validationsRegister.name) }/>
            </Form.Group>

            <Form.Group controlId="registerEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" ref = { register(validationsRegister.email) }/>
            </Form.Group>

            <Form.Group controlId="registerPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" ref = { register(validationsRegister.password) }/>
            </Form.Group>

            <Form.Group controlId="registerAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" name="age"  placeholder="Enter age" ref = { register(validationsRegister.age) } />
            </Form.Group>
            <Button variant="primary" type="submit">
              Click to Register
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={userLogout}>
            Click to Logout
          </Button>
        </Col>
        <Col>
          <Button variant="primary" onClick={fetchUser}>
            Click to Fetch user
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
