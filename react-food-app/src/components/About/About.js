import UserClass from "../UserComponent/UserClass";
import User from "../UserComponent/UserComponent";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is About page</h2>

      <div className="user-container">
        <User />
        <UserClass />
      </div>
    </div>
  );
};

export default About;