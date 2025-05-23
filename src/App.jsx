import Hero from "./components/Hero";
import "./App.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Game from "./components/Game/Game";
import { useState } from "react";
import img from "../public/img/3.png";

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
  const [GameStarted, setGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    <>
      {GameStarted ? (
        <Game diceImg={img}></Game>
      ) : (
        <Hero toggle={toggleGamePlay}></Hero>
      )}
    </>
  );
}

export default App;
