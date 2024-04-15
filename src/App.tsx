import React, {useEffect} from 'react';
import NavBar from "./componens/NavBar/NavBar";
import Footer from "./componens/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import useRouters from "./useRouters";
import {useActions} from "./hooks/useActions";

function App() {
    const {getAllProducts} = useActions()
    useEffect(()=> {
        getAllProducts()
    }, [])
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          {useRouters()}
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
