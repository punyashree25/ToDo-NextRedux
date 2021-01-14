import axios from '../lib/axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

export const addUser = createAsyncThunk(
  'user/register',
  async(userData, thunkAPI) => {
    try {
      console.log(userData);
      const response = await axios(
        '/user/register',
        {
          method: 'POST',
          data: userData
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/login',
  async(loginData, thunkAPI) => {
    try {
      const response = await axios(
        '/user/login',
        {
          method: 'POST',
          data: loginData
        }
      )
      Cookies.set('token', response.data.token);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error.message)
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

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
      console.log(response.data);
      Cookies.remove('token')
      return response.data
    } catch (error) {
      console.log(error.message)
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

export const getUser = createAsyncThunk(
  'user/me',
  async(_, thunkAPI) => {
    try {
      const response = await axios('/user/me');
      console.log(response.data);
      return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

export const updateUser = createAsyncThunk()

export const deleteUser = createAsyncThunk()

const cookieToken = Cookies.get('company');

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: true,
    user: {},
    token: cookieToken ? JSON.parse(cookieToken) : {},
    error: {}
  },
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [addUser.pending]: (state) => {
      delete state.error;
      delete state.success;
      state.loading = true;
    },
    [addUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.loading = false;
      state.success = "User Added";
    },
    [addUser.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
    [loginUser.pending]: (state) => {
      delete state.error;
      delete state.success;
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.loading = false;
      state.success = "User Logged in";
    },
    [loginUser.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
    [getUser.pending]: (state) => {
      delete state.error
    },
    [getUser.fulfilled]: (state, action) => {
        state.profile = action.payload;
        state.loading = false;
    },
    [getUser.rejected]: (state, action) => {
        state.error = action.payload.error
    },
    [logoutUser.pending]: (state) => {
      delete state.error
    },
    [logoutUser.fulfilled]: (state, action) => {
        state.profile = action.payload;
        state.loading = false;
    },
    [logoutUser.rejected]: (state, action) => {
        state.error = action.payload.error
    },
  }
})

export default userSlice.reducer