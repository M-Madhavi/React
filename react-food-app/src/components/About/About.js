import UserContext from "../../../utils/UserContex";
import UserClass from "../UserComponent/UserClass";
import User from "../UserComponent/UserComponent";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div>
        LoggedIn User:
        <UserContext.Consumer>{({ loggedInUser }) => <h5>{loggedInUser}</h5>}</UserContext.Consumer>
      </div>
      <h2>This is About page</h2>

      <div className="user-container">
        <User />
        <UserClass />
      </div>
    </div>
  );
};

export default About;