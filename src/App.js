import { Footer } from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header";
import { Approutes } from "./routes/Approutes";


function App() {
  return (
    <div className="App">
      <Header />
      <Approutes />
      <Footer />
    </div>
  );
}

export default App;
