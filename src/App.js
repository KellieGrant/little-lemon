import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './pages/Main';
import About from './pages/About';
import Menu from './pages/Menu';
import BookingForm from './pages/BookingPage'
import Confirmation from './pages/Confirmation';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import Footer from './components/Footer';




const App = () => {
  return (
    <Router>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
