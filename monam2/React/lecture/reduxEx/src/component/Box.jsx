import React from "react";
import { useSelector } from "react-redux";

const Box = () => {
  const count = useSelector((state) => state.count);

  return <div>
    <p>count는 {count}</p>
  </div>;
};

export default Box;
