import React from "react";

const Game = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-lg-6">
              <h3 className=" text-score mb-0 ">0</h3>
              <p>Total Score</p>
            </div>
            <div className="col-lg-6 ">
              <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn_c2 ">1</button>
                <button className="btn btn_c2 ">2</button>
                <button className="btn btn_c2 ">3</button>
                <button className="btn btn_c2 ">4</button>
                <button className="btn btn_c2 ">5</button>
                <button className="btn btn_c2 ">6</button>
              </div>
              <div className="text-end pt-3">
                <h6 className="fw-bold">Select Numbers</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Game;
