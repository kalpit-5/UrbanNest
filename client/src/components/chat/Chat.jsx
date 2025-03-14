import { useState } from "react";
import "./chat.scss";

const Chat = () => {

    const [chat,setChat] = useState(true);


  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
            <img src="https://i.redd.it/yall-think-jake-gyllenhaal-has-a-minox-beard-v0-vh84ebb0ghhc1.jpg?width=1080&format=pjpg&auto=webp&s=4b26e62b83f3ca8432d3d1fe6724b39da057a07e" alt=""/>
            <span>John Doe</span>
            <p>
                Hello , How are you ?
            </p>
        </div>
        <div className="message">
            <img src="https://i.redd.it/yall-think-jake-gyllenhaal-has-a-minox-beard-v0-vh84ebb0ghhc1.jpg?width=1080&format=pjpg&auto=webp&s=4b26e62b83f3ca8432d3d1fe6724b39da057a07e" alt=""/>
            <span>John Doe</span>
            <p>
                Hello , How are you ?
            </p>
        </div>
        <div className="message">
            <img src="https://i.redd.it/yall-think-jake-gyllenhaal-has-a-minox-beard-v0-vh84ebb0ghhc1.jpg?width=1080&format=pjpg&auto=webp&s=4b26e62b83f3ca8432d3d1fe6724b39da057a07e" alt=""/>
            <span>John Doe</span>
            <p>
                Hello , How are you ?
            </p>
        </div>
        <div className="message">
            <img src="https://i.redd.it/yall-think-jake-gyllenhaal-has-a-minox-beard-v0-vh84ebb0ghhc1.jpg?width=1080&format=pjpg&auto=webp&s=4b26e62b83f3ca8432d3d1fe6724b39da057a07e" alt=""/>
            <span>John Doe</span>
            <p>
                Hello , How are you ?
            </p>
        </div>
        <div className="message">
            <img src="https://i.redd.it/yall-think-jake-gyllenhaal-has-a-minox-beard-v0-vh84ebb0ghhc1.jpg?width=1080&format=pjpg&auto=webp&s=4b26e62b83f3ca8432d3d1fe6724b39da057a07e" alt=""/>
            <span>John Doe</span>
            <p>
                Hello , How are you ?
            </p>
        </div>
        <div className="message">
            <img src="https://i.redd.it/yall-think-jake-gyllenhaal-has-a-minox-beard-v0-vh84ebb0ghhc1.jpg?width=1080&format=pjpg&auto=webp&s=4b26e62b83f3ca8432d3d1fe6724b39da057a07e" alt=""/>
            <span>John Doe</span>
            <p>
                Hello , How are you ?
            </p>
        </div>                          
      </div>
      { chat && (<div className="chatBox">
        <div className="top">
            <div className="user">
            <img src="https://i.redd.it/yall-think-jake-gyllenhaal-has-a-minox-beard-v0-vh84ebb0ghhc1.jpg?width=1080&format=pjpg&auto=webp&s=4b26e62b83f3ca8432d3d1fe6724b39da057a07e" alt=""/>
            John Doe
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
        </div>
        <div className="center">
            <div className="chatMessage">
                <p>I am fine , How are you ?</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
                <p>I am fine , How are you ?</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>I am fine , How are you ?</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
                <p>I am fine , How are you ?</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>I am fine , How are you ?</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
                <p>I am fine , How are you ?</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
                <p>I am fine , How are you ?</p>
                <span>1 hour ago</span>
            </div>
        </div>
        <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
        </div>
      </div>)}
    </div>
  );
};

export default Chat;
