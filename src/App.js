import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Navs from './component/1-nav/nav';
import Head from "./component/2-header/head";
import "./app.css";
import Main2 from './component/4-slide_picture/slide';
import Cards from './component/3-card/card';
import Foot from './component/footer/foot';
import End from "./component/5-end/end";
import More_prod from "./component/more_product/more_prod";
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Products from './component/more_product/products';
import Contact from "./component/8-contact/contact";
function App() {
  return (
    <div className="App">
       <HashRouter>
        <Routes>
          <Route path='/' element={<Head />}/>
          <Route path='/home' element={<Head />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
       </HashRouter>
       
    </div>
  );
}

export default App;
