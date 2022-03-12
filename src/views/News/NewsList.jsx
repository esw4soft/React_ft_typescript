import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

export default NewList
