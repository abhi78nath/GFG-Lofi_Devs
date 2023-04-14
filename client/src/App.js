import "./App.css";
import Loginpage from "./Pages/Loginpage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Landing from "./components/UI/Landing";
import CropInputForm from "./Pages/cropAdvisor";
// import Signup from "./components/Authentication/Signup";
// import Login from "./components/Authentication/Login";
import UserProfile from "./Pages/UserProfile";
import Feedpg from "./Pages/Feedpg";
import WeatherPage from "./Pages/WeatherPage";
import Profile from "./Pages/profilePage";
function App() {

  return (
    <div className="App">
      <Route path="/" component={Landing} exact />
      <Route path="/cropadvisor" component={CropInputForm} exact />
      {/* <Route path="/register" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/> */}
      <Route path="/login" component={Loginpage} exact />
      <Route path="/chats" component={Chatpage} exact />
      <Route path="/user" component={UserProfile} exact />
      <Route path="/feed" component={Feedpg} exact />
      <Route path="/weather" component={WeatherPage} exact />
      {/* <Route path="/profile/:userName" component={Profile} exact /> */}
      {/* <Route path="*" component={Error404} exact/> */}
    </div>
  );
}

export default App;
