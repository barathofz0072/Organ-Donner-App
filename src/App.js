import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Registration from './Login/DoctorLogin'
import PatientDetail from './pages/PatientDetails';
import DoctorLogin from './Login/DoctorLogin';
import DonorLogin from './Login/DonorLogin';

function App() {
  return (
    <div className='bg'>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Registration />} />
          <Route path="/" element={<Home />} />
          <Route path="/patientDetail" element={<PatientDetail />} />
          <Route path="/DoctorLogin" element={<DoctorLogin />} />
          <Route path="/DonorLogin" element={<DonorLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
