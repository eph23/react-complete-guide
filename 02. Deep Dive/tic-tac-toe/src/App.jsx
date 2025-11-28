import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
    const [activePlayer, setActivePlayer] = useState("X");
    const [gameTurns, setGameTurns] = useState([]);

    function handleSelectSquare() {
        setActivePlayer((curActivePlayer) =>
            curActivePlayer === "X" ? "O" : "X"
        );
        setGameTurns();
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName="player 1"
                        symbol="X"
                        isActive={activePlayer === "X"}
                    />
                    <Player
                        initialName="player 2"
                        symbol="O "
                        isActive={activePlayer === "O"}
                    />
                </ol>
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    activePlayerSymbol={activePlayer}
                />
                <Log />
            </div>
        </main>
    );
}

export default App;
