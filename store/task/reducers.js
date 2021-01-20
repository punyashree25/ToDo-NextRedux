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

function task(state = initialState, action) {
  const { data, type } = action
  switch (type) {
    case ACTION_ADD_TASK:
      const { task, count } = data
      let { tasks } = state
      const updatedTasks = [...tasks, task]
      return {
        ...state,
        tasks: updatedTasks,
        task,
        count
      }
    case ACTION_UPDATE_TASK:
      break;

    case ACTION_DELETE_TASK:

      break;

    case ACTION_GET_ALL_TASKS:

      break;

    case ACTION_GET_COMPLETED_TASKS:

      break;

    case ACTION_GET_PAGE_TASKS:

      break;

    case ACTION_GET_TASK:

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

export default task
