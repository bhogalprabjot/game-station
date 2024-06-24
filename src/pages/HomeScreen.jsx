import React from 'react'
import GameCard from '../components/GameCard'
import TicTacToe from '../components/TicTacToe'
import Snake from '../components/Snake'
import RockPaperScissors from '../components/RockPaperScissors'

const HomeScreen = () => {
    const [currentGame, setCurrentGame] = useState(null)
    return (
        <div className='bg-backgroundLight h-screen w-screen flex flex-col items-center '>
            {/* navBar */}
            <div className='flex justify-between items-center w-full' >
                <div className='font-ubuntu text-textColor text-4xl ml-10 mt-5'>Game Station</div>
                <div className='font-ubuntu border-2 text-textColor text-2xl mr-10 mt-5 bg-background rounded-xl p-2 cursor-pointer'>Login</div>
            </div>
            {/* Select Game grid */}
            {
                currentGame === "TicTacToe" ?
                    <TicTacToe />
                    :
                    currentGame === "Snake" ?
                        <Snake />
                        :
                        currentGame === "RockPaperScissors" ?
                            <RockPaperScissors />
                            :
                            currentGame === null ?

                                <div className='w-5/6 h-full justify-center items-center content-center'>

                                    <div class="grid grid-cols-3 gap-4 ml-28">
                                        <GameCard name={'Tic Tac Toe'} />
                                        <GameCard name={'Snake'} />
                                        <GameCard name={'Rock Paper Scissors'} />
                                        {/* <GameCard name={'Rock Paper Scissors'}/>
                    <GameCard name={'Rock Paper Scissors'}/>
                    <GameCard name={'Rock Paper Scissors'}/> */}
                                    </div>
                                </div>
                                :
                                <></>

            }
        </div >
    )
}

export default HomeScreen