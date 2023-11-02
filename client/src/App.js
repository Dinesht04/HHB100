import './App.css';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import { Home } from './Pages/Home';
import { Symptoms } from './Pages/Symptoms';
import { Questions } from './Pages/Questions';
import { Diagnosis } from './Pages/Diagnosis';
import {createContext, useContext} from 'react';
import { AppProvider } from './Pages/AppContext';


function App() {

  return (

  
    <div className="App">
      <AppProvider>
      <Router>
        
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Symptoms' element={<Symptoms/>}></Route>
          <Route path='/Questions' element={<Questions/>}></Route>
          <Route path='/Diagnosis' element={<Diagnosis/>}></Route>
        </Routes>
      </Router>

     
    </AppProvider>   
    </div>
    
  );
}









export default App;

