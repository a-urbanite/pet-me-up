import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import "./SignIn.css"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addUser } from "../../redux/reducers";
import Header from "../../components/Header/Header";


const SignUp = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const loggedInUser = useAppSelector((state) => state.loggedInUser.email)

  const [popup, setpopup] = useState('');

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


  const register = () => {
    navigate({
              pathname: '/SignUp'
            })
  }

  return (
    <>
    <main className='login-page'>
      <Header/>
      <div className="login-page__login">
        <h3 className="login-page__title"> Login </h3>
        <p>{popup}</p>
        <form onSubmit={login} className='login-page__form'>
          <input
            name="loginEmail"
            className="login-page__form__input"
            placeholder="Email..."
          />
          <input
            type="password"
            name="loginPassword"
            className="login-page__form__input"
            placeholder="Password..."
          />
          <input className="login-page__form__btn" type="submit" value="Log in"/> 
        </form>
        <p className="register__title">No Account yet? Register here</p>
        <button className="register__btn" onClick={register}> Register </button>
      </div>
      </main>
    </>
  );
}

export default SignUp;