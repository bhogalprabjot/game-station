import React, { useState } from 'react'
import GameCard from '../components/GameCard'
import TicTacToe from '../components/TicTacToe'
import Snake from '../components/Snake'
import RockPaperScissors from '../components/RockPaperScissors'


const HomeScreen = () => {
    const [currentGame, setCurrentGame] = useState(null);
    let gameSelector = (<></>);

    const selectGame = (gameId) => {
        setCurrentGame(gameId);
    }
    console.log(currentGame);

    if (currentGame === null)
        gameSelector = (
            <div className='w-5/6 h-full justify-center items-center content-center'>

                <div className="grid grid-cols-3 gap-4 ml-28">
                    <GameCard id={'1'} name={'Tic Tac Toe'} selectGame={selectGame} />
                    <GameCard id={'2'} name={'Snake'} selectGame={selectGame} />
                    <GameCard id={'3'} name={'Rock Paper Scissors'} selectGame={selectGame} />
                </div>
            </div>
        )
    else if (currentGame === "1")
        gameSelector = (<TicTacToe />);
    else if (currentGame === "2")
        gameSelector = (<Snake />);
    else if (currentGame === "3")
        gameSelector = (<RockPaperScissors />);

    return (
        <div className='bg-backgroundLight h-screen w-screen flex flex-col items-center '>
            {/* navBar */}
            <div className='flex justify-between items-center w-full' >
                <div className='font-ubuntu text-textColor text-4xl ml-10 mt-5 cursor-pointer' onClick={() => selectGame(null)}>Game Station</div>
                <div className='font-ubuntu border-2 text-textColor text-2xl mr-10 mt-5 bg-background rounded-xl p-2 cursor-pointer'>Login</div>
            </div>
            {/* Select Game grid */}
            {
                gameSelector
            }
        </div >
    )
}

export default HomeScreen