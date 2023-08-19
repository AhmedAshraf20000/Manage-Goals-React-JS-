import { useState } from "react";

const GoalsForm = (props) => {
    const [goal, setGoal] = useState('');
    const [isValid, setIsValid] = useState(true);

    const inputChangeHandler = (e) => {
        setGoal(e.target.value);
        setIsValid(true);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (goal.trim().length === 0) {
            setIsValid(false);
            return;
        }
        else {
            props.onSubmitGoal(goal);
            setGoal('');
        }
    };

    return (
        <form className="space-y-5 max-w-[600px] p-7 mx-auto shadow-lg rounded-lg" onSubmit={submitHandler}>
            <label className={`block capitalize font-semibold text-lg opacity-70 ${!isValid && 'text-red-600'} `}>course goal</label>
            <input type="text" placeholder="Write Your Goal..." className={`w-full rounded-md caret-teal-500 px-5 border-2 py-1 outline-none ${!isValid && 'border-red-600'}`} onChange={inputChangeHandler} value={goal} />
            {!isValid && <div className="text-red-600 capitalize">Please,type your goal before submission!!</div>}
            <button type="submit" className="text-white px-3 py-1 border border-teal-500 rounded-md capitalize bg-teal-500 hover:bg-white hover:text-teal-500 ">add goal</button>
        </form>
    );
};

export default GoalsForm;