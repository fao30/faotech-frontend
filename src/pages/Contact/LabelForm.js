import React from "react";

const LabelForm = ({ htmlFor, text, className }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {text}
    </label>
  );
};

export default LabelForm;
