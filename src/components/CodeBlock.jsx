import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import DynamicComponent from "./DynamicComponent";

export default function CodeBlock({
  visualization,
  codeHtml,
  codeCss,
  codeJs,
  description,
  id,
}) {
  const [isCopied, setIsCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("html");
  const [showCode, setShowCode] = useState(false);
  const copyButtonRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleShowCode = () => {
    setShowCode(!showCode);
    if (showCode === false) {
      document.body.style.overflow = "hidden";
    }
    if (showCode === true) {
      document.body.style.overflow = "visible";
    }
  };
  const renderTabButton = (tabName) => {
    return (
      <button
        className={`tab-button ${
          activeTab === tabName ? "underline underline-offset-4   " : ""
        }`}
        onClick={() => handleTabClick(tabName)}
      >
        {tabName.toUpperCase()}
      </button>
    );
  };

  const renderActiveCode = () => {
    const code =
      activeTab === "html" ? codeHtml : activeTab === "css" ? codeCss : codeJs;

    const language =
      activeTab === "html"
        ? Prism.languages.html
        : "css"
        ? Prism.languages.css
        : Prism.languages.javascript;
    return (
      <div className="border-2 shadow-md  p-4 rounded-sm  ">
        <div className="relative w-full flex flex-col gap-5 items-center">
          <DynamicComponent name={visualization} />
          <div className="flex justify-between w-full items-start lg:items-start flex-col lg:flex-row gap-6">
            <div className="flex flex-col gap-2 mt-3 mb-1 self-baseline pl-2">
              <span className="font-semibold text-xl ">Slider {id}</span>
              <ul className=" border-l-2 border-colorPrimary pl-3">
                {description.map((descriptionItem, descriptionIndex) => (
                  <li key={descriptionIndex}>{descriptionItem}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={handleShowCode}
              className="btn--style2 lg:mt-4 w-full md:w-[300px] outline-colorPrimary bg-colorPrimary text-white  duration-150 hover:brightness-90 "
            >
              Voir le code
            </button>
          </div>
          {showCode ? (
            <div className="fixed z-20 backdrop-blur-sm	w-screen h-screen flex justify-center items-center top-1/2 -translate-y-1/2 left-0">
              <div className="relative flex flex-col justify-center items-center w-full">
                <button
                  onClick={handleShowCode}
                  className="btn--style2 outline-colorPrimary bg-colorPrimary text-white  duration-150 hover:brightness-90"
                >
                  FERMER
                </button>
                <pre className="w-full max-w-[1300px]  h-[500px]">
                  <div className="flex justify-between mb-5 ">
                    <div className="tab-buttons flex gap-5">
                      {renderTabButton("html")}
                      {renderTabButton("css")}
                      {renderTabButton("javascript")}
                    </div>
                    <button
                      className="copy-button right-5 top-5 bg-colorText text-white px-3 py-1 duration-150 hover:brightness-90"
                      ref={copyButtonRef}
                      onClick={handleCopyClick}
                    >
                      {isCopied ? "Copié !" : "Copier"}
                    </button>
                  </div>
                  <div className="code-inputs">
                    <div
                      className="code-input"
                      style={{
                        display: activeTab === "html" ? "block" : "none",
                      }}
                    ></div>
                    <div
                      className="code-input"
                      style={{
                        display: activeTab === "css" ? "block" : "none",
                      }}
                    ></div>
                    <div
                      className="code-input"
                      style={{
                        display: activeTab === "javascript" ? "block" : "none",
                      }}
                    ></div>
                  </div>
                  <code
                    className={`language-${activeTab} code_to_copy list-numbers`}
                    dangerouslySetInnerHTML={{
                      __html: Prism.highlight(code, language, activeTab),
                    }}
                  />
                </pre>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(
      document.querySelector(".code_to_copy").textContent
    );
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [showCode]);

  return <div className="Code w-full">{renderActiveCode()}</div>;
}
