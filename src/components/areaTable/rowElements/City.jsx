import React from "react";

const City = ({ node, clickHandler }) => {
  return (
    <span
      className="hover:font-[700] hover:underline hover:text-primary-end cursor-pointer"
      onClick={() => clickHandler(node?.city?.name, "City", node?.city?.id)}
    >
      {node?.city?.name}
    </span>
  );
};

export default City;
