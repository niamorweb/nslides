import React, { useEffect, useState } from "react";
import CodeBlock from "../components/CodeBlock";
import Header from "../components/Header";
import SupportSection from "../components/SupportSection";
import codesData from "/nslides/src/data/dataCodes.json";

export default function Codes() {
  const bgColor = "#3056D3";
  const [dataCodes, setDataCodes] = useState([]);

  useEffect(() => {
    setDataCodes(codesData);
  }, []);
  return (
    <div className="min-h-screen flex-col justify-between flex">
      <Header bgColor={bgColor} />

      <section>
        <div className="py-20 px-5 max-w-[1300px] w-full mx-auto flex gap-14">
          <div className="flex  w-full gap-6">
            <div className="flex flex-col w-full gap-20 flex-wrap justify-center">
              {dataCodes.map((x) => {
                return (
                  <CodeBlock
                    visualization={x.visualization}
                    codeHtml={x.htmlCode}
                    codeCss={x.cssCode}
                    codeJs={x.jsCode}
                    description={x.description}
                    id={x.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <SupportSection />
    </div>
  );
}
