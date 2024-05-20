import { Footer } from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header";
import { Approutes } from "./routes/Approutes";


function App() {
  return (
    <div className="App dark:bg-slate-800" style={{overflow: "hidden"}}>
      <Header />
      <Approutes />
      <Footer />
    </div>
  );
}

export default App;
