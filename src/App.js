import logo from './logo.svg';
import './App.css';
import CountryList from './components/CountriesList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CountryList/>
    </div>
  );
}

export default App;
