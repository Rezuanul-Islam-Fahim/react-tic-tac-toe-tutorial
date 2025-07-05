const SquareButton = ({ isActive, win, value, onClick }) => {
    let buttonStyle = "square";

    if (win) buttonStyle += " square-win";
    else if (isActive) buttonStyle += " square-active";

    return (
        <button className={buttonStyle} onClick={onClick}>
            {value}
        </button>
    );
}

export default SquareButton;