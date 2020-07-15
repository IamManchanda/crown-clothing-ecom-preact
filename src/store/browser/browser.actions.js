import {
  IS_WEB_P_SUPPORTED_START,
  IS_WEB_P_SUPPORTED_SUCCESS,
  IS_WEB_P_SUPPORTED_FAILURE,
} from "./browser.types";

export const isWebPSupportedStart = () => ({
  type: IS_WEB_P_SUPPORTED_START,
});

export const isWebPSupportedSuccess = () => ({
  type: IS_WEB_P_SUPPORTED_SUCCESS,
  payload: true,
});

export const isWebPSupportedFailure = () => ({
  type: IS_WEB_P_SUPPORTED_FAILURE,
  payload: false,
});
