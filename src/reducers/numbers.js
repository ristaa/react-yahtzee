function numbers(state = [], action) {
  switch (action.type) {
    case "ROLL_DICES":
      return state.map((item, index) => {
        // Replace the item if it's not saved
        if (item.saved === false) {
          return {
            ...item,
            number: Math.floor(Math.random() * 6 + 1)
          };
        }

        // Leave every other item unchanged
        return item;
      });
    case "SAVE_NUMBERS":
      return state.map((item, index) => {
        // Replace the item at index 2
        if (index === action.index && item.saved === false) {
          return {
            ...item,
            saved: true
          };
        } else if (index === action.index && item.saved === true) {
          return {
            ...item,
            saved: false
          };
        }

        // Leave every other item unchanged
        return item;
      });
    case "RESET_DICES":
      return state.map((item, index) => {
        return {
          ...item,
          number: 6,
          saved: false
        };
      });
    default:
      return state;
  }
}

export default numbers;
