import { useEffect, useState } from 'react';
import './App.css';
import BeneFits from './components/BeneFits';
import Footer from './components/Footer';
import Header from './components/Header';
import PartnerShip from './components/PartnerShip';
import RoadMap from './components/RoadMap';
import Timeperiod from './components/Timeperiod';
import TokeNomic from './components/TokeNomic';
import WhitePaper from './components/WhitePaper';
import Home from './components/page/Home';
document.body.classList.add("overflow-hidden")
function App() {
  const [load, setload] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setload(false)
      document.body.classList.remove("overflow-hidden")
    }, 4000);
  })
  const [media, setmedia] = useState("")
  useEffect(() => {
    setInterval(() => {
      document.title = ("WuaoCoin") + (`-(${window.innerWidth} )`)
      // console.log(window.innerWidth)
    }, 1);
    return () => { console.clear(); }
  }, [])
  // useState[BackTop, setBackTop] = useState(true)
  function backtops() {
    window.scrollTo(0, 0);
  }
  window.addEventListener("scroll", function () {
    const mybackto = document.getElementById("backtops");
    if (window.scrollY > 500) {
      mybackto.style.display = "block";
    }
    else {
      mybackto.style.display = "none";
    }
  });
  // function Backtop() {

  // }
  return (
    <div className="App">
      <div>{load ? (<div className=' fixed w-full h-full flex justify-center items-center bg-ffb-orange z-30 
      '><div className='w-10 border-t-4 rounded-full animate-spin  h-10'></div></div>) : <Home />}</div>
      <button onClick={backtops} id='backtops'>hello</button>
    </div>
  );
}

export default App;
