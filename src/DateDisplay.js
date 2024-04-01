import React from 'react';

const DateDisplay = () => {
  const dateFormat = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return <h4 className="text-white mt-3">{dateFormat}</h4>;
};

export default DateDisplay;
