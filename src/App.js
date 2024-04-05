import IntialScreen from "./pages/IntialScreen";
import Quiz from "./pages/Quiz";
import { useSelector } from "react-redux";

function App() {
  const status = useSelector((store) => store.status);
  return (
    <div>
      {status === "initial" && <IntialScreen />}
      {status === "ready" && <Quiz />}
      {status === "review" && <Quiz />}
    </div>
  );
}

export default App;
