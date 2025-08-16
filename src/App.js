import './App.css';
import Header from './components/header/Header';
import Hometop from './components/Home/Hometop'
import Service from './components/service/Service';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hometop />
        <Service />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
