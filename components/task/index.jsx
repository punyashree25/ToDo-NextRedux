import React, { useEffect } from 'react'
import styles from '../../styles/general.module.css'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector} from 'react-redux'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import {  } from '../../store/task'


const Index = () => {
  const router = useRouter()
  const token = Cookies.get('token');
  if (!token) {
    router.push('/login')
  }

  return (
    <Container>
      <h2>HI!</h2>
    </Container>
  )
}

export default Index;
