import React, { useEffect } from 'react'
import styles from '../../styles/general.module.css'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector} from 'react-redux'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { addTask } from '../../store/task/actions'


const validations = {
  description: {
    required: {value: true, message: "Task description is required"}
  }
}

const Index = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const {register, handleSubmit, errors} = useForm()

  const token = Cookies.get('token')
  // if (!token) {
  //   router.push('/login')
  // }

  const enterTask = data => {
    console.log(data);
    dispatch(addTask(data))
  }


  return (
    <Container>
      <Row>
        <Col>
          <Form id="addForm" onSubmit={handleSubmit(data => enterTask(data))}>
            <Form.Group controlId="description">
              <Form.Label>Task: </Form.Label>
              <Form.Control type="description" name="description" placeholder="Enter Task" ref = { register(validations.description) }/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Task
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Index;
