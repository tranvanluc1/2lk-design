import React from "react";

interface Props {
  title: string;
  onclick: () => {};
}

function CommonButton({ title, onclick }: Props) {
  return <button onClick={onclick}>{title}</button>;
}

export default CommonButton;
