import "./profilePage.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://i.redd.it/yall-think-jake-gyllenhaal-has-a-minox-beard-v0-vh84ebb0ghhc1.jpg?width=1080&format=pjpg&auto=webp&s=4b26e62b83f3ca8432d3d1fe6724b39da057a07e"
                alt=""
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              Email: <b>johndoe@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
            <Chat/>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
