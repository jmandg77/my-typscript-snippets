import React from "react";

interface IProps {
  className?: string;
  idValue: string;
}

// Copy to clipboard component
const CopyToClipboard = (props: IProps) => {
  const [text, setText] = React.useState("Click to Copy");
  const { idValue } = props;

  const copyIdToClipboard = () => {
    navigator.clipboard
      .writeText(idValue)
      .then(() => {
        setText("Copied!");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        window.setTimeout(() => {
          setText("Click to Copy");
        }, 3000);
      });
  };

  return <button onClick={copyIdToClipboard}>{text}</button>;
};
