 
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home,User,Revenue} from './pages/Home';
import Reports from './pages/Reports';  

 
import Products from './pages/Products';

function App() {
  return (
    <><Router>
       <Navbar />
      <Routes>
    
        <Route path='/home'exact Component={Home}/>
        <Route path='/home/users'  exact Component={User}/>
        <Route path='/home/revenue'  exact Component={Revenue}/>

        <Route path='/products'exact Component={Products}/>
        <Route path='/reports' exact Component={Reports}/>
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
