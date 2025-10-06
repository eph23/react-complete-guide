function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <li>
                        <span className="player-name">Player 1</span>
                        <span className="player-symbol">X</span>
                    </li>
                    <li>
                        <span className="player-name">Player 1</span>
                        <span className="player-symbol">O</span>
                    </li>
                </ol>

                <p>Game Board</p>
            </div>
            <p>Game Log</p>
        </main>
    );
}

export default App;
