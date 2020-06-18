import { connect } from "react-redux";

import {
  rollDices,
  saveNumbers,
  checkCombinations,
  resetDices,
  checkFull,
  enableInputs,
  resetCounter,
  incrementCounter
} from "../actions/actionCreators";

import { Dices } from "./Dices";
import Combos from "./Combos";

const mapStateToProps = state => {
  return {
    numbers: state.numbers,
    combs: state.combs,
    disabled: state.disabled,
    counter: state.counter
  };
};

const mapDispatchToProps = {
  rollDices,
  saveNumbers,
  checkCombinations,
  resetDices,
  checkFull,
  enableInputs,
  resetCounter,
  incrementCounter
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dices);

const CombosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Combos);

export default {
  AppContainer,
  CombosContainer
};
