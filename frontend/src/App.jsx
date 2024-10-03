import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Businesses from './pages/Businesses';
import BusinessDetails from './pages/BusinessDetails';
import AdminPanel from './pages/AdminPanel';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import Footer from './components/Footer';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

const App = () => {
  return (
    <div className=''>
      <ToastContainer />
      <>
        <Navbar />
        <hr />
        
        {/* Main Content Wrapper */}
        <div className='w-full'>
          <div className='max-w-screen-lg mx-auto px-4'> {/* max-w-screen-lg sets consistent width across pages */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/businesses' element={<Businesses />} />
              <Route path='/business/:id' element={<BusinessDetails />} /> {/* Route for business details */}
              <Route path='/admin' element={<AdminPanel />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/login' element={<LoginPage />} />
            </Routes>
          </div>
        </div>
      </>
      <Footer />
    </div>
  );
};

export default App;
