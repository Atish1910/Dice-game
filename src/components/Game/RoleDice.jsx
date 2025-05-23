import React from "react";

const RoleDice = ({ diceImg }) => {
  return (
    <>
      <div className="col-lg-4 border p-5 rounded-3">
        <div className=" pb-3">
          <img src={diceImg} className="role-dice-01" alt="" />
          <p className=" text-center mb-0">Click On The Dice To Role</p>
        </div>
        <div className="d-grid">
          <button className="btn btn_c1 px-3 my-3">Reset Score</button>
          <button className="btn btn-secondary px-3">Show Rules</button>
        </div>
      </div>
    </>
  );
};

export default RoleDice;
