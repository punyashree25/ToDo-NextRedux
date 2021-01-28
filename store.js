import { configureStore } from '@reduxjs/toolkit'
import user from './store/user'
import tasks from './store/task/reducers'

export default configureStore({
  reducer: {
      user: user,
      tasks: tasks,
  },
  devTools: true,
})
