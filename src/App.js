import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleİncrementByAmount = () => {
    dispatch(incrementByAmount(5));
  };

  return (
    <div>
      <h1>You count : {count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleİncrementByAmount}>increment +10</button>
    </div>
  );
}

// store içindeki state i getirmek için useSelector isimli bir hook kullanmamız gerekiyor.
