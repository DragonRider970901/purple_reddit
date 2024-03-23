import {Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import RootLayout from "./RootLayout";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Categories from "../src/pages/Categories";
import Profile from "../src/pages/Profile";
import Art from './categories/Art';
import CategoryHome from './components/logo/CategoryHome';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="categories" element={<Categories />} >
            <Route path=":id" element={<CategoryHome />} />
          </Route>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
