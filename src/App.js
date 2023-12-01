import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import About from './Components/About';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Reservation from './Components/Reservation';
import Order from './Components/Order';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
        <>
          <Nav/>
          <Header/>
            <div>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/order-online" element={<Order />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          <Footer/>
        </>
    </div>
  )
}

export default App;
