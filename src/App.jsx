import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ScrollToTop from './components/ScrollToTop';

const Ranking = React.lazy(() => import('./pages/Ranking'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/contacto"
            element={
              <Suspense fallback={<div className="h-[100vh]" />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/ranking"
            element={
              <Suspense fallback={<div className="h-[100vh]" />}>
                <Ranking />
              </Suspense>
            }
          />
          <Route
            path="/*"
            element={
              <Suspense fallback={<div className="h-[100vh]" />}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
