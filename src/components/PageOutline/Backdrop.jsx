import React from "react";

import "./Backdrop.scss";

const Backdrop = ({ closeDrawer }) => {
  return <div className="backdrop" onClick={closeDrawer} />;
};

export default Backdrop;
