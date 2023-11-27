import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type)=>{
      setAlert({
        msg: massage,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#20242e';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtiles - Dark Mode';
      // setInterval(() => {
      //   document.title = 'do your assesment';
      // }, 2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtiles - Light Mode';
    }
  }
  return (
    <>
{/* <Navbar title= "TextUtiles" aboutText="About TextUtiles"/> */}
{/* <Navbar /> */}
<Navbar title= "TextUtiles" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my -2">
<TextForm showAlert= {showAlert}heading="Enter the text to analyze below " mode={mode}/>
{/* <About/> */}
</div>
    </>
   
  );
}

export default App;
