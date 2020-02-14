import React, { useState, useRef, useCallback } from "react";
import { ListItem } from "./ListItem";
import { useUsersLoad } from "../hooks/useUsersLoad";

interface User {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
}

interface HookData {
  users: User[];
  loading: boolean;
  error: boolean;
  hasMore: boolean;
}

export const UsersList: React.FC = () => {
  const [pgNum, setPgNum] = useState(1);
  let observer = useRef<IntersectionObserver>();
  let hookRes: HookData = useUsersLoad(pgNum);
  const lastUserElementRef = useCallback(
    node => {
      if (hookRes.loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hookRes.hasMore)
          setPgNum(prevPgNum => prevPgNum + 1);
      });
      if (node) observer.current.observe(node);
    },
    [hookRes.hasMore, hookRes.loading]
  );
  return (
    <div>
      <div className="list-body">
        <div className="list-header">Users</div>
        {hookRes.users.map((user, index) => {
          if (hookRes.users.length === index + 1)
            return (
              <ListItem
                key={user.id}
                refElement={lastUserElementRef}
                avatarURL={user.avatar}
                firstName={user.first_name}
                lastName={user.last_name}
              />
            );
          else
            return (
              <ListItem
                key={user.id}
                avatarURL={user.avatar}
                firstName={user.first_name}
                lastName={user.last_name}
              />
            );
        })}
        {hookRes.loading && <div className="list-footer">Loading...</div>}
        {hookRes.error && <div className="list-footer">Error</div>}
        {!hookRes.hasMore && <div className="list-footer">No more users</div>}
      </div>
    </div>
  );
};
