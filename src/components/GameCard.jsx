import React from 'react'

const GameCard = (props) => {
    let { id, name, selectGame } = props;
    return (
        <div className='bg-background w-64 h-60 border-2 border-b-8 rounded-3xl cursor-pointer' onClick={() => selectGame(id)}>
            <div className='h-full flex items-center justify-center'>
                <span className='font-ubuntu text-textColor text-2xl'>{name}</span>
            </div>
        </div >
    )
}

export default GameCard