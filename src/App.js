import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import NavMenu from './Component/NavMenu/NavMenu';
import Statistics from './Component/Statistics/Statistics';
import QuizMain from './Component/QuizMain/QuizMain';
import Blog from './Component/Blog/Blog';
import ErrorPage from './Component/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="">
      <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/quiz/:id" element={<QuizMain/>} />
          <Route path="*" element={<ErrorPage/>} />

        </Routes>
    </div>
  );
}

export default App;
