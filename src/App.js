import { Footer } from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header";
import { Approutes } from "./routes/Approutes";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App dark:bg-slate-800 overflow-hidden">
      <Header />
      <Approutes />
      <Footer />
    </div>
  );
}

export default App;
