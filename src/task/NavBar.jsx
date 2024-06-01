function NavBar({ tab, setTab }) {
    return (
        <nav>
            <button disabled={tab === "home"} onClick={() => setTab("home")}>home</button>
            <button disabled={tab === "library"} onClick={() => setTab("library")}>library</button>
            <button disabled={tab === "about"} onClick={() => setTab("about")}>about</button>
        </nav>
    );
}

export default NavBar;