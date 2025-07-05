const SquareButton = ({ isActive, value, onClick }) => {
    let buttonStyle = "square";

    if (isActive) buttonStyle += " square-active";

    return (
        <button className={buttonStyle} onClick={onClick}>
            {value}
        </button>
    );
}

export default SquareButton;