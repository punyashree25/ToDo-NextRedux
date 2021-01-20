import {
  ACTION_ADD_TASK,
  ACTION_UPDATE_TASK,
  ACTION_DELETE_TASK,
  ACTION_GET_ALL_TASKS,
  ACTION_GET_COMPLETED_TASKS,
  ACTION_GET_PAGE_TASKS,
  ACTION_GET_TASK,
  ACTION_UPDATE_TASK_API_STATUS
} from './action_types'
import {
  TASK_API_RESET,
  TASK_API_INITIATED,
  TASK_API_COMPLETED,
  TASK_API_FAILED
} from './api_status'
import axios from 'axios'
import axios_s from '../../lib/axios'

import { axiosSetup } from '../../lib/axios-settings'

axiosSetup();

const initateTaskRequest = () => {
  return {
    type: ACTION_UPDATE_TASK_API_STATUS,
    data: {
      api_status: TASK_API_INITIATED
    }
  }
}

const completeTaskRequest = () => {
  return {
    type: ACTION_UPDATE_TASK_API_STATUS,
    data: {
      api_status: TASK_API_COMPLETED
    }
  }
}

const failedTaskRequest = () => {
  return {
    type: ACTION_UPDATE_TASK_API_STATUS,
    data: {
      api_status: TASK_API_FAILED
    }
  }
}

export const resetProfileApiStatus = function () {
  return {
    type: ACTION_UPDATE_TASK_API_STATUS,
    data: {
      api_status: TASK_API_RESET
    }
  }
}


export const addTask = (task) => {
  return (dispatch) => {
    dispatch(initateTaskRequest())
    console.log(task);
    return axios
      .post('task', {
        ...task
      })
      .then((response) => {
        console.log(response);
        dispatch(completeTaskRequest())
        const { data } = response
        dispatch({
          type: ACTION_ADD_TASK,
          data: {
            ...data,
            task: data.data
          }
        })
        return response
      })
      .catch((error) => {
        console.log(error.response);
        dispatch(failedTaskRequest())
      })
  }
}

export const getAllTasks = () => {
  return (dispatch) => {
    dispatch(initateTaskRequest())
    return axios
      .get('/task')
      .then(() => {
        console.log(response);
        dispatch(completeTaskRequest())
        const { data } = response
        dispatch({
          type: ACTION_GET_ALL_TASKS,
          data: {
            ...data,
            task: data.data,
            count: data.count
          }
        })
        return response
      })
      .catch(() => {
        dispatch(failedTaskRequest())
      })
  }
}
