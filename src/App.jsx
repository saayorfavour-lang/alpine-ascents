
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Ticker from './components/Ticker';

import Home from './pages/Home';
import Learn from './pages/Learn';
import Latest from './pages/Latest';
import Contact from './pages/Contact';
import LearnTopic from './pages/LearnTopic';

import ExploreSection from './components/ExploreSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:topicId" element={<LearnTopic />} />
          
          {/* Explore page */}
          <Route path="/explore" element={<ExploreSection />} />

          {/* Success Stories page */}
          <Route path="/success-stories" element={<SuccessStoriesSection />} />

          <Route path="/latest" element={<Latest />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Ticker />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
