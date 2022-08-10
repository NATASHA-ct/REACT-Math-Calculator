import React, { useState } from "react";
import calculate from "../logic/calculate";

const Calculator = () => {
  const [state, setState] = useState(0);
  const clickBtn = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <>
      <div className="main-container">
        <div className="display">
          <span>{state.next || state.total || 0}</span>
        </div>

        <div className="all-btns">
          {/* first row buttons */}
          <button className="operator grey" type="button" onClick={clickBtn}>
            AC
          </button>
          <button className="operator grey" type="button" onClick={clickBtn}>
            +/-
          </button>
          <button className="operator grey" type="button" onClick={clickBtn}>
            %
          </button>
          <button className="operator orange" type="button" onClick={clickBtn}>
            ÷
          </button>

          {/* second row buttons */}
          <button className="num grey" type="button" onClick={clickBtn}>
            7
          </button>
          <button className="num grey" type="button" onClick={clickBtn}>
            8
          </button>
          <button className="num grey" type="button" onClick={clickBtn}>
            9
          </button>
          <button className="operator orange" type="button" onClick={clickBtn}>
            x
          </button>

          {/* third row buttons */}
          <button className="num grey" type="button" onClick={clickBtn}>
            4
          </button>
          <button className="num grey" type="button" onClick={clickBtn}>
            5
          </button>
          <button className="num grey" type="button" onClick={clickBtn}>
            6
          </button>
          <button className="operator orange" type="button" onClick={clickBtn}>
            -
          </button>

          {/* fourth row buttons */}
          <button className="num grey" type="button" onClick={clickBtn}>
            1
          </button>
          <button className="num grey" type="button" onClick={clickBtn}>
            2
          </button>
          <button className="num grey" type="button" onClick={clickBtn}>
            3
          </button>
          <button className="operator orange" type="button" onClick={clickBtn}>
            +
          </button>

          {/* last row buttons */}
          <button className="num zero grey" type="button" onClick={clickBtn}>
            0
          </button>
          <button className="num grey" type="button" onClick={clickBtn}>
            .
          </button>
          <button className="operator orange" type="button" onClick={clickBtn}>
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
