import React, {useEffect} from 'react';
import NavBar from "./componens/NavBar/NavBar";
import Footer from "./componens/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import useRouters from "./useRouters";
import {useActions} from "./hooks/useActions";
import Error from "./componens/Error/Error";

function App() {
    const {getAllProducts, localeStorageItems} = useActions()
    useEffect(()=> {
        getAllProducts()
        localeStorageItems()
    }, [])
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <Error/>
          {useRouters()}
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
