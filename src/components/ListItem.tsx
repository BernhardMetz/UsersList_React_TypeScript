import React from "react";
import "../styles/userlist.css";

interface Props { }

export const ListItem: React.FC<Props> = () => {
  return (
    <div className="list-item">
      <img
        src="https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        alt="avatar"
      />
      <span>Michaelddddd Lawson</span>
    </div>
  );
};
