import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const counterUp = () => setCounter(counter + 1);

  const counterDown = () => setCounter(counter - 1);
  return (
    <div>
      <div className="SectionCounter">
        <Button primary onClick={counterDown}>
          -
        </Button>
        <span className="span"> {counter} </span>
        <Button primary onClick={counterUp}>
          +
        </Button>
      </div>
    </div>
  );
}

export default Counter;
