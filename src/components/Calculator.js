// eslint-disable-next-line react/prefer-stateless-function

import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-container">
        <div className="display">0</div>

        <div className="all-btns">
          {/* first row buttons */}
          <button className="operator grey" type="button">
            AC
          </button>
          <button className="operator grey" type="button">
            +/-
          </button>
          <button className="operator grey" type="button">
            %
          </button>
          <button className="operator orange" type="button">
            ÷
          </button>

          {/* second row buttons */}
          <button className="num grey" type="button">
            7
          </button>
          <button className="num grey" type="button">
            8
          </button>
          <button className="num grey" type="button">
            9
          </button>
          <button className="operator orange" type="button">
            x
          </button>

          {/* third row buttons */}
          <button className="num grey" type="button">
            4
          </button>
          <button className="num grey" type="button">
            5
          </button>
          <button className="num grey" type="button">
            6
          </button>
          <button className="operator orange" type="button">
            -
          </button>

          {/* fourth row buttons */}
          <button className="num grey" type="button">
            1
          </button>
          <button className="num grey" type="button">
            2
          </button>
          <button className="num grey" type="button">
            3
          </button>
          <button className="operator orange" type="button">
            +
          </button>

          {/* last row buttons */}
          <button className="num zero grey" type="button">
            0
          </button>
          <button className="num grey" type="button">
            .
          </button>
          <button className="operator orange" type="button">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
