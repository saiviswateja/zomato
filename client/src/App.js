import './App.css';
import Home from './components/Home';
import HomeApp from './components/HomeApp';
import HomeDescription from './components/HomeDescription';
import HomeFooter from './components/HomeFooter';
import Navbar from './components/Navbar';

// API key: AIzaSyD1-ZMXzUX9S-cAjb33L2JJzDeN4bWzN40

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
