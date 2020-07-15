import { createSelector } from "reselect";

const selectBrowser = ({ browser }) => browser;

export const selectBrowserisWebPSupported = createSelector(
  [selectBrowser],
  (browser) => browser.isWebPSupported,
);
