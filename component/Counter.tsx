import React, { useState } from "react";

function Counter() {
  interface CountHistory {
    number: number;
    type: string;
  }
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<number>(0);
  const [countHistory, setCountHistory] = useState<CountHistory[]>([]);

  const addCount = () => {
    setCount(count + input);
    setCountHistory([...countHistory, { number: input, type: "Add" }]);
    setInput(0);
  };

  const subtractCount = () => {
    setCount(count - input);
    setCountHistory([...countHistory, { number: input, type: "Subtract" }]);
    setInput(0);
  };
  return (
    <div className="container">
      <h1 className="counter">{count}</h1>
      <input
        type={"number"}
        className="input"
        value={input}
        onChange={(e) => setInput(Number(e.currentTarget.value))}
      />
      <div className="btn-group">
        <button onClick={addCount} disabled={!input} className="counter-btn">
          Add Count
        </button>
        <button
          onClick={subtractCount}
          disabled={!input}
          className="counter-btn"
        >
          Subtract Count
        </button>
      </div>
      <div>
        <h3 className="title">History</h3>
        {countHistory &&
          countHistory.map((historyItem: any, index: number) => {
            return (
              <div key={index} className="history-container">
                <span>{historyItem.number}</span>
                <span>{historyItem.type}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Counter;
