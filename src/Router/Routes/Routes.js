import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Details from "../../Pages/Home/Services/Details";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";



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
                path: "/details/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <Details></Details>

            }

        ]
    }

])

export default router;