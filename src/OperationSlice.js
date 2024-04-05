import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  questionsArray: [],
  status: "initial",
  index: 0,
  score: 0,
  time: 15,
};

const OperationSlice = createSlice({
  name: "operation",
  initialState,
  reducers: {
    next: (state, action) => {
      state.index += 1;
    },

    previous: (state, action) => {
      state.index -= 1;
    },

    checkedAnswer: (state, action) => {
      state.questionsArray[state.index].selectedAnswer = action.payload;
    },

    finish: (state, action) => {
      return initialState;
    },

    calcStore: (state, action) => {
      state.score = state.questionsArray.reduce((acc, question) => {
        if (question.answer === question.selectedAnswer) {
          return acc + 10;
        } else {
          return acc;
        }
      }, 0);
    },

    review: (state, action) => {
      state.status = "review";
      state.index = 0;
    },

    restart: (state, action) => {},

    timeChange: (state, action) => {
      state.time = state.time - 1;
      state.status = state.time === 0 ? "timeUp" : state.status;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(startMyFunc.fulfilled, (state, action) => {
      state.questionsArray = action.payload;
      state.status = "ready";
    });
  },
});

export const startMyFunc = createAsyncThunk(
  "operation/startMyFunc",
  async () => {
    try {
      const res = await fetch("https://the-trivia-api.com/v2/questions/");
      const data = await res.json();

      const questionArray = data.map((data) => {
        const position = Math.floor(Math.random() * 3);
        const array = [...data.incorrectAnswers];
        array.splice(position, 0, data?.correctAnswer);

        const questionObj = {
          id: data.id,
          question: data.question.text,
          answer: data.correctAnswer,
          selectedAnswer: null,
          options: array,
        };
        return questionObj;
      });
      return questionArray;
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }
);

export const {
  timeChange,
  next,
  previous,
  finish,
  checkedAnswer,
  calcStore,
  review,
} = OperationSlice.actions;
export default OperationSlice.reducer;
