import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { finish, next, previous, calcStore } from "../OperationSlice";
import { useState } from "react";
import Modal from "./Modal";

function Footer() {
  const dispatch = useDispatch();
  const index = useSelector((store) => store.index);
  const status = useSelector((store) => store.status);
  const [openModal, setOpenModal] = useState(false);

  function handleSubmit() {
    console.log("xx");
    setOpenModal(true);
    dispatch(calcStore());
    // <Modal />
  }

  function handleHome() {
    console.log("ss");
    dispatch(finish());
  }

  return (
    <div className="footer-flex">
      {openModal && <Modal />}
      <Button
        onclick={() => {
          dispatch(previous());
        }}
        disable={index === 0 ? true : false}
      >
        Back
      </Button>
      <Button
        onclick={() => {
          return index === 9
            ? status === "review"
              ? handleHome()
              : handleSubmit()
            : dispatch(next());
        }}
        type={index === 9 ? "Submit" : "Next"}
      >
        {index === 9 ? (status === "review" ? "Home" : "Submit") : "Next"}
      </Button>
    </div>
  );
}

export default Footer;
