"use client";
import React, { useCallback, useState } from "react";

export const DebouncedInput = React.memo(({ onChange }) => {
  console.log("Input rendered");
  return <input type="text" onChange={onChange} placeholder="Type here..." />;
});

const parentComponent = () => {
  const [value, setValue] = useState();
  const storeval = useCallback(() => {
    return () => [1, 2, 3, 4, 5];
  });

  const innerfun = storeval()();
  console.log("innerfun", innerfun);

  //it return the memoize func
  // agr hamay dependency ky change pr ya component ky render pr agr function return ho that is called memoize function
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return (
    <>
      <h1>value: {value}</h1>
      <DebouncedInput onChange={handleChange} />
    </>
  );
};

export default parentComponent;
