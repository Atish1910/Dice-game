import Hero from "./components/Hero";
import "./App.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Game from "./components/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar></Navbar>
        <Hero></Hero>
      </>
    ),
  },
  {
    path: "/game",
    element: (
      <>
        <Navbar></Navbar>
        <Game></Game>
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
