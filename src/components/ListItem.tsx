import React from "react";
import "../styles/userslist.css";

interface Props {
  avatarURL: string;
  firstName: string;
  lastName: string;
  refElement?: React.Ref<HTMLDivElement>;
}

export const ListItem: React.FC<Props> = props => {
  return (
    <div ref={props.refElement} className="list-item">
      <img src={props.avatarURL} alt="avatar" />
      <span>
        {props.firstName} {props.lastName}
      </span>
    </div>
  );
};
