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
import DogCreationForm from '../../pages/DogCreeationForm/DogCreationForm'
import DogUpdateForm from '../../pages/DogUpdateForm/DogUpdateForm'
import About from "../../pages/About/About"
import Gallery from "../../components/Gallery/Gallery"
import MapPage from "../../pages/MapPage/MapPage"


// export const url = env.REACT_APP_BASE_URL || 'http://localhost:3001'
export const url = 'http://localhost:3001'
function App() {
  const [data, setData] = React.useState([]);
  // const url = 'https://ancient-basin-65065.herokuapp.com'

  React.useEffect(() => {
    fetch(`${url}/api/pets`)
      .then((res) => res.json())
      .then((data) => {
        console.log('WHOLE DATA FOR HOMEPAGE FETCH', data)
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
            <Route path='/About' element={<About/>}/>
            <Route path='/Profile' element={<ProfilePage pets={data} setData={setData}/>}/>
            <Route path='/Profile/DogForm' element={<DogCreationForm setData={setData}/>}/>
            <Route path='/Profile/DogUpdateForm' element={<DogUpdateForm setData={setData}/>}/>
            <Route path='/gallery' element={<Gallery pets={data} setData={setData} />} />
            <Route path='/mapview' element={<MapPage pets={data} setData={setData} />} />
            {/* <Route path="/Profile/Chat" element={<Chat />} /> */}
          </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;