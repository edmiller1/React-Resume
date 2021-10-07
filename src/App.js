import { About, Contact, Footer, Header, Hero, Work } from "./components";
import "./styles/global.css";

function App() {
  return (
    <div className="App bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
