import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clickBtn = this.clickBtn.bind(this);
  }

  clickBtn(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="main-container">
        <div className="display">
          <span>{next || total || 0}</span>
        </div>

        <div className="all-btns">
          {/* first row buttons */}
          <button
            className="operator grey"
            type="button"
            onClick={this.clickBtn}
          >
            AC
          </button>
          <button
            className="operator grey"
            type="button"
            onClick={this.clickBtn}
          >
            +/-
          </button>
          <button
            className="operator grey"
            type="button"
            onClick={this.clickBtn}
          >
            %
          </button>
          <button
            className="operator orange"
            type="button"
            onClick={this.clickBtn}
          >
            ÷
          </button>

          {/* second row buttons */}
          <button className="num grey" type="button" onClick={this.clickBtn}>
            7
          </button>
          <button className="num grey" type="button" onClick={this.clickBtn}>
            8
          </button>
          <button className="num grey" type="button" onClick={this.clickBtn}>
            9
          </button>
          <button
            className="operator orange"
            type="button"
            onClick={this.clickBtn}
          >
            x
          </button>

          {/* third row buttons */}
          <button className="num grey" type="button" onClick={this.clickBtn}>
            4
          </button>
          <button className="num grey" type="button" onClick={this.clickBtn}>
            5
          </button>
          <button className="num grey" type="button" onClick={this.clickBtn}>
            6
          </button>
          <button
            className="operator orange"
            type="button"
            onClick={this.clickBtn}
          >
            -
          </button>

          {/* fourth row buttons */}
          <button className="num grey" type="button" onClick={this.clickBtn}>
            1
          </button>
          <button className="num grey" type="button" onClick={this.clickBtn}>
            2
          </button>
          <button className="num grey" type="button" onClick={this.clickBtn}>
            3
          </button>
          <button
            className="operator orange"
            type="button"
            onClick={this.clickBtn}
          >
            +
          </button>

          {/* last row buttons */}
          <button
            className="num zero grey"
            type="button"
            onClick={this.clickBtn}
          >
            0
          </button>
          <button className="num grey" type="button" onClick={this.clickBtn}>
            .
          </button>
          <button
            className="operator orange"
            type="button"
            onClick={this.clickBtn}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
