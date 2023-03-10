import React, { useState, useEffect } from "react";

export default function DynamicComponent(props) {
  const [component, setComponent] = useState(null);

  useEffect(() => {
    async function fetchComponent() {
      const { default: DynamicComponent } = await import(
        `../data/sliderLibrary/${props.name}.jsx`
      );
      setComponent(<DynamicComponent {...props} />);
    }

    fetchComponent();
  }, [props.name, props]);

  return <div className="w-full">{component}</div>;
}
