import { useState } from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import LibraryPage from "./LibraryPage";
import SearchPage from './SearchPage';

 
function TabSwitch() {

    const [pageTab,setPageTab]=useState("Home")


    switch (pageTab) {
        case "Home":
            return <HomePage setPageTab={setPageTab}/>;
        case "Library":
            return <LibraryPage setPageTab={setPageTab}/>;
        case "About":
            return <AboutPage setPageTab={setPageTab}/>;
        case "Search":
            return <SearchPage setPageTab={setPageTab}/>;
        default:
            return <HomePage setPageTab={setPageTab}/>;
    }
}

export default TabSwitch;