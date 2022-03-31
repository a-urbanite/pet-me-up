import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile
} from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import "./SingUp.css"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addUser, deleteUser } from "../../redux/reducers";


const SignUp = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const loggedInUser = useAppSelector((state) => state.loggedInUser.email)
  // console.log('LOGGEDINUSER', loggedInUser)

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      // console.log('CURRENTUSER', currentUser)
      // console.log('CURRENTUSER NAME', currentUser!.displayName)
      if (currentUser?.displayName) {
        dispatch(addUser({
          name: currentUser.displayName,
          email: currentUser.email 
        }))
      }
    });
    
  }, []);
  

  const register = async (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target));
    // console.log('REGFORMDATA', formData)
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        formData.registerEmail as string,
        formData.registerPassword as string
      ); 
      await updateProfile(auth.currentUser!, { 
        displayName: formData.registerName as string
      }).catch(
        (err) => console.log(err)
      );
      // console.log('this is user', user.user)
    } catch (error:any) {
      console.log(error.message);
    }
    event.target.reset();
    navigate({
      pathname: '/SignIn'
    })
  };


  return (
    <div className="login-form">
      <h3 className="login-form__title"> Sign up </h3>
      <form onSubmit={register} className='userForm'>
        <input
          name="registerName"
          className="userForm__input"
          placeholder="Name"
          required
        />
        <input
          name="registerEmail"
          className="userForm__input"
          placeholder="Email..."
          required
        />
        {/* <input
          name="registerPhone"
          className="userForm__input"
          placeholder="Phone..."
        /> */}
        <input
          name="registerPassword"
         className="userForm__input"
          placeholder="Password..."
          required
        />
        <input type="submit" value="Create User"/> 
      </form>

    </div>
  );
}

export default SignUp;