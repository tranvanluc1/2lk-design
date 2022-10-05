import React from "react";
import CommonButton from "components/Buttons/CommonButton";
function ButtonExample() {
  return (
    <div>
      <CommonButton
        title="Click me"
        onclick={() => {
          return "Hello world";
        }}
      />
    </div>
  );
}

export default ButtonExample;
