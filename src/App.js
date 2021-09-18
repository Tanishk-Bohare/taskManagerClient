import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import {GlobalContextProvider } from './Contexts/GlobalState'
import Tray from './Components/Tray'


function App() {
  return (
    <div className="App" >
      < GlobalContextProvider>
        <Header  />
        <Tray />
        <Footer />
      </GlobalContextProvider> 
    </div >
  );
}

export default App;
