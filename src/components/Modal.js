import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import badge from "../assets/Badge.png";
import { useDispatch, useSelector } from "react-redux";
import { review } from "../OperationSlice";

export default function Modal() {
  const [open, setOpen] = React.useState(true);
  const { score } = useSelector((store) => store);
  console.log(score);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            textAlign: "center",
            alignItems: "center",
            width: "400px",
            height: "310px",
            borderRadius: "4%",
            padding: "20px 0",
          },
        }}
      >
        <DialogContent>
          <img src={badge} alt="badge" />
        </DialogContent>
        <DialogTitle id="alert-dialog-title" sx={{ fontWeight: "bold" }}>
          {"Congratulations!! You have Passed"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="">
            You scored {score}%
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => dispatch(review())}
            style={{ textAlign: "center", color: "black" }}
          >
            Review Quiz
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

// import * as React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import badge from "../../assets/Badge.png";
// import styles from "./Dialog.module.css";
// import { useDispatch } from "react-redux";
// import { reviewMode } from "../../Redux/Slices/QuizSlice";

// export default function AlertDialog({ showModal }) {
//   const dispatch = useDispatch();

//   const handleOnReview = () => {
//     dispatch(reviewMode());
//   };

//   return (
//     <React.Fragment>
//       <Dialog
//         PaperProps={{
//           className: styles.dialogBox,
//           sx: {
//             borderRadius: "30px",
//             height: "250px",
//           },
//         }}
//         open={showModal}
//         // onClose={handleClose}
//       >
//         <img src={badge} alt="badge" className={styles.badgeImage} />
//         <DialogTitle id="alert-dialog-title" sx={{ fontWeight: "bold" }}>
//           {"Congratulations!! You have Passed"}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText
//             id="alert-dialog-description"
//             className={styles.percentage}
//           >
//             You scored 80%
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleOnReview}>Review Answers</Button>
//           {/*<Button onClick={handleClose} autoFocus>
//             Agree
//           </Button> */}
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }
