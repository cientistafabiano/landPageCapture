import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main>
        {/* Conteúdo principal da página */}
        <Hero />
        <Sobre />
      </main>
    </div>
  );
}

export default App;