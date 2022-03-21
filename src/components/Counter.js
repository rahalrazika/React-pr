import React, { useState } from 'react'

const  Counter = () =>  {

  const [counter, setCounter] = useState(0)
 /*  constructor(props) {
    super(props);
    this.state = {counter: 0};
  } */
 const increments = () => {
  setCounter(counter + 1)
  }

const decrements = () => {
  setCounter(counter - 1)
}

return (
  <div>
   <div>
          <h1 className='title'>Simple Counter</h1>
          <div className='counter'>{counter}</div>
          <button className='btn btn-inc' onClick={increments}>Increments</button>
          <button className='btn btn-desc' onClick={decrements}>Decrements</button>


      </div>

  </div>
)

}

export default Counter