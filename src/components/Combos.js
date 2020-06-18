import React, { Component } from "react";

const dices = [1, 2, 3, 4, 5, 6];

function getOccurrence(array, value) {
  var count = 0;
  array.forEach(v => v === value && count++);
  return count;
}

class Combos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      min: 0,
      max: 0,
      full: 0,
      straight: 0,
      triling: 0,
      poker: 0,
      yamb: 0,
      sumNums: 0,
      sumMinmax: 0,
      sumCombs: 0,
      total: 0
    };
  }

  checkCombs(event, el, disabled) {
    this.setState({ [event.target.id]: true });

    this.props.checkCombinations(
      this.props.combs,
      this.props.numbers,
      el,
      disabled
    );

    let countNums = 0;
    for (let i = 0; i < this.props.numbers.length; i++) {
      if (this.props.numbers[i].number === el) {
        countNums++;
      }
    }

    this.sumNumbers(el, this.props.combs);
    this.props.resetDices(this.props.numbers);
    this.props.resetCounter(0);
    this.props.enableInputs(0, false);

    this.setState({
      sumMinmax: (this.state.max - this.state.min) * countNums
    });

    if (+this.state.sumMinmax === 0) {
      this.setState({
        total: this.state.total + (this.state.max - this.state.min) * countNums
      });
    }

    this.setState({
      total: this.state.total + el * countNums
    });
  }

  checkFull(disabled) {
    let elems = [];

    let onlyNums = [];

    this.props.numbers.forEach(el => {
      onlyNums[el.id - 1] = el.number;
    });

    let fullSum = 0;

    onlyNums.forEach((el, index) => {
      elems[el] = getOccurrence(onlyNums, el);
    });

    elems.forEach((el, index) => {
      if (el === 3) {
        fullSum += el * index;
      }

      if (el === 2) {
        fullSum += el * index;
      }
    });

    if (elems.includes(2) && elems.includes(3)) {
      this.setState({
        full: fullSum + 30,
        sumCombs: this.state.sumCombs + fullSum + 30,
        total: this.state.total + fullSum + 30
      });
    }

    this.props.resetDices(this.props.numbers);
    this.props.enableInputs(0, false);
    this.props.resetCounter(0);
  }

  checkStraight(disabled) {
    let onlyNums = [];
    let countItems = 0;

    this.props.numbers.forEach(el => {
      onlyNums[el.id - 1] = el.number;
    });

    onlyNums.sort(function(a, b) {
      return a - b;
    });

    onlyNums.forEach((el, index) => {
      if (index > 0) {
        if (el === +onlyNums[index - 1] + 1) {
          countItems++;
        }
      }
    });

    if (countItems === 4) {
      if (this.props.counter === 1) {
        this.setState({
          straight: 66,
          sumCombs: this.state.sumCombs + 66,
          total: this.state.total + 66
        });
      }

      if (this.props.counter === 2) {
        this.setState({
          straight: 56,
          sumCombs: this.state.sumCombs + 56,
          total: this.state.total + 56
        });
      }

      if (this.props.counter === 3) {
        this.setState({
          straight: 46,
          sumCombs: this.state.sumCombs + 46,
          total: this.state.total + 46
        });
      }
    }

    this.props.resetDices(this.props.numbers);
    this.props.enableInputs(0, false);
    this.props.resetCounter(0);
  }

  checkMinimum(disabled) {
    let min = 0;
    this.props.numbers.forEach(el => {
      min += +el.number;
    });

    this.setState({ min: min });

    let sumMinmax = 0;
    sumMinmax = (this.state.max - min) * this.props.combs[0];

    if (+this.state.max !== 0 && +this.props.combs[0] !== 0) {
      this.setState({
        sumMinmax: sumMinmax,
        total: this.state.total + sumMinmax
      });
    }

    this.props.resetDices(this.props.numbers);
    this.props.enableInputs(0, false);
    this.props.resetCounter(0);
  }

  checkMaximum(disabled) {
    let max = 0;
    this.props.numbers.forEach(el => {
      max += +el.number;
    });

    this.setState({ max: max });

    let sumMinmax = 0;
    sumMinmax = (max - this.state.min) * this.props.combs[0];

    if (+this.state.min !== 0 && +this.props.combs[0] !== 0) {
      this.setState({
        sumMinmax: sumMinmax,
        total: this.state.total + sumMinmax
      });
    }

    this.props.resetDices(this.props.numbers);
    this.props.enableInputs(0, false);
    this.props.resetCounter(0);
  }

  checkTriling(disabled) {
    let onlyNums = [];
    let triling = 0;

    this.props.numbers.forEach(el => {
      onlyNums[el.id - 1] = el.number;
    });

    onlyNums.forEach((el, index) => {
      let times = getOccurrence(onlyNums, el);

      if (times > 2) {
        triling = el * 3;
        this.setState({
          triling: triling + 20,
          sumCombs: this.state.sumCombs + triling + 20,
          total: this.state.total + triling + 20
        });
      }
    });

    this.props.resetDices(this.props.numbers);
    this.props.enableInputs(0, false);
    this.props.resetCounter(0);
  }

  checkPoker(disabled) {
    let onlyNums = [];
    let poker = 0;

    this.props.numbers.forEach(el => {
      onlyNums[el.id - 1] = el.number;
    });

    onlyNums.forEach((el, index) => {
      let times = getOccurrence(onlyNums, el);

      if (times > 3) {
        poker = el * 4;
        this.setState({
          poker: poker + 40,
          sumCombs: this.state.sumCombs + poker + 40,
          total: this.state.total + poker + 40
        });
      }
    });

    this.props.resetDices(this.props.numbers);
    this.props.enableInputs(0, false);
    this.props.resetCounter(0);
  }

  checkYamb(disabled) {
    let onlyNums = [];
    let yamb = 0;

    this.props.numbers.forEach(el => {
      onlyNums[el.id - 1] = el.number;
    });

    onlyNums.forEach((el, index) => {
      let times = getOccurrence(onlyNums, el);

      if (times > 4) {
        yamb = el * 5;
        this.setState({
          yamb: yamb + 50,
          sumCombs: this.state.sumCombs + yamb + 50,
          total: this.state.total + yamb + 50
        });
      }
    });

    this.props.resetDices(this.props.numbers);
    this.props.enableInputs(0, false);
    this.props.resetCounter(0);
  }

  sumNumbers(elem, combs) {
    let onlyNums = [];

    this.props.numbers.forEach(el => {
      onlyNums[el.id - 1] = el.number;
    });

    let sumNums = elem * getOccurrence(onlyNums, elem);
    combs.forEach(el => {
      sumNums += el;
    });
    this.setState({ sumNums: sumNums, total: this.state.total + sumNums });
  }

  render() {
    return (
      <div>
        {this.props.disabled}
        <div className="all-combos">
          <div className="combos-names">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span className="sum-cell">SUM</span>
            <span>MIN</span>
            <span>MAX</span>
            <span className="sum-cell">SUM</span>
            <span>STRAIGHT</span>
            <span>THREE OF KIND</span>
            <span>FULL</span>
            <span>POKER</span>
            <span>YAMB</span>
            <span className="sum-cell">SUM</span>
          </div>
          <div className="combos">
            {dices.map((el, index) => (
              <button
                onClick={event => this.checkCombs(event, el, true)}
                disabled={
                  this.props.disabled || this.state["id" + (+index + 1)]
                }
                key={index}
                id={"id" + (+index + 1)}
              >
                {this.props.combs[index]}
              </button>
            ))}
            <button className="sum-cell">{this.state.sumNums}</button>
            <button
              onClick={() => this.checkMinimum(true)}
              disabled={this.props.disabled}
            >
              {this.state.min}
            </button>
            <button
              onClick={() => this.checkMaximum(true)}
              disabled={this.props.disabled}
            >
              {this.state.max}
            </button>
            <button className="sum-cell">
              {this.state.sumMinmax > 0 ? this.state.sumMinmax : 0}
            </button>
            <button
              onClick={() => this.checkStraight(true)}
              disabled={this.props.disabled}
            >
              {this.state.straight}
            </button>
            <button
              onClick={() => this.checkTriling(true)}
              disabled={this.props.disabled}
            >
              {this.state.triling}
            </button>
            <button
              onClick={() => this.checkFull(true)}
              disabled={this.props.disabled}
            >
              {this.state.full}
            </button>
            <button
              onClick={() => this.checkPoker(true)}
              disabled={this.props.disabled}
            >
              {this.state.poker}
            </button>
            <button
              onClick={() => this.checkYamb(true)}
              disabled={this.props.disabled}
            >
              {this.state.yamb}
            </button>
            <button className="sum-cell">{this.state.sumCombs}</button>
          </div>
          <div className="total-sum">
            <span>TOTAL</span>
            <button className="sum-cell">{this.state.total}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Combos;
