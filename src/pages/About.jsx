import { useState } from "react";
import CodeBlock from "../components/CodeBlock";
import Header from "../components/Header";
import SupportSection from "../components/SupportSection";

export default function About() {
  const bgColor = "#3056D3";
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);

  return (
    <div className="about min-h-screen relative overflow-hidden flex flex-col justify-between ">
      <Header bgColor={bgColor} />

      <section className="py-16 px-6 flex flex-col gap-12  ">
        <span class="text-3xl flex justify-center font-semibold text-center">
          Welcome in SimpleSliders
        </span>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-7  mx-auto w-full max-w-[450px] text-lg">
            <div className="flex flex-col gap-4">
              <span
                onClick={() => setFaq1(!faq1)}
                className="font-medium text-xl  cursor-pointer bg-colorPrimary text-white py-3 px-4 rounded-br-2xl "
              >
                What is this website ?
              </span>
              {faq1 ? (
                <span className="px-3 mb-7">
                  This this a place where you can find few sliders with their
                  codes and explanations
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col gap-4">
              <span
                onClick={() => setFaq2(!faq2)}
                className="font-medium text-xl   cursor-pointer bg-colorPrimary text-white py-3 px-4 rounded-br-2xl"
              >
                {" "}
                Why use this website ?
              </span>
              {faq2 ? (
                <span className="px-3 mb-7">
                  Tired of importing plugins just to make a ridiculous slider? I
                  created this site to get the code directly. Of course, it's
                  not as complete as plugins but they are enough for most of the
                  time
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col gap-4">
              <span
                onClick={() => setFaq3(!faq3)}
                className="font-medium text-xl   cursor-pointer bg-colorPrimary text-white py-3 px-4 rounded-br-2xl"
              >
                Who am I ?
              </span>
              {faq3 ? (
                <span className="px-3 mb-7">
                  I am a web developer front end of 20 years old, you can find
                  me on my social nertwork below
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 justify-center ">
            <span className="text-xl font-medium  ">Find me here: </span>
            <ul className="flex gap-3 items-center text-sm  font-medium">
              <a href="https://twitter.com/niamor_web" target="_blank">
                {" "}
                <li className="btn--style2 outline-colorSecondary  bg-colorSecondary text-white  duration-150 hover:brightness-90">
                  TWITTER
                </li>
              </a>
              <a href="https://github.com/niamorweb" target="_blank">
                <li className="btn--style2 outline-colorSecondary bg-colorSecondary text-white  duration-150 hover:brightness-90">
                  GITHUB
                </li>
              </a>
            </ul>
          </div>
        </div>
      </section>
      <SupportSection />
    </div>
  );
}
