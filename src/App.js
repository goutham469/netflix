import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';

// *********************************************************components****************************************
// **************************************************** Landing Page Components**********************************************
// import LandingPage from './LandingPageComponents/LandingPage/LandingPage';
// import LandingPageContent from './LandingPageComponents/LandingPage/LandingPageContent/LandingPageContent';
// import Login from './LandingPageComponents/Login/Login';
// import SignUp from './LandingPageComponents/SignUp/SignUp';
import LandingPage from './LandingPageComponents/LandingPage/LandingPage';
import Login from './LandingPageComponents/Login/Login';
import SignUp from './LandingPageComponents/SignUp/SignUp';


import UserLandingPage from './user/UserLandingPage/UserLandingPage';
import MainPage from './user/MainPage/MainPage';
import Watch from './user/Watch/Watch';



function App() {

  const router = createBrowserRouter([
    {
      path:'',
      element:<LandingPage/>,
      children:[
        {
          path:'',
          element:<Login/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'SignUp',
          element:<SignUp/>
        }
      ]
    },
    {
      path:'user',
      element:<UserLandingPage/>,
      children:[
        {
          path:'',
          element:<MainPage/>
        },
        {
          path:'watch',
          element:<Watch/>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
