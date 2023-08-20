const Goal = (props) => {
    const removeHandler = () => props.deleteHandler(props.id);

    return (
        <div className="bg-teal-500 text-white px-4 py-2 rounded-lg cursor-pointer capitalize text-lg" title="Click to remove me..." onClick={removeHandler}>
            {props.text}
        </div>
    );
};

export default Goal;