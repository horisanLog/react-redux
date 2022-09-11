import { useDispatch } from "react-redux";
// import { useCounterDispatch } from "../context/CounterContext"

const CounterButton = ({ calcType, step, actionCreator }) => {
  const dispatch = useDispatch();
  // const dispatch = useCounterDispatch();

  // console.log(add(step))
  const clickHandler = () => {
    // const action = calcType === '+' ? add(step) : minus(step);
    // console.log(action)
    dispatch(actionCreator(step));
  }

  return (
    <button onClick={clickHandler}>
      {calcType}
      {step}
    </button>
  );
};
export default CounterButton;
