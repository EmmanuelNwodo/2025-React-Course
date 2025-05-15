import { useState, } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages';
import './App.css'


function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: "Hello Chatbot", sender: "user", id: "id1" },
    { message: "Hello! How can I help you?", sender: "robot", id: "id2" },
    {
      message: "What is todays date and current time",
      sender: "user",
      id: "id3",
    },
    { message: "Today is May 5", sender: "robot", id: "id4" },
  ]);

  //const [chatMessages, setChatMessages] = array;
  //const chatMessages = [0];
  // const setChatMessages = [1];
  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
