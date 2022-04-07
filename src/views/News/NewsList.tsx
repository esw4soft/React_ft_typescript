import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNews } from '../../actions/news'
import { RootState } from '../../store'

// const mapStateToProps = (state) => ({
//   news: state.news.news,
// })

// const mapDispatchToProps = (dispatch) => ({
//   deleteNews: (id) => {
//     dispatch(deleteNews(id))
//   },
// })

const NewList = () => {
  const dispatch = useDispatch()
  return (
    <ul>
      {
        useSelector((state: RootState) => state.news.news).map((theNews) => (
          <li key={theNews.id}>
            <Link
              to={`/news/newsReader/${theNews.id}`}
            >
              {theNews.name}
            </Link>
            <button
              type="button"
              onClick={() => { dispatch(deleteNews(theNews.id)) }}
            >
              刪除
            </button>
          </li>
        ))
          }
    </ul>
  )
}

export default NewList