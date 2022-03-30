import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addNews } from '../../actions/news'

const NewsForm = (props) => {
  const [name, setName] = useState('')
  const [describe, setDescribe] = useState('')

  return (
    <div>
      名稱:
      <input
        placeholder="請輸入名稱"
        value={name}
        onChange={(e) => { setName(e.target.value) }}
      />
      敘述:
      <input
        placeholder="請輸入敘述"
        value={describe}
        onChange={(e) => { setDescribe(e.target.value) }}
      />
      <button
        type="button"
        onClick={() => {
          props.addNews(
            { id: Math.random(), name, describe },
          )
        }}
      >
        新增最新消息
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addNews: (news) => {
    dispatch(addNews(news))
  },
})

// (mapStateToProps, mapDispatchToProps) (接收資料過來, 接收定義事件的Dispatch)
export default connect(null, mapDispatchToProps)(NewsForm)
