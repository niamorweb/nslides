import React, { useState, useEffect } from "react";

function DynamicComponent(props) {
  const [component, setComponent] = useState(null);

  useEffect(() => {
    async function fetchComponent() {
      const { default: DynamicComponent } = await import(
        `nslides/src/data/sliderLibrary/${props.name}`
      );
      setComponent(<DynamicComponent {...props} />);
    }

    fetchComponent();
  }, [props.name, props]);

  return <div className="w-full">{component}</div>;
}

export default DynamicComponent;
