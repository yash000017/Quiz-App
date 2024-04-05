import { useSelector } from "react-redux";
import Options from "./Options";

function Question() {
  const data = useSelector((store) => store);
  const question = data.questionsArray.map((x) => x.question);
  const index = data.index;

  return (
    <div>
      <div className="question-rank">
        <h2>Question {index + 1}/10</h2>
      </div>

      <div className="question-question">{question[index]}</div>

      <Options />
    </div>
  );
}

export default Question;
