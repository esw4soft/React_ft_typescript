import React, { useState } from 'react'
import { connect } from 'react-redux'

const NewsForm = (props) => {
  const [name, setName] = useState('')
  const [describe, setDescribe] = useState('')

  return (
    <div>
      名稱:
      <input
        value={name}
        onChange={(e) => { setName(e.target.value) }}
      />
      敘述:
      <input
        value={describe}
        onChange={(e) => { setDescribe(e.target.value) }}
      />
      <button
        type="button"
        onClick={() => {
          props.dispatch(
            {
              type: 'ADD_NEWS',
              payload: { news: { id: Math.random(), name, describe } },
            },
          )
        }}
      >
        新增最新消息
      </button>
    </div>
  )
}

export default connect()(NewsForm)
