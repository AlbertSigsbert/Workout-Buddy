import useAuthContext from "./useAuthContext";
import useWorkoutContext from "./useWorkoutContext";

function useLogout(props) {
  const { dispatch } = useAuthContext();
  const { dispatch:workoutDispatch } = useWorkoutContext();

  const logout = () => {
    //Remove user from LS
    localStorage.removeItem('user');

    // Update Auth Context
    dispatch({ type: 'LOGOUT'});

    // Update Workout Context
     workoutDispatch({ type: 'SET_WORKOUTS', payload: null});

  }
  
  return { logout };

}

export default useLogout;