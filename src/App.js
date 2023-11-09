import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Privateparty from './pages/privateparty';
import {Routes, Route} from 'react-router-dom'; 
import Data from './pages/data';
import Patient from './pages/Patient';
import Doctor from './pages/doctor';
import Invoice from './pages/invoice';
import Edits from './pages/edits';


let name="hassan";
function App() {
  return (
   <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="privateparty" element={<Privateparty />}/>
        <Route path="data" element={<Data />}/>
        <Route path="patient" element={<Patient />}/>
        <Route path="doctor" element={<Doctor />}/>
        <Route path="invoice" element={<Invoice />}/>
        <Route path="edits" element={<Edits />}/>
    </Routes>

  </BrowserRouter>

  );
}

export default App;
