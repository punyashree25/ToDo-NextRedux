import {
  ACTION_ADD_TASK,
  ACTION_UPDATE_TASK,
  ACTION_DELETE_TASK,
  ACTION_GET_ALL_TASKS,
  ACTION_GET_COMPLETED_TASKS,
  ACTION_UPDATE_TASK_API_STATUS
} from './action_types'
import {
  TASK_API_RESET,
  TASK_API_INITIATED,
  TASK_API_COMPLETED,
  TASK_API_FAILED
} from './api_status'
import axios from 'axios'

import { axiosSetup } from '../../lib/axios-settings'
axiosSetup();

const initiateTaskRequest = () => {
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
    dispatch(initiateTaskRequest())
    return axios
      .post('task', {
        ...task
      })
      .then((response) => {
        dispatch(completeTaskRequest())
        dispatch(getAllTasks())
        const { data } = response
        dispatch({
          type: ACTION_ADD_TASK,
          data: {
            task: data.data
          }
        })
        return response
      })
      .catch((error) => {
        console.log(error);
        dispatch(failedTaskRequest())
      })
  }
}

export const updateTask = (task) => {
  return (dispatch) => {
    dispatch(initiateTaskRequest())
    return axios
      .put('task/' + task.id, {
        completed: task.completed
      })
      .then((response) => {
        dispatch(completeTaskRequest())
        dispatch(getAllTasks())
        const { data } = response
        dispatch({
          type: ACTION_UPDATE_TASK,
          data: {
            task: data.data
          }
        })
        return response
      })
      .catch((error) => {
        console.log(error);
        dispatch(failedTaskRequest())
      })
  }
}

export const getAllTasks = () => {
  return (dispatch) => {
    dispatch(initiateTaskRequest())
    return axios
      .get('/task')
      .then((response) => {
        dispatch(completeTaskRequest())
        const { data } = response
        dispatch({
          type: ACTION_GET_ALL_TASKS,
          data: {
            tasks: data.data,
            taskCount: data.count
          }
        })
        return response
      })
      .catch(() => {
        dispatch(failedTaskRequest())
      })
  }
}

export const getTasksByStatus = (status) => {
  return (dispatch) => {
    dispatch(initiateTaskRequest())
    return axios
      .get('/task', {
        params: {
          completed: status
        }
      })
      .then((response) => {
        dispatch(completeTaskRequest())
        const { data } = response
        dispatch({
          type: ACTION_GET_COMPLETED_TASKS,
          data: {
            tasks: data.data,
            taskCount: data.count
          }
        })
        return response
      })
      .catch(() => {
        dispatch(failedTaskRequest())
      })
  }
}

export const deleteTask = (id) => {
  return (dispatch) => {
    dispatch(initiateTaskRequest)
    return axios
      .delete('task/' + id)
      .then((response => {
        dispatch(completeTaskRequest())
        dispatch(getAllTasks())
        dispatch({
          type: ACTION_DELETE_TASK,
          data: {
            task: response.data
          }
        })
        return response
      }))
      .catch((error) => {
        console.log(error);
        dispatch(failedTaskRequest())
      })
  }
}
