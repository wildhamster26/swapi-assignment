import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PeopleProvider } from './contexts/PeopleContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Catalogue from './pages/Catalogue/Catalogue';
import Filter from './pages/Filter/Filter';

const App: React.FC = () => {
  return (
    <PeopleProvider>
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/filter" element={<Filter />} />
          </Routes>
        </main>
      </Router>
    </PeopleProvider>
  );
};

export default App;