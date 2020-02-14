import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "../interfaces/types";

export const useUsersLoad = (pageNumber: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: () => void;
    axios({
      method: "GET",
      url: "https://reqres.in/api/users",
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken(c => (cancel = c))
    })
      .then(res => {
        setUsers(prevUsers => {
          return [...prevUsers, ...res.data.data]
        });
        setHasMore(res.data.total_pages > pageNumber);
        setLoading(false);
      })
      .catch(err => {
        if (axios.isCancel(err)) return;
        setError(true);
      });
    return () => cancel();
  }, [pageNumber]);
  return { users, loading, error, hasMore };
};
