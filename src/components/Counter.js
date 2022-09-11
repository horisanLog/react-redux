import CounterResult from "./CounterResult";
import { useSelector } from "react-redux";
import CounterButton from "./CounterButton";
import { add, minus, addAsyncWithStatus } from "../store/modules/counter";

export const Counter = () => {
  const status = useSelector((state) => state.counter.status);
  return (
    <>
      <CounterResult />
      <CounterButton step={2} calcType="+" actionCreator={add} />
      <CounterButton step={2} calcType="-" actionCreator={minus} />
      <CounterButton
        step={2}
        calcType="非同期(+)"
        actionCreator={addAsyncWithStatus}
      />
      <h3>{status}</h3>
    </>
  );
};
