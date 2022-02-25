import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
function App() {
  return (
    <>
   
      <Navbar title="TextUtils" about="About us"/>
      <div className="container">
      <TextForm label="Enter Text below "/>
      </div>
      
      {/* <Navbar /> */}
</>
  );
}

export default App;
