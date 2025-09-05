import { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import ImageCard from './components/ImageCard';
import homes from './homes';
import NextBtn from './components/NextBtn';

function App() {
  const [next, setNext] = useState(2);

  return <div className="relative h-screen w-screen overflow-hidden">
    <NavBar />
    <ImageCard image={homes[next]}/>
    <div className="absolute top-[52%] w-[30%] left-[35%] md:top-[90%] flex flex-row justify-center items-center gap-3">
      <NextBtn icon="fa-solid fa-backward"
                display={next > 0}
                onClick={() => setNext(next - 1)}
      />
      <NextBtn icon="fa-solid fa-forward"
                display={next < homes.length - 1}
                onClick={() => setNext(next + 1)}
      />
    </div>
  </div>;
}

export default App
