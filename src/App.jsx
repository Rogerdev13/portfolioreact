import './App.css'
import { Article } from './components/Navbar/Article/Article'
import {Navbar} from './components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { History } from './components/Navbar/History/History';
import { Home } from './components/Home/Home';


function App() {

  return (
    <>
      <Router>
   
        <header className='header'>
            <Navbar />
          </header>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/article' element={<Article />}></Route>
            <Route path='/history' element={<History />}></Route>
            <Route path='/article' element={<Article />}></Route>
            <Route path='/article' element={<Article />}></Route>
            <Route path='*' element={<Navigate to="/" />}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
