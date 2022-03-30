import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const loggedInUser = createSlice({
    name: 'loggedInUser',
    initialState: '',
    reducers: {
      addUser: (state: string, action: any) => {
        state = action.payload
        console.log('USERSTATE', state)
        return state
      },
      deleteUser: (state: string) => {
        state = ''
        return state
      },
  } })

  export const { addUser, deleteUser } = loggedInUser.actions