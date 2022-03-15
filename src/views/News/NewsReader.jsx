import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  news: state.news.news,
  user: state.user.name,
})

const NewsReader = (props) => {
  const asd = props
  const targetid = asd.match.params.id
  const targetnews = asd.news.find((theNews) => (
    String(theNews.id) === String(targetid)
  ))

  return (
    <div>
      <h1>
        你咒在閱讀
        { targetnews.name }
      </h1>
      <p>{targetnews.describe}</p>
    </div>
  )
}

export default connect(mapStateToProps)(NewsReader)
