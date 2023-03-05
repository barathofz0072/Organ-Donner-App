import logo from './logo.svg';
import './App.css';
import AllDetailPage from './component/AllDetails';
import Login from './component/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from './component/AllDetails';
import PatientPage from './component/PatientPage';
import DonorPage from './component/DonorPage';


function App() {
  return (
    <div className="App-main">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DetailPage />} />
          <Route path="/patientDetails" element={<PatientPage />} />
          <Route path="/donorDetails" element={<DonorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
