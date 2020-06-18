function combs(state = [], action) {
  switch (action.type) {
    case "CHECK_COMBS":
      return state.map((el, index) => {
        if (action.clicked === index + 1 && el === 0) {
          let countNums = 0;
          for (let i = 0; i < action.numbers.length; i++) {
            if (action.numbers[i].number === action.clicked) {
              countNums++;
            }
          }

          return (el + countNums) * (index + 1);
        }

        return el;
      });
    default:
      return state;
  }
}

export default combs;
