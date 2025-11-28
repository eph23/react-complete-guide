import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
    const [activePlayer, setActivePlayer] = useState("X");
    const [gameTurns, setGameTurns] = useState([]);

    function handleSelectSquare(roeIndex, colIndex) {
        setActivePlayer((curActivePlayer) =>
            curActivePlayer === "X" ? "O" : "X"
        );

        let currentPlayer = "X";

        if (prevTurns.length > 0 && prevTurns[0].player === "X") {
            currentPlayer = "O";
        }

        setGameTurns((prevTurns) => {
            const updatedTurns = [
                {
                    square: { row: roeIndex, col: colIndex },
                    Player: activePlayer,
                },
                ...prevTurns,
            ];

            return updatedTurns;
        });
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
