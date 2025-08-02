import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import About from '../About/About';
import EmojiProvider from '../../context/emojiProvider';
import Search from '../Search/Search';

function App() {
  return (
    <EmojiProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='search' element={<Search/>} />
            <Route path='about' element={<About/>} />
          </Route>
        </Routes>
      </div>
    </EmojiProvider>
  );
}

export default App;
