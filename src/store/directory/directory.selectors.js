import { createSelector } from "reselect";

const selectDirectory = ({ directory }) => directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections,
);
