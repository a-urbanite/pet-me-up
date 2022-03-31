import { loggedInUser } from './reducers'
import { configureStore } from "@reduxjs/toolkit";

const localStorageContents = JSON.parse(window.localStorage.getItem('loggedInUser')!)

export const userStore = configureStore({
  reducer: {
    loggedInUser: loggedInUser.reducer
  },
  preloadedState: localStorageContents ? localStorageContents : { loggedInUser: { email: '', name: ''} }
})

userStore.subscribe(()=>{
    localStorage.setItem('loggedInUser', JSON.stringify(userStore.getState()))
  })

export type RootState = ReturnType<typeof userStore.getState>;
export type AppDispatch = typeof userStore.dispatch