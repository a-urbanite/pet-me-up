import React from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import HomePage from "../../pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from '../../pages/SignUp/SignUp'
import SignIn from '../../pages/SignIn/SignIn'
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import Footer from "../Footer/Footer";
import env from 'react-dotenv'
import DogProfileForm from '../../components/DogProfileForm/DogProfileForm'

export const url = env.BASE_URL || 'http://localhost:3001'

function App() {
  const [data, setData] = React.useState([]);
  // const url = 'http://localhost:3001'
  // const url = 'https://ancient-basin-65065.herokuapp.com'

  React.useEffect(() => {
    fetch(`${url}/api/pets`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setData(data)
      })
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage pets={data} setData={setData}/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/SignIn' element={<SignIn/>}/>
            <Route path='/Profile' element={<ProfilePage pets={data} setData={setData}/>}/>
            <Route path='/Profile/DogForm' element={<DogProfileForm setData={setData}/>}/>
          </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;