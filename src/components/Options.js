import { useDispatch, useSelector } from "react-redux";
import { checkedAnswer } from "../OperationSlice";

function Options() {
  const data = useSelector((store) => store);
  const index = data.index;
  const option = data.questionsArray.map((i) => {
    return i.options;
  });

  const selectedAnswer = data?.questionsArray[index]?.selectedAnswer;
  const answer = data.questionsArray[index].answer;
  const soloOption = option[index];
  const status = data.status;
  const dispatch = useDispatch();
  // console.log(answer, "answeer");

  return (
    <div>
      <h2 className="option-p">Choose answer</h2>

      <div className="options">
        <div className="optionItem">
          <input
            className="radio"
            type="radio"
            name="option"
            value={soloOption[0]}
            onChange={(e) => dispatch(checkedAnswer(e.target.value))}
            id=""
            checked={selectedAnswer === soloOption[0]}
            disabled={status === "review" ? true : false}
          />
          <label htmlFor="">{soloOption[0]}</label>
          {status === "review" && (
            <span
              className={
                soloOption[0] === answer
                  ? soloOption[0] === selectedAnswer
                    ? "span-green"
                    : "span-green"
                  : soloOption[0] === selectedAnswer
                  ? "span-red"
                  : ""
              }
            >
              {soloOption[0] === answer
                ? soloOption[0] === selectedAnswer
                  ? "Your Answer is correct"
                  : "Correct Answer"
                : soloOption[0] === selectedAnswer
                ? "Your Answer"
                : ""}
            </span>
          )}
        </div>
        <div className="optionItem">
          <input
            className="radio"
            type="radio"
            name="option"
            value={soloOption[1]}
            onChange={(e) => dispatch(checkedAnswer(e.target.value))}
            id=""
            checked={selectedAnswer === soloOption[1]}
            disabled={status === "review" ? true : false}
          />
          <label htmlFor="">{soloOption[1]}</label>
          {status === "review" && (
            <span
              className={
                soloOption[1] === answer
                  ? soloOption[1] === selectedAnswer
                    ? "span-green"
                    : "span-green"
                  : soloOption[1] === selectedAnswer
                  ? "span-red"
                  : ""
              }
            >
              {soloOption[1] === answer
                ? soloOption[1] === selectedAnswer
                  ? "Your Answer is correct"
                  : "Correct Answer"
                : soloOption[1] === selectedAnswer
                ? "Your Answer"
                : ""}
            </span>
          )}
        </div>
        <div className="optionItem">
          <input
            className="radio"
            type="radio"
            name="option"
            value={soloOption[2]}
            onChange={(e) => dispatch(checkedAnswer(e.target.value))}
            id=""
            checked={selectedAnswer === soloOption[2]}
            disabled={status === "review" ? true : false}
          />
          <label htmlFor="">{soloOption[2]}</label>
          {status === "review" && (
            <span
              className={
                soloOption[2] === answer
                  ? soloOption[2] === selectedAnswer
                    ? "span-green"
                    : "span-green"
                  : soloOption[2] === selectedAnswer
                  ? "span-red"
                  : ""
              }
            >
              {soloOption[2] === answer
                ? soloOption[2] === selectedAnswer
                  ? "Your Answer is correct"
                  : "Correct Answer"
                : soloOption[2] === selectedAnswer
                ? "Your Answer"
                : ""}
            </span>
          )}
        </div>
        <div className="optionItem">
          <input
            className="radio"
            type="radio"
            name="option"
            value={soloOption[3]}
            onChange={(e) => dispatch(checkedAnswer(e.target.value))}
            id=""
            checked={selectedAnswer === soloOption[3]}
            disabled={status === "review" ? true : false}
          />
          <label htmlFor="">{soloOption[3]}</label>
          {status === "review" && (
            <span
              className={
                soloOption[3] === answer
                  ? soloOption[3] === selectedAnswer
                    ? "span-green"
                    : "span-green"
                  : soloOption[3] === selectedAnswer
                  ? "span-red"
                  : ""
              }
            >
              {soloOption[3] === answer
                ? soloOption[3] === selectedAnswer
                  ? "Your Answer is correct"
                  : "Correct Answer"
                : soloOption[3] === selectedAnswer
                ? "Your Answer"
                : ""}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Options;
