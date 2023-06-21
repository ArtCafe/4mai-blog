import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import postService from './postService'
import axios from 'axios'



const initialState = {
  posts: [],
  post: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}
export const createPostt = createAsyncThunk(
  'post/create',

  async (params, thunkAPI) => {
    console.log(params);
      try {
         const token = thunkAPI.getState().auth.user.token
          const { data } = await axios.post('/api/posts', params, token)
          return data
      } catch (error) {
          console.log(error)
      }
  },
)
// Create new goal
export const createPost = createAsyncThunk(
  'post/create',
  async (params, thunkAPI) => {

    try {
      const token = thunkAPI.getState().auth.user.token
      return await postService.createPost(params, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user goals
export const getPosts = createAsyncThunk(
  'posts/getAll',
  async (_, thunkAPI) => {
    try {
    //  const token = thunkAPI.getState().auth.user.token
      return await postService.getPosts({/*token*/})
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
/*
// Delete user goal
export const deleteGoal = createAsyncThunk(
  'goals/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await goalService.deleteGoal(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
*/
export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts.push(action.payload)
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = action.payload
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
     /* .addCase(deleteGoal.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals = state.goals.filter(
          (goal) => goal._id !== action.payload.id
        )
      })
      .addCase(deleteGoal.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      */
  },
})

export const { reset } = postSlice.actions
export default postSlice.reducer
