function TabButton({ children, onSelect }) {
    console.log("TABBUTTON");

    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}

export default TabButton;
