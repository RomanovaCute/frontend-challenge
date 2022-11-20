import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from 'react'
import { Layout } from './components/layout/Layout'
import { NotFound } from './components/pages/notfound/NotFound'
import { Favorite } from './components/pages/favoritepage/Favorite'
import { Homepage } from './components/pages/homepage/Homepage'

function App() {
  return (
    <Router>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='frontend-challenge' element={<Homepage />} />
              <Route path='favorite' element={<Favorite/>} />
              <Route path='*' element={<NotFound/>}/>
            </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
