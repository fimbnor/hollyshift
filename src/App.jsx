import "/src/images/logo.png";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import Jobspage from "./pages/Jobspage";
import NotFoundpage from "./pages/NotFoundpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <MainLayout /> }>
      <Route index element={ <Homepage /> } />
      <Route path='/jobs' element={ <Jobspage /> } />
      <Route path='*' element={ <NotFoundpage/>} />
  </Route>
) ) ;

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
