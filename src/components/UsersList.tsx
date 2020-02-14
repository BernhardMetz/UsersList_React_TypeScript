import React from "react";
import { ListItem } from "./ListItem";

interface Props { }

export const UsersList: React.FC<Props> = () => {
  return (
    <div>
      <div className="list-body">
        <div className="list-header">Users</div>
        <ListItem
          avatarURL="https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
          firstName="Michael"
          lastName="Lawson"
        />
      </div>
    </div>
  );
};
