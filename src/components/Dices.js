import React from "react";
import "../styles.css";

// Dices
export class Dices extends React.Component {
  rollDicesOn(counter) {
    this.props.incrementCounter(1);

    this.props.enableInputs(1, true);
    if (this.props.counter < 3) {
      this.props.rollDices(this.props.numbers);
    } else {
      alert("Maxxed Out!");
    }
  }

  render() {
    return (
      <div className="dices-component">
        <div className="dices">
          {this.props.numbers.map((el, index) => (
            <button
              key={index}
              onClick={() => this.props.saveNumbers(index, el.number)}
              className={el.saved === true ? "saved" : ""}
              disabled={this.props.disabled}
            >
              {el.number}
            </button>
          ))}
        </div>
        <button
          onClick={() => this.rollDicesOn(this.props.counter)}
          className={this.props.counter < 3 ? "rollBtn" : "noRollBtn"}
        >
          ROLL!
        </button>
      </div>
    );
  }
}
