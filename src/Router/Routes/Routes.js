import Main from "../../Layout/Main";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import AddService from "../../Pages/Home/Services/AddService";
import Details from "../../Pages/Home/Services/Details";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReviews/MyReview";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";




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
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
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
                path: '/review',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: "/details/:id",
                loader: ({ params }) => fetch(`https://server-side-rosy.vercel.app/services/${params.id}`),
                element: <Details></Details>

            },
            {
                path: '*',
                element: <div className='text-center p-12 mt-6'>
                    <h1 className="text-2xl text-error font-bold">404</h1>
                    <h2 className="text-2xl text-error font-bold" >Oops!!! You're Lost 😥</h2>
                    <p className="text-2xl text-error font-bold">The Page you are looking for was not found..................</p>
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