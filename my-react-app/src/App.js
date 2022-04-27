import {BrowserRouter,Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';


function App() {



  return (
    <BrowserRouter >
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Homepage></Homepage>}/>
     
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
