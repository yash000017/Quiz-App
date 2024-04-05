import Modal from "../components/Modal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Question from "../components/Question";
import { useSelector } from "react-redux";

function Quiz() {
  const status = useSelector((store) => store.status);
  // console.log(status, "status");
  return (
    <div>
      <Header />
      <Question />
      <Footer />
      {status === "timeUp" && <Modal />}
    </div>
  );
}

export default Quiz;
