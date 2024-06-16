import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { httpHelper } from '@/utils'
import { REQUEST_STATUS } from '@constants'
import { dispatchEvent } from '@events'

export const fetchUserList = createAsyncThunk('get-user-list', async () => {
  return httpHelper.makeGetRequest({
    url: '/users',
    baseURL: 'https://jsonplaceholder.typicode.com'
  })
})

export const saveUserList = createAsyncThunk('save-user-list', async (payload) => {
  return httpHelper.makePostRequest({
    url: '/posts',
    baseURL: 'https://jsonplaceholder.typicode.com',
    postBody: payload
  })
})

const initialState = {
  getUserRequestStatus: REQUEST_STATUS.IDLE,
  saveUserRequestStatus: REQUEST_STATUS.IDLE,
  userList: [{}]
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  extraReducers(builder) {
    //fetchUserList
    builder
      .addCase(fetchUserList.pending, (state, action) => {
        state.getUserRequestStatus = REQUEST_STATUS.LOADING
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.getUserRequestStatus = REQUEST_STATUS.SUCCESS
        if (action.payload?.data) {
          state.userList = action.payload.data.map((item) => {
            return {
              name: item.name,
              value: item.id
            }
          })
        }
      })
      .addCase(fetchUserList.rejected, (state, action) => {
        state.getUserRequestStatus = REQUEST_STATUS.FAILED
        state.error = action.error.message
      })
    //saveUserList
    builder
      .addCase(saveUserList.pending, (state, action) => {
        state.saveUserRequestStatus = REQUEST_STATUS.LOADING
      })
      .addCase(saveUserList.fulfilled, (state, action) => {
        state.saveUserRequestStatus = REQUEST_STATUS.SUCCESS
        dispatchEvent('showNotification', {
          type: REQUEST_STATUS.SUCCESS,
          message: 'Form başarılı şekilde gönderilmiştir.'
        })
      })
      .addCase(saveUserList.rejected, (state, action) => {
        console.log('rejected')
        state.saveUserRequestStatus = REQUEST_STATUS.FAILED
        state.error = action.error.message
        dispatchEvent('showNotification', {
          type: REQUEST_STATUS.FAILED,
          message: 'Form gönderirken hata oluştu.'
        })
      })
  }
})

export default adminSlice.reducer
