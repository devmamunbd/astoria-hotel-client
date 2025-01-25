
import {createBrowserRouter} from 'react-router'
import RootLayout from './../root/root';
import Home from './../pages/home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }

])
