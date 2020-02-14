import React from "react";
import "../styles/userslist.css";

interface Props {
  avatarURL: string;
  firstName: string;
  lastName: string;
}

export const ListItem: React.FC<Props> = ({
  avatarURL,
  firstName,
  lastName
}) => {
  return (
    <div className="list-item">
      <img src={avatarURL} alt="avatar" />
      <span>
        {firstName} {lastName}
      </span>
    </div>
  );
};
