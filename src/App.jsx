import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Ticker from './components/Ticker';

import Home from './pages/Home';
import Learn from './pages/Learn';
import LearnTopic from './pages/LearnTopic';
import Latest from './pages/Latest';
import Contact from './pages/Contact';

import ExploreSection from './components/ExploreSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';

import './App.css';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:topicId" element={<LearnTopic />} />
          <Route path="/explore" element={<ExploreSection />} />
          <Route path="/success-stories" element={<SuccessStoriesSection />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Ticker />

      {location.pathname !== '/' && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;