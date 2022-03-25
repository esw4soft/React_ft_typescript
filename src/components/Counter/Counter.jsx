import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>
        目前數字:
        {count}
      </div>
      <button
        type="button"
        onClick={() => { setCount(count + 1) }}
      >
        點我加一
      </button>
    </div>
  )
}

export default Counter
