import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Nav from "../Navbar/Nav";
import HomePage from "../../pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://ancient-basin-65065.herokuapp.com/api/pets')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data)
      })
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
          <Nav />
          <Header />
          <SearchBar />
          <Routes>
            <Route path='/' element={<HomePage pets={data}/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;