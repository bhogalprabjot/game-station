import React from 'react'
import { ImCross } from "react-icons/im";
import { CgShapeCircle } from "react-icons/cg";
import { VscDebugRestart } from "react-icons/vsc";



const TicTacToe = () => {
  return (
    // main container
    <div className='w-9/12 h-5/6 mt-6'>
      {/* Game title */}
      <div className='flex items-center justify-center'>
        <div className='text-2xl font-ubuntu text-black  w-full flex items-center justify-between pl-4 pr-4'>
          {/* name */}
          <span className='border-2 border-b-4 p-3  rounded-2xl bg-textColor'>Tic Tac Toe</span>
          {/* turn */}
          <div className='flex items-center justify-center border-2 border-b-4 p-3  rounded-2xl bg-textColor'><ImCross className='text-xl mr-2' /> TURN</div>
          {/* score */}
          <div className='flex items-center justify-center font-ubuntu border-2 border-b-4 p-3  rounded-2xl bg-textColor'>
            {/* <div className='flex items-center justify-center text-3xl'><ImCross className='text-2xl mr-2' /> : {0}</div>
            <div className='flex items-center justify-center ml-4 text-3xl'><CgShapeCircle className='text-4xl mr-2'/>: {0}</div> */}
            <div><VscDebugRestart className='text-3xl' />  </div>
          </div>



        </div>
      </div>

      {/* Game Container */}
      {/* Result Container */}
    </div>
  )
}

export default TicTacToe