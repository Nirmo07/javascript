import logo from './logo.svg';
import './App.css';
import  Greeting from './component/Greeting'
import UserCard from './component/UserCard';
import Profile from './component/Profile';
import Button from './component/Button';

function App() {
  // User object containing user information
  const user = {
    name: "EFC",
    email: "efc@example.com",
    address: {
        street: "123 ert",
        city: "eggcf",
        country: "india"
    }
  }
  return (
    <div className="App">
      {/* Rendering Greeting components with different names */}
      <Greeting name="Nirmohi" />  {/* First Greeting */}
      <Greeting name="Lavannya" />    {/* Second Greeting */}
      <Greeting name="Niddhi" /> {/* Third Greeting */}
      {/* Rendering UserCard components with user details */}
      <UserCard username="Nirmohi" email="abc@example.com" age={17} />
      <UserCard username="Lavannya" email="xyz@example.com" age={17} />
      <UserCard username="Niddhi" email="pqr@example.com" age={17} />
      {/* Rendering Profile component with user object */}
      <Profile user={user} />
      {/* Rendering Button components with default and custom labels */}
      <Button /> {/* Button with default label */}
      <Button label="Submit" /> {/* Button with custom label */}

    </div>
  );
}

export default App;
