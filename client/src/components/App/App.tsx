import React from "react";
import "./App.css";
import Nav from "../Navbar/Nav";
import HomePage from "../../pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from '../../pages/SignUp/SignUp'
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import Footer from "../Footer/Footer";

function App() {
  const [data, setData] = React.useState([]);
  // const url = 'http://localhost:3001'
  const url = 'https://ancient-basin-65065.herokuapp.com'

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
          <Nav />
          <Routes>
            <Route path='/' element={<HomePage pets={data}/>}/>
            <Route path='/register' element={<SignUp/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
          </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;