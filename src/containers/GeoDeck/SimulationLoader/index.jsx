import React, { useState } from "react";
const Simulations = ({ tab, setTab }) => {
  return (
    <div
      className={`simulatin-loader ${tab === 3 ? "active" : ""} `}
      onClick={() => setTab(3)}
    >
      <h5>Simulations</h5>
    </div>
  );
};

export default Simulations;
