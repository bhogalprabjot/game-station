import React from 'react'

const GameCard = (props) => {
    let { name } = props;
    return (
        <div className='bg-background w-64 h-60 border-2 border-b-8 rounded-3xl cursor-pointer'>
            <div className='h-full flex items-center justify-center'>     
                <span className='font-ubuntu text-textColor text-2xl'>{name}</span>
            </div>
        </div>
    )
}

export default GameCard