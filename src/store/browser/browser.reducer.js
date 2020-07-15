import BROWSER_INITIAL_STATE from "./browser.initial-state";
import {
  IS_WEB_P_SUPPORTED_START,
  IS_WEB_P_SUPPORTED_SUCCESS,
  IS_WEB_P_SUPPORTED_FAILURE,
} from "./browser.types";

const browserReducer = (state = BROWSER_INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case IS_WEB_P_SUPPORTED_START:
      return state;
    case IS_WEB_P_SUPPORTED_SUCCESS:
    case IS_WEB_P_SUPPORTED_FAILURE:
      return {
        ...state,
        isWebPSupported: payload,
      };
    default:
      return state;
  }
};

export default browserReducer;
