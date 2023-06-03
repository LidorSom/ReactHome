import { React, useState } from "react";
import LoginComp from "./LoginComponent/LoginComp";
import RegisterComp from "./RegisterComponent/RegisterComp";

function App() {
  const [currScreen, setCurrScreen] = useState("login");

  const toggleForm = (formName) => {
    setCurrScreen(formName);
  };

  return (
    <div>
      {currScreen === "login" ? (
        <LoginComp onFormSwitch={toggleForm} />
      ) : (
        <RegisterComp />
      )}
    </div>
  );
}

export default App;
