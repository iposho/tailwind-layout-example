import { INIT_APP, SET_APP_INFO, SET_COMPANY_INFO } from '../actions';

const initialState = {
  initApp: false,
  appInfo: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
  case INIT_APP:
    return {
      ...state,
      initApp: true,
    };
  case SET_COMPANY_INFO:
    return {
      ...state,
      appInfo: {
        ...state.appInfo,
        ...action.payload,
      },
    };
  case SET_APP_INFO:
    return {
      ...state,
      appInfo: {
        ...state.appInfo,
        since: new Date().getFullYear().toString(),
        version: action.payload.app_version,
        author: action.payload.app_author,
      },
    };
  default:
    return state;
  }
};
