import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Course from "./pages/Courses"
import Root from "./components/Root"
import './App.css'


const router = createBrowserRouter([
  {path:"/", element:<Root/>, 
  children:[
    {path:"/", element:<Home />},
    {path:"/course", element:<Course />}
  ]
}
  
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
