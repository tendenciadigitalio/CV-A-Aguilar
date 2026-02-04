import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import PortfolioGallery from './components/PortfolioGallery';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-black selection:text-white grid-bg">
      <nav className="fixed top-0 w-full z-50 mix-blend-difference px-4 py-4 flex justify-between items-center text-white pointer-events-none">
        <span className="font-black text-xl tracking-tighter">AT_V2</span>
        <div className="flex gap-4 font-mono text-sm pointer-events-auto">
          <a href="mailto:angel@tendenciadigital.io" className="hover:underline">MAIL</a>
          <a href="https://wa.me/525564958005" className="hover:underline">WA</a>
        </div>
      </nav>

      <main>
        <Hero />
        <TechStack />
        <PortfolioGallery />
        <Projects />

        <section className="p-12 md:p-24 flex flex-col items-center justify-center text-center">
          <h2 className="text-[5vw] font-black leading-none mb-8">
            CONSTRUYAMOS <br /> EL FUTURO.
          </h2>
          <div className="flex gap-4">
            <a href="mailto:angel@tendenciadigital.io" className="bg-black text-white px-8 py-4 font-mono font-bold hover:bg-accent transition-colors">
              INICIAR_CONTACTO
            </a>
          </div>
          <footer className="mt-24 font-mono text-xs text-gray-400">
            © 2026 ANGEL TAURINO. ARCHITECTING DIGITAL REALITIES.
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
