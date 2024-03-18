import logo from './logo.svg';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import HomeLayout from './layout/HomeLayout';
import CategoriesLayout from './layout/CategoriesLayout';
import Categories from './pages/Categories';
import About from './pages/About';
import AboutLayout from './layout/AboutLayout';
import ProfileLayout from './layout/ProfileLayout';
import Profile from './pages/Profile';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomeLayout />} />
      <Route path='allcategories' element={<CategoriesLayout />}>
        <Route index element={<Categories />}/>
      </Route>
      <Route path='about' element={<AboutLayout />}>
        <Route index element={<About />}/>
      </Route>
      <Route path='profile' element={<ProfileLayout />}>
        <Route index element={<Profile />} />
      </Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
