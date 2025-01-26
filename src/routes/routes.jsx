
import {createBrowserRouter} from 'react-router'
import RootLayout from './../root/root';
import Home from './../pages/home/Home';
import About from '../pages/About';
import Service from '../pages/Service';
import ContactUs from '../pages/ContactUs';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Login from '../pages/Login';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/service",
                element: <Service></Service>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/privacy",
                element: <PrivacyPolicy></PrivacyPolicy>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }

])
