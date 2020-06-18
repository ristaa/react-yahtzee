function counter(state = [], action) {
  switch (action.type) {
    case "RESET_COUNTER":
      return 0;
    case "INCREMENT_COUNTER":
      return state + action.counter;
    default:
      return state;
  }
}

export default counter;
