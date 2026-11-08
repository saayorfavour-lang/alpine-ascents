
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Learn from './pages/Learn';
import Explore from './pages/Explore';
import SuccessStories from './pages/SuccessStories';
import Latest from './pages/Latest';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
