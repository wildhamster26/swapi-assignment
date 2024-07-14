import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PeopleProvider } from './contexts/PeopleContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Catalogue from './pages/Catalogue/Catalogue';
import Filter from './pages/Filter/Filter';
import './App.css';

const App: React.FC = () => {
  // todo:
  // 1. Refactor to remove the pages and views. They should be in a single file each
  // 2. Update the navbar link itmes
  // 3. Add a toggle between list and grid views for the catlogue
  // 4. Review and remove the redundant files and lines
  // 5. Write the decisions considerations
  // 6. Upload the repo to github
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