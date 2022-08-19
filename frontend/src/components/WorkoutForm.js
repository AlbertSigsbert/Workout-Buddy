import React from "react";
import { useReducer } from "react";
import useWorkoutContext from "../hooks/useWorkoutContext";

const initialState = {
  title: "",
  load: "",
  reps: "",
  error: null,
  emptyFields: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "error":
      return {
        ...state,
        ...action,
      };
    case "success":
      return {
        title: "",
        load: "",
        reps: "",
        error: null,
        emptyFields: [],
      };
    case "setValue":
      return {
        ...state,
        [action.field]: action.value,
      };

    default:
      return state;
  }
};

function WorkoutForm(props) {
  const { dispatch } = useWorkoutContext();
  
  const [state, localDispatch] = useReducer(reducer, initialState);
  const { title, load, reps, error, emptyFields } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      localDispatch({
        type: "error",
        error: json.error,
        emptyFields: json.emptyFields,
      });
    }
    if (response.ok) {
      localDispatch({ type: "success" });

      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Create New Workout</h3>
      <label>Exercise Type</label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          localDispatch({
            type: "setValue",
            field: "title",
            value: e.target.value,
          });
        }}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Load (in Kg)</label>
      <input
        type="number"
        value={load}
        onChange={(e) => {
          localDispatch({
            type: "setValue",
            field: "load",
            value: e.target.value,
          });
        }}
        className={emptyFields.includes("load") ? "error" : ""}
      />

      <label>Reps</label>
      <input
        type="number"
        value={reps}
        onChange={(e) => {
          localDispatch({
            type: "setValue",
            field: "reps",
            value: e.target.value,
          });
        }}
        className={emptyFields.includes("reps") ? "error" : ""}
      />

      <button>Add Workout</button>

      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;
