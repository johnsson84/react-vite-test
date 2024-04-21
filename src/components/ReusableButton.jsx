import '../css/ReusableButton.css';

const ReusableButton = ({children, onClick}) => {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
};
export default ReusableButton;