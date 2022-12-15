import './App.scss';
import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:imdbID" element={<MovieDetail />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
