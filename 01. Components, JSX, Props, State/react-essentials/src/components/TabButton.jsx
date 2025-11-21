function TabButton({ children }) {
    function handleClick() {
        console.log("CLICKED");
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}

export default TabButton;
