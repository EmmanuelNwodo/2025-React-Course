import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'


export function ChatMessage({ message, sender }) {
  //const message = props.message;
  // const sender = props.sender;
  //const { message, sender } = props;

  /* if (sender === "robot") {
    return (
      <div>
        <img src="robot.png" alt="" width="50" />
        {message}
      </div>
    );
  }*/

  return (
    <div
      className={
        sender === "user" ? "chat-message-user" : "chat-message-robot"
      }
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} alt="" width="45" height="45" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImage} alt="" width="45" height="45" />
      )}
    </div>
  );
}