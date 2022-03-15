import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import NewsForm from './NewsForm.jsx'
import NewList from './NewsList.jsx'
import NewsReader from './NewsReader.jsx'

const newhere = (news) => (
  <>
    <h1>這裡是最新消息</h1>
    <NewList news={news} />
  </>
)

const newsreader = (props, news) => (
  <NewsReader news={news} match={props.match} />
)
const News = () => {
  const [news] = useState([
    { id: 1, name: '弟一吧以茲料', describe: '這裡是第一筆哦' },
    { id: 2, name: '弟2吧以茲料', describe: '這裡是第2筆哦' },
    { id: 3, name: '弟3吧以茲料', describe: '這裡是第3筆哦' },
  ])

  return (
    <Switch>
      <Route
        exact
        path="/news"
        component={() => (
          <>
            <h1>這裡是最新消息</h1>
            <NewsForm />
            <NewList />
          </>
        )}
      />
      <Route path="/news/newsReader/:id" component={(props) => <NewsReader news={news} match={props.match} />} />
    </Switch>
  )
}

export default News
