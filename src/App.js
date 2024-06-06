import { useState } from "react";
export default function App() {
  return <Counter />;
}

function addDays(date, days) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}

function Counter() {
  const date = new Date();
  const [days, setDays] = useState(0);
  const [step, setStep] = useState(1);

  function Reset() {
    setDays(0);
    setStep(1);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <br></br>
      <button
        onClick={() => {
          if (step > 1) setStep(step - 1);
        }}
      >
        -
      </button>
      <input
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={(e) => setStep(+e.target.value)}
      ></input>
      {`${step}`}
      <button
        onClick={() => {
          if (step < 10) setStep(step + 1);
        }}
      >
        +
      </button>
      <br></br>
      <button onClick={() => setDays(days - step)}>-</button>
      <input
        type="text"
        value={days}
        onChange={(e) => setDays(+e.target.value)}
      ></input>

      <button onClick={() => setDays(days + step)}>+</button>
      <p>{`${days} days from today is ${addDays(
        date,
        days
      ).toDateString()}`}</p>
      <button onClick={() => Reset()}>Reset</button>
    </div>
  );
}
