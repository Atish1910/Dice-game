import React from "react";
import TotalScore from "./TotalScore";
import NumberSelectors from "./NumberSelectors";
import RoleDice from "./RoleDice";
import img from "../../../public/img/3.png";

const Game = ({ diceImg }) => {
  return (
    <>
      <section>
        <div className="container py-5">
          <div className="row align-items-center justify-content-around">
            <div className="col-lg-6">
              <TotalScore></TotalScore>
            </div>
            <div className="col-lg-6 ">
              <NumberSelectors></NumberSelectors>
            </div>
          </div>
          <div className="row align-items-center justify-content-center py-5">
            <RoleDice diceImg={img}></RoleDice>
          </div>
        </div>
      </section>
    </>
  );
};

export default Game;
