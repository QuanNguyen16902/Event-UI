import React from "react";
import { Button } from "react-bootstrap";

const ToggleButton = ({ toggleSidebar }) => {
  return (
    <Button
      variant="primary"
      className="position-fixed"
      style={{ top: "60px", left: "10px", zIndex: 1050 }}
      onClick={toggleSidebar}
    >
      Toggle Sidebar
    </Button>
  );
};

export default ToggleButton;
