import './App.css';
import Header from "./layout/Header";
import Card from "./layout/Card";
import AboutMe from "./layout/AboutMe";
import Portfolio from "./layout/Portfolio";
import Contact from "./layout/Contact";


function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
