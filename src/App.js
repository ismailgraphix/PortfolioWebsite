import { useEffect } from 'react';
import aos from "aos";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import Services from './components/UI/Services';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';
//import VisitorCounter from './components/UI/VisitorCounter';

function App() {
  useEffect(()=>{
    aos.init()
  },[])
  return (
    <>
    <Header/>
<main>
<Hero/>
<Services/>
<Portfolio />
<Contact/>
</main>
    <Footer/>
    </>
  );
}


export default App;
