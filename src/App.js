import { Routes, Route } from 'react-router-dom';
import Navbar from './container/Navbar';
import Footer from './container/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import ShopPage from './pages/ShopPage';
import ShopDetailPage from './pages/ShopDetailPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/about-us' element={<AboutUsPage />} />

        <Route path='/services' element={<ServicesPage />} />

        <Route path='shop'>
          <Route index element={<ShopPage />} />
          <Route path=':id' element={<ShopDetailPage />} />
        </Route>
        <Route path='news'>
          <Route path='' element={<NewsPage />} />
          <Route path=':id' element={<NewsDetailPage />} />
        </Route>
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
