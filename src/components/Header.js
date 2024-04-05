import { useSelector } from "react-redux";
import Timer from "./Timer";

function Header() {
  const { status } = useSelector((store) => store);
  return (
    <div>
      <div className="header-main">
        <div>
          <h1>History Quiz</h1>
          <p>Answer the question below</p>
        </div>

        {status === "ready" && <Timer />}
      </div>
    </div>
  );
}

export default Header;
