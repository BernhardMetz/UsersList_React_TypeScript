import { ActionType } from '../../interfaces/types';
import { GET_USERS } from '../../interfaces/consts';
import axios from "axios";
import { Dispatch } from 'react';

export const getUsers = (pageNumber: number) => {
  let req = axios({
    method: "GET",
    url: "https://reqres.in/api/users",
    params: { page: pageNumber },
  })
  return (dispatch: Dispatch<any>) => {
    req.then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    }).catch(err => {
      dispatch({})
    });
  }
}