import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import "./RegisterForm.css"


const RegisterForm = () => {
  const registerEmailState:string = ""
  const registerPasswordState:string = ""
  const loginEmailState:string = ""
  const loginPasswordState:string = ""

  const [registerEmail, setRegisterEmail] = useState(registerEmailState);
  const [registerPassword, setRegisterPassword] = useState(registerPasswordState);
  const [loginEmail, setLoginEmail] = useState(loginEmailState);
  const [loginPassword, setLoginPassword] = useState(loginPasswordState);

  const [user, setUser] = useState({} as any);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser!);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      // this.refs.regEmail.value = '';
    } catch (error:any) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error:any) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input
          // ref="regEmail"
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          // ref="regPassword"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default RegisterForm;