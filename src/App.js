import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import NavMenu from './Component/NavMenu/NavMenu';

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
