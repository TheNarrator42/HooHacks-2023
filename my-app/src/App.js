import logo from './logo.svg';
import Slider from "./Slider";
import getData from "./buttonData";
import './App.css';
import "./styles.css";

function App() {
  
  function handleClick() {
    getData(document.getElementById("monthSlider").currentValue);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Select Number of Months in Advance
        </p>
        <Slider id = "monthSlider"/>

        <button onClick={handleClick}>
      Calculate deposit
    </button>

      </header>
    </div>
  );
}

export default App;
