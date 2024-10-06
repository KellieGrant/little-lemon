import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';





function App() {
  return (
    <>
    <head>
      <meta name='description' content='Welcome to the Little Lemon resteraunt. Take a look at our affordable and appatizing menu.'/>
      <meta name='og:title' content='Little Lemon Website'/>
      <meta name='og:desctiption' content='Little Lemon Resteraunt. Take a look at our affordable and appatizing menu'/>
      <meta name='og:image' content='https://sue-little-lemon-meta.netlify.app/static/media/restaurant-chef-B.78cfcd0f20b8e1bc98bf.webp'/>'
    </head>
      <Header />
      <Nav />
      <Main />
      <Footer />
      
    </>
  );
}

export default App;
