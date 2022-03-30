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
import "./RegisterForm.css"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addUser, deleteUser } from "../../redux/reducers";


const RegisterForm = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const loggedInUser = useAppSelector((state) => state.loggedInUser)
  
  // const registerEmailState:string = ""
  // const registerPasswordState:string = ""
  // const loginEmailState:string = ""
  // const loginPasswordState:string = ""
  
  // const [registerEmail, setRegisterEmail] = useState(registerEmailState);
  // const [registerPassword, setRegisterPassword] = useState(registerPasswordState);
  // const [loginEmail, setLoginEmail] = useState(loginEmailState);
  // const [loginPassword, setLoginPassword] = useState(loginPasswordState);
  
  // const [user, setUser] = useState({} as any);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      // setUser(currentUser!);
      console.log('AUTHSTATECHANGE triggered')
      // console.log('doogpoop', currentUser!.email)
      if (currentUser) {
        dispatch(addUser(currentUser.email))
      }
    });
    
  }, []);
  

  const register = async (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target));
    console.log(formData)
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        formData.registerEmail as string,
        formData.registerPassword as string
      ); 
      console.log('this is user', user.user)
      await updateProfile(auth.currentUser!, { displayName: formData.registerName as string }).catch(
        (err) => console.log(err)
      );
    } catch (error:any) {
      console.log(error.message);
    }
    event.target.reset();
  };

  const login = async (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    const formData = Object.fromEntries(new FormData(event.target));
    event.preventDefault()
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        formData.loginEmail as string,
        formData.loginPassword as string
        // loginEmail,
        // loginPassword
      );
      // console.log(user);
    } catch (error:any) {
      console.log(error.message);
    }
    navigate({
      pathname: '/profile'
    })
    event.target.reset();
  };

  const logout = async () => {
    await signOut(auth);
    dispatch(deleteUser())
  };

  return (
    <div className="login-form">
      <h3 className="login-form__title"> Register User </h3>
      <form onSubmit={register} className='userForm'>
        <input
          name="registerName"
          className="userForm__input"
          placeholder="Name"
          // onChange={(event) => {
          //   setRegisterEmail(event.target.value);
          // }}
        />
        <input
          name="registerEmail"
          className="userForm__input"
          placeholder="Email..."
          // onChange={(event) => {
          //   setRegisterEmail(event.target.value);
          // }}
        />
        <input
          name="registerPassword"
         className="userForm__input"
          placeholder="Password..."
          // onChange={(event) => {
          //   setRegisterPassword(event.target.value);
          // }}
        />
        <input type="submit" value="Create User"/> 
        {/* <button onClick={register}> Create User</button> */}
      </form>

      <h3 className="login-form__title"> Login </h3>
      <form onSubmit={login} className='userForm'>
        <input
          name="loginEmail"
          className="userForm__input"
          placeholder="Email..."
          // onChange={(event) => {
          //   setLoginEmail(event.target.value);
          // }}
        />
        <input
          name="loginPassword"
          className="userForm__input"
          placeholder="Password..."
          // onChange={(event) => {
          //   setLoginPassword(event.target.value);
          // }}
        />
        <input type="submit" value="Log in"/> 
        {/* <button onClick={login}> Login</button> */}
      </form>

      <h4 className="login-form__title"> User Logged In: </h4>
      {loggedInUser}

      <button className="login-form__btn" onClick={logout}> Sign Out </button>
    </div>
  );
}

export default RegisterForm;