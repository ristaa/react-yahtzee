function disabled(state = [], action) {
  switch (action.type) {
    case "ENABLE_INPUTS":
      if (state === true && action.times === 1) {
        return !state;
      }

      if (state === false && action.times === 0) {
        return !state;
      }

      return state;
    default:
      return state;
  }
}

export default disabled;
