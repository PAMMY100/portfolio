// import ModelViewer from './components/ModelViewer';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  return (
    <main className=" px-4 min-h-full">
      <ThemeToggle />
      
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}