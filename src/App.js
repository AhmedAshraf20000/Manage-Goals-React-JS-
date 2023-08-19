import GoalsForm from "./components/GoalsForm";
import Goal from "./components/Goal";
import { useState } from "react";

const App = () => {
  const [goal, setGoal] = useState([]);
  
  const getGoal = (goal) => {
    setGoal(
      prevStat => {
        return [
          ...prevStat,
          goal
        ]
      }
    );
  };

  return (
    <div className="container py-8 px-5 mx-auto">
      <GoalsForm onSubmitGoal={getGoal} />
      <div className="max-w-[600px] mx-auto space-y-5 mt-7">
        {goal.map((e,i )=> <Goal text={e} key={i}/>)}
      </div>
    </div>
  );
}

export default App;
