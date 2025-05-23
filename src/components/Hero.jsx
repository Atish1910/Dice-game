import dice from "../../public/img/1.png";
const Hero = ({ toggle }) => {
  return (
    <section className=" py-5 border">
      <div className="container text-center">
        <div className="row align-items-center py-5 rounded-3">
          <div className="col-lg-6 ">
            <img src={dice} className="img-001" alt="" />
          </div>
          <div className="col-lg-6 text-end">
            <h1 className="display-1 fw-bold">Dice Game</h1>
            <button className="btn btn_c1 px-5" onClick={toggle}>
              Play Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
