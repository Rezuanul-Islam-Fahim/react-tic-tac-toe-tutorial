const SquareButton = ({ value, onClick }) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}

export default SquareButton;