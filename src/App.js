import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import NavMenu from './Component/NavMenu/NavMenu';
import Statistics from './Component/Statistics/Statistics';

function App() {
  return (
    <div className="">
      <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          {/* <Route path="/quiz/:id" element={} /> */}
        </Routes>
    </div>
  );
}

export default App;
