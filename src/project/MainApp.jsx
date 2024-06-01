// MainApp.jsx
import { useState } from "react";
import NavBar from "./NavBar";
// import SwitchPage from "./SwitchPage";
// import WelcomePage from "./WelcomePage";
import TabSwitch from "./TabSwitch";

function MainApp() {
    const [tab, setTab] = useState("welcome");
    return (
        <>
            <NavBar setTab={setTab}  />
            <TabSwitch tab={tab} />
        </>
    );
}

export default MainApp;