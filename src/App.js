import "./App.scss";
import { About, Footer, Header } from "./container";
import { Navbar } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
