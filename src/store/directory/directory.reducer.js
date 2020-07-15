import DIRECTORY_INITIAL_STATE from "./directory.initial-state";

const directoryReducer = (state = DIRECTORY_INITIAL_STATE, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default directoryReducer;
