// roll the dices
export function rollDices(index, saved) {
  return {
    type: "ROLL_DICES",
    index,
    saved
  };
}

//reset dices
export function resetDices(numbers) {
  return {
    type: "RESET_DICES",
    numbers
  };
}

// save numbers
export function saveNumbers(index, number) {
  return {
    type: "SAVE_NUMBERS",
    index,
    number
  };
}

// check combinations
export function enableInputs(times, disabled) {
  return {
    type: "ENABLE_INPUTS",
    times,
    disabled
  };
}

//reset counter
export function resetCounter(counter) {
  return {
    type: "RESET_COUNTER",
    counter
  };
}

//increment counter
export function incrementCounter(counter) {
  return {
    type: "INCREMENT_COUNTER",
    counter
  };
}

// check combinations
export function checkCombinations(combs, numbers, clicked, disabled) {
  return {
    type: "CHECK_COMBS",
    combs,
    numbers,
    clicked,
    disabled
  };
}

// check full
export function checkFull(numbers, disabled) {
  return {
    type: "CHECK_FULL",
    numbers,
    disabled
  };
}
