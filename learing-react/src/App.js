import "./App.css";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
    const [userstate, setUserState] = useState({});
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route>
                        path="/"
                        element={
                            userstate && userstate._id ? (
                                <Profile
                                    setUserState={setUserState}
                                    username={userstate.fname}
                                />
                            ) : (
                                <Login setUserState={setUserState} />
                            )
                        }
                    </Route>
                    <Route>
                        path="/login"
                        element={<Login setUserState={setUserState} />}
                    </Route>
                    <Route path="/signup" element={<Registration />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
