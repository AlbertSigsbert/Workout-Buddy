import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutContext";

function useWorkoutContext(props) {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error("useWorkoutContext must be used inside WorkoutContextProvider");
  }

  return context;
}

export default useWorkoutContext;
