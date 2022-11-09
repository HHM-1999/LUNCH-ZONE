import Main from "../../Layout/Main";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Details from "../../Pages/Home/Services/Details";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";




const { createBrowserRouter } = require("react-router-dom");
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>

            },
            {
                path: "/details/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <Details></Details>

            },
            {
                path: '*',
                element: <div className='text-center p-12'>
                    <h1>404</h1>
                    <h2>Oops!!! You're Lost 😥</h2>
                    <p>The Page you are looking for was not found..................</p>
                </div>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }


        ]
    }

])

export default router;