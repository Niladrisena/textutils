import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
{/* <Navbar title= "TextUtiles" aboutText="About TextUtiles"/> */}
{/* <Navbar /> */}
<Navbar title= "TextUtiles" />
<div className="container my -2">
<TextForm heading="Enter the text to analyze below "/>
{/* <About/> */}
</div>
    </>
   
  );
}

export default App;
