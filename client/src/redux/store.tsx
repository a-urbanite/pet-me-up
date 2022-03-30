import { loggedInUser } from './reducers'
import { configureStore } from "@reduxjs/toolkit";

// const localStorageContents = JSON.parse(window.localStorage.getItem('toDoList')!)

export const userStore = configureStore({
  reducer: {
    loggedInUser: loggedInUser.reducer
  },
  preloadedState: { loggedInUser: { email: '', name: ''} }
})

// toDoStore.subscribe(()=>{
//     localStorage.setItem('toDoList', JSON.stringify(toDoStore.getState()))
//   })

export type RootState = ReturnType<typeof userStore.getState>;
export type AppDispatch = typeof userStore.dispatch