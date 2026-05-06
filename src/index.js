
import ReactDOM from 'react-dom/client';
import './style.css';

import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Saleimage from "./components/Saleimage"
import Recommended from "./components/Recommended"
import Popular from "./components/Popular"
import Footer from "./components/Footer"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar></Navbar>
    <Categories></Categories>
    <Saleimage></Saleimage>
    <Recommended></Recommended>
    <Popular></Popular>
    <Footer></Footer>
  </div>
);

