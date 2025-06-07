import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./components/Home";
import Skills from './components/Skills';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/skills' element = {<Skills/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App