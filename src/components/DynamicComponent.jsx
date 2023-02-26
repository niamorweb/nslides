import React, { useState, useEffect } from "react";

function DynamicComponent(name) {
  console.log("props = ", name);
  console.log(name.name);
  const [component, setComponent] = useState(null);

  useEffect(() => {
    async function fetchComponent() {
      const { default: DynamicComponent } = await import(
        `../data/sliderLibrary/${name}`
      );
      setComponent(<DynamicComponent {...name} />);
    }

    fetchComponent();
  }, [props.name, props]);

  return <div className="w-full">{component}</div>;
}

export default DynamicComponent;
