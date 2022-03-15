import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  news: state.news.news,
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
          </li>
        ))
          }
    </ul>
  )
}

export default connect(mapStateToProps)(NewList)
