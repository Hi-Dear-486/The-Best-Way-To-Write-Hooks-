"use client";
import React, { useMemo } from "react";

const usememo = () => {
  // it return the memoizevalues
  // agr hamay component ky render, or dependencie ky change pr values return ho that is calles memoizevalues
  const memoizevalues = useMemo(() => {
    return [1, 2, 3, 4, 5];
  }, []);

  console.log("values", memoizevalues);
  return <div></div>;
};

export default usememo;
