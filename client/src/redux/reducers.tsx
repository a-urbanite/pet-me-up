import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const loggedInUser = createSlice({
    name: 'loggedInUser',
    initialState: { email: '', name: ''},
    reducers: {
      addUser: (state: any, action: any) => {
        console.log('PAYLOAD', action.payload)
        state = action.payload
        console.log('USERSTATE', state)
        return state
      },
      deleteUser: (state: any) => {
        state = { email: '', name: ''}
        return state
      },
  } })

  export const { addUser, deleteUser } = loggedInUser.actions