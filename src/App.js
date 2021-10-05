import { About, Contact, Footer, Header, Hero, Work } from "./components";
import "./styles/global.css";

function App() {
  return (
    <div className="App bg-black text-white">
      <Header className="fixed" />
      <Hero />
      <About />
      <Work />
      <Contact className="w-full" />
      <Footer />
    </div>
  );
}

export default App;
