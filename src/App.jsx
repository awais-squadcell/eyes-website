import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css";
import About from './components/About'
import Cards from './components/Cards'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import { useEffect, useRef } from 'react';

function App() {

  const scrollRef = useRef(null); 

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current, 
      smooth: true, 
    });

    return () => {
      scroll.destroy(); 
    };
  }, []);

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
