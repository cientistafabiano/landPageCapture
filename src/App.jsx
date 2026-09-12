import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import OQueVaiAprender from "./components/OQueVaiAprender";
import Diferenciais from "./components/Diferenciais";
import Depoimentos from "./components/Depoimentos";
import Formulario from "./components/Formulario";
import Faq from "./components/Faq";
import CtaFinal from "./components/CtaFinal";
import Footer from "./components/Footer";
import BotaoFlutuanteWhatsapp from "./components/BotaoFlutuanteWhatsapp";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/*Cabeçalho fixo */}
      <Header />      
      <main>
        {/* Conteúdo principal da página */}
        <Hero />
        <Sobre />
        <OQueVaiAprender />
        <Diferenciais />
        <Depoimentos />
        <Formulario />
        <Faq />
        <CtaFinal />
        <Footer />
        <BotaoFlutuanteWhatsapp />
      </main>
    </div>
  );
}

export default App;