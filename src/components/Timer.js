import { useEffect } from "react";
import { timeChange } from "../OperationSlice";
import { useDispatch, useSelector } from "react-redux";

function Timer() {
  const dispatch = useDispatch();
  const time = useSelector((store) => store.time);
  const mins = Math.floor(time / 60);
  const seconds = time % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch(timeChange(id));
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
