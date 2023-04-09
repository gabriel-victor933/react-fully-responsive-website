import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/homepage/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> 
  }
])

function App() {

  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
