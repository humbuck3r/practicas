import './App.css';
import Header from  '../src/Components/Header/Header'
import Footer from '../src/Components/Footer/Footer'
import Slider from '../src/Components/Slider/Slider'
import Cards from '../src/Components/Cards/Cards'
import Wsp from '../src/Components/Wsp/Wsp'
import Contact from '../src/Components/Contact/Contact'



function App() {
  return (
    <div className="App"> 
      <Header/>
      <Slider/>
      <Cards/>
      <Wsp/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
