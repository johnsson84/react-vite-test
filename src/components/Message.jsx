import "../css/Message.css";

const Message = ({greet, who}) => {
    return <span className="greet">{greet}, {who}!</span>
};

export default Message;