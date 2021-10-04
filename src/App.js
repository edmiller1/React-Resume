import { About, Header, Hero } from "./components";
import "./styles/global.css";

function App() {
  return (
    <div className="App bg-black text-white px-20">
      <Header className="fixed" />
      <Hero />
      <About />
    </div>
  );
}

export default App;
