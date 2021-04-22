import axios from 'axios';

import apiConfig from '../../config/api';
import { restructureCompanyObj } from '../../tools/restructureData';

export const INIT_APP = 'actions/INIT_APP';
export const GET_APP_INFO = 'actions/GET_APP_INFO';
export const SET_APP_INFO = 'actions/SET_APP_INFO';
export const SET_COMPANY_INFO = 'actions/SET_COMPANY_INFO';
export const SET_REQUEST_ERROR = 'actions/SET_REQUEST_ERROR';

export const initApp = () => (dispatch) => {
  dispatch({
    type: INIT_APP,
  });
};

export const setAppInfo = (payload) => (dispatch) => {
  dispatch({ type: SET_APP_INFO, payload });
};

export const setCompanyInfo = (payload) => (dispatch) => {
  dispatch({ type: SET_COMPANY_INFO, payload });
};

export const setRequestError = (payload) => (dispatch) => {
  dispatch({ type: SET_REQUEST_ERROR, payload });
};

export const getAppInfo = () => (dispatch) => {
  axios.get(apiConfig.randomCompanyUrl)
    .then((response) => {
      const data = restructureCompanyObj(response.data);
      dispatch(setCompanyInfo(data));
    })
    .catch((error) => {
      dispatch(setRequestError(error));
    });

  axios.get(apiConfig.randomAppUrl)
    .then((response) => {
      dispatch(setAppInfo(response.data));
    })
    .catch((error) => {
      dispatch(setRequestError(error));
    });
};
