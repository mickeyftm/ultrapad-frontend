import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Landing from './components/landingPage/landingPage';
import Product from './components/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Landing />} />
              <Route path="/product" exact element={<Product />} />
            </Routes>
          </BrowserRouter>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
