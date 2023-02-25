import { NavLink } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="home min-h-screen relative overflow-hidden bg-colorPrimary ">
      <img
        className="absolute lg:scale-125 -bottom-6 right-12 lg:right-48"
        src="/src/assets/dotted-shape.svg"
        alt=""
      />
      <img
        className="absolute lg:scale-125  bottom-[20%] -left-4 lg:left-48"
        src="/src/assets/dotted-shape.svg"
        alt=""
      />
      <Header />
      <section className="intro relative mt-[67px] text-white flex justify-center ">
        <div>
          <div className=" flex flex-col gap-5 max-w-[50rem] mx-auto text-center">
            <span className="font-bold  uppercase  text-4xl  leading-[40px] ">
              You want make simple slides ?
            </span>
            <span className="text-base leading-7">
              You will find here 3 types of slider with their codes and
              explanations on the javascript codes
            </span>
          </div>

          <div className="mt-10 flex gap-4 items-center justify-center ">
            <NavLink to="/nslides/codes">
              {" "}
              <button className="btn--style2 uppercase outline-colorSecondary bg-colorSecondary text-white  duration-150 hover:brightness-90  ">
                See codes
              </button>
            </NavLink>
            <NavLink to="/nslides/about">
              {" "}
              <button className="btn--style2 uppercase border-white bg-white duration-150 text-colorPrimary  hover:brightness-90">
                About
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
