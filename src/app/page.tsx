import About from '@/components/About';
import Contact from '@/components/Contact';
import Home from '@/components/Home';
import Portifolio from '@/components/Portifolio';
import Resume from '@/components/Resume';
import Services from '@/components/Services';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Home />
      <Portifolio />
      <Resume />
      <About />
      <Services />
      <Contact />
    </div>
  );
}
