import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enabled or not 

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#20242e';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
{/* <Navbar title= "TextUtiles" aboutText="About TextUtiles"/> */}
{/* <Navbar /> */}
<Navbar title= "TextUtiles" mode={mode} toggleMode={toggleMode} />
<div className="container my -2">
<TextForm heading="Enter the text to analyze below " mode={mode}/>
{/* <About/> */}
</div>
    </>
   
  );
}

export default App;
