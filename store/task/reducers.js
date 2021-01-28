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

const initialState = {
  task: {},
  tasks: [],
  taskCount: 0
}

export default function tasks (state = initialState, action) {
  const { data, type } = action

  switch (type) {
    case ACTION_ADD_TASK:
      const { task } = data
      let { tasks } = state
      return {
        ...state,
        task: task,
      }
      break;
    case ACTION_UPDATE_TASK:
      let { updatedtask } = data.task
      return {
        ...state,
        task: updatedtask,
      }
      break;

    case ACTION_DELETE_TASK:
      return {
        ...state,
        task: {}
      }
      break;

    case ACTION_GET_ALL_TASKS:
      return {
        ...state,
        tasks: data.tasks,
        taskCount: data.taskCount
      }
      break;
    case ACTION_GET_COMPLETED_TASKS:
      return {
        ...state,
        tasks: data.tasks,
        taskCount: data.taskCount
      }
      break;

    case ACTION_UPDATE_TASK_API_STATUS:
      const { api_status } = data;
      return {
        ...state,
        api_status
      }
    default:
      return state
  }
}
