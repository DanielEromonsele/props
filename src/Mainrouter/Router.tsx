import {createBrowserRouter} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Homescreen from '../Pages/Homescreen'
import Card3Display from '../Pages/Card3Display'
import Shop from '../Pages/Shop'


export const Mainrouter = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <Card3Display/>
        },
        {
            path : "/detail/:id",
            element : <Shop/>
        }
    ]

},
])