import './App.css';
import Home from './components/Home';
import HomeApp from './components/HomeApp';
import HomeDescription from './components/HomeDescription';
import HomeFooter from './components/HomeFooter';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <HomeDescription/>
      <HomeApp/>
      <HomeFooter/>
    </>
  );
}

export default App;
