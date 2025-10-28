import { Footer } from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header";
import { Approutes } from "./routes/Approutes";
import { WishlistProvider } from "./context/WishlistContext";

function App() {
  return (
    <div className="App dark:bg-slate-800 overflow-hidden">
      <WishlistProvider>
        <Header />
        <Approutes />
        <Footer />
      </WishlistProvider>
    </div>
  );
}

export default App;
