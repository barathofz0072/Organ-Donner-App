import logo from './logo.svg';
import './App.css';
import AllDetailPage from './component/AllDetails';
import Login from './component/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from './component/AllDetails';
import PatientPage from './component/PatientPage';
import DonorPage from './component/DonorPage';
import Tabel from './component/Tabel';
import { JimpDemo } from './component/jimp';


function App() {
  return (
    <div className="App-main">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DetailPage />} />
          <Route path="/patientDetails" element={<PatientPage />} />
          <Route path="/donorDetails" element={<DonorPage />} />
          <Route path="/Tabel" element={<Tabel />} />
          <Route path="/JimpDemo" element={
            <JimpDemo
              imageUrl={
                "https://images.unsplash.com/photo-1602785164803-9a6cf611f3b6?w=1000&q=80"
              }
              x={300}
              y={300}
              width={200}
              height={200}
            />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
