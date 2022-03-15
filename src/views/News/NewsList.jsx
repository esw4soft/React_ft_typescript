import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteNews } from '../../actions/news'

const mapStateToProps = (state) => ({
  news: state.news.news,
})

const mapDispatchToProps = (dispatch) => ({
  deleteNews: (id) => {
    dispatch(deleteNews(id))
  },
})

const NewList = (props) => {
  const pppp = props
  return (
    <ul>
      {
        pppp.news.map((theNews) => (
          <li key={theNews.id}>
            <Link
              to={`/news/newsReader/${theNews.id}`}
            >
              {theNews.name}
            </Link>
            <button
              type="button"
              onClick={() => { props.deleteNews(theNews.id) }}
            >
              刪除
            </button>
          </li>
        ))
          }
    </ul>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NewList)
