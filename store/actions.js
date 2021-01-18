import Cookies from 'js-cookie'
import axios from '../lib/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const logoutUser = createAsyncThunk(
  'user/logout',
  async(thunkAPI) => {
    try {
      const response = await axios(
        '/user/logout',
        {
          method: 'POST'
        }
      )
      Cookies.remove('token')
      return response.data
    } catch (error) {
      console.log(error.message)
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)
