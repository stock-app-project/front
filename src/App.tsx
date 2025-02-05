import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import MyPage from './pages/MyPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/mypage' element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
