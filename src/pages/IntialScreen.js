import { useDispatch } from "react-redux";
import { startMyFunc } from "../OperationSlice";
import image from "../assets/image.jpg";
import Button from "../components/Button";

function IntialScreen() {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1>History Quiz</h1>
        <p>Read the following instructions</p>
      </div>
      <div className="init-mid">
        <img className="init-img" src={image} alt="demoimage"></img>
        <div className="init-mid-right">
          <div className="init-p-sub">
            <span className="init-p-sub-left">Date:</span>
            <span className="init-p-sub-right">28/07/2021</span>
          </div>
          <div className="init-p-sub">
            <span className="init-p-sub-left">Time Limit:</span>
            <span className="init-p-sub-right">30 Mins</span>
          </div>
          <div className="init-p-sub">
            <span className="init-p-sub-left">Points:</span>
            <span className="init-p-sub-right">100 Points</span>
          </div>
        </div>
      </div>

      <div className="init-footer">
        <h2 className="init-p">Instructions</h2>
        <p className="init-p">
          This quiz consists of 5 multiple-choice questions. To be successful
          with the quizzes, it's important to conversant with the topics. Keep
          the following in mind:
        </p>
        <p className="init-p">
          Timing - You need to complete each of your attempts in one sitting, as
          you are allotted 30 minutes to each attempt.
        </p>
        <p>
          Answers - You may review your answer-choices and compare them to the
          correct answers after your final attempt.
        </p>
        <p className="init-p">
          To start, click the "Start" button. When finished, click the "Submit "
          button.
        </p>
      </div>

      <div className="init-btn">
        <Button onclick={() => dispatch(startMyFunc())}>Start</Button>
      </div>
    </div>
  );
}

export default IntialScreen;
