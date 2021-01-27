import React, { useEffect } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector} from 'react-redux'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import styles from '../../styles/general.module.css'
import { addTask, updateTask, getAllTasks, deleteTask, getTasksByStatus } from '../../store/task/actions'

const validations = {
  description: {
    required: {value: true, message: "Task description is required"}
  }
}

const Index = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const {register, handleSubmit, errors} = useForm()

  const { tasks } = useSelector(state => state.tasks)

  const token = Cookies.get('token')

  useEffect(() => {
    if (!token) {
      router.push('/login')
    }
    dispatch(getAllTasks())
  }, [])

  const enterTask = data => {
    dispatch(addTask(data))
  }

  const editTask = (event) => {
    let task = {
      id: event.target.name,
      completed: event.target.checked
    }
    dispatch(updateTask(task))
  }

  const removeTask = (event) => {
    let id = event.target.id
    dispatch(deleteTask(id))
  }

  const getCompletedTasks = () => {
    dispatch(getTasksByStatus(true))
  }

  const getPendingTasks = () => {
    dispatch(getTasksByStatus(false))
  }

  const getTasks = () => {
    dispatch(getAllTasks())
  }

  return (
    <Container>
      <Row className={styles.taskRows}>
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
      <Row className={styles.taskRows}>
        <Col>
          <Button variant="success" onClick={getCompletedTasks}>
            Completed tasks
          </Button>
        </Col>
        <Col>
          <Button variant="warning" onClick={getPendingTasks}>
            Pending tasks
          </Button>
        </Col>
        <Col>
          <Button variant="secondary" onClick={getTasks}>
            Show all tasks
          </Button>
        </Col>
      </Row>
      <Row className={styles.taskRows}>
        <Col>
          { tasks.map((task) => {
            return(
              <Row key={task._id}>
                <Col>
                  <input
                    name = {task._id}
                    type = "checkbox"
                    defaultChecked = {task.completed}
                    onChange = {(e) => editTask(e)}
                  />
                </Col>
                <Col>
                  <p>{task.description}</p>
                </Col>
                <Col>
                  <Button variant="danger" onClick={removeTask} id={task._id}>
                    X
                  </Button>
                </Col>
              </Row>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default Index;
