import React from "react";
import "./sidebar.css";
import { CheckCircle, Info } from "@mui/icons-material";

function sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="sidebarContainerWrapper">
        <ul className="listSidebarMenu">
          <li className="sidebarMenu active">Account</li>
          <li className="sidebarMenu">Activities</li>
          <li className="sidebarMenu">API Management</li>
          <li className="sidebarMenu">Address Management</li>
          <li className="sidebarMenu">
            <span className="label">Identity Verification</span>
            <span>
              <CheckCircle className="iconLabel checked" />
            </span>
          </li>
          <li className="sidebarMenu">Preferences</li>
          <li className="sidebarMenu">
            <span className="label">Security</span>
            <span>
              <Info className="iconLabel info" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default sidebar;
