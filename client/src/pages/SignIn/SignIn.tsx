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
import "./SignIn.css"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addUser, deleteUser } from "../../redux/reducers";


const SignUp = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const loggedInUser = useAppSelector((state) => state.loggedInUser.email)

  const [popup, setpopup] = useState('');
  // console.log('LOGGEDINUSER', loggedInUser)

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.displayName) {
        dispatch(addUser({
          name: currentUser.displayName,
          email: currentUser.email 
        }))
      }
    });
    
  }, []);

  const login = async (event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    setpopup('')
    const formData = Object.fromEntries(new FormData(event.target));
    event.preventDefault()
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        formData.loginEmail as string,
        formData.loginPassword as string
      );
      navigate({
        pathname: '/Profile'
      })
    } catch (error:any) {
      console.log(error.message);
      setpopup('Something went wrong!')
    }
    event.target.reset();
  };

//   const logout = async () => {
//     await signOut(auth);
//     dispatch(deleteUser())
//     navigate({
//       pathname: '/'
//     })
//   };

  const register = () => {
    navigate({
              pathname: '/SignUp'
            })
  }

  return (
    <div className="login-form">

      <h3 className="login-form__title"> Login </h3>
      <p>{popup}</p>
      <form onSubmit={login} className='userForm'>
        <input
          name="loginEmail"
          className="userForm__input"
          placeholder="Email..."
        />
        <input
          name="loginPassword"
          className="userForm__input"
          placeholder="Password..."
        />
        <input type="submit" value="Log in"/> 
      </form>


      {/* <h4 className="login-form__title"> User Logged In: </h4>
      {loggedInUser}

      <button className="login-form__btn" onClick={logout}> Sign Out </button> */}

      <p>No Account yet? Register here</p>
      <button className="login-form__btn" onClick={register}> Register </button>
    </div>
  );
}

export default SignUp;