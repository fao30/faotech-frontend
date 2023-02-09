import React from "react";

const InputContact = ({ type, id, name, placeholder, className }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default InputContact;
