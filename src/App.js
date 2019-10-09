import React from 'react';
import './App.css';
import Nav from './components/Navbar/nav';
import Header from './components/Header/header';
import About from './components/About/About'
import Event from './components/Events/Event'
import SignUp from './components/SignUp/SignUp'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Event />
      <SignUp />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;



