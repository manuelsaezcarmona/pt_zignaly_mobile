/* eslint-disable object-curly-newline */
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PhoneListContainer } from './components/PhoneListContainer/PhoneListContainer';
import { PhoneDetailComponent } from './components/PhoneDetailComponent/PhoneDetailComponent';

function App() {
  return (
    <div className="App container-fluid">
      <h1 className="header">Mobile Gallery</h1>
      <Routes>
        <Route path="/" element={<PhoneListContainer />} />
        <Route path="/phone/:phoneID" element={<PhoneDetailComponent />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
