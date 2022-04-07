import { NewsActionTypes, AddNews, DeleteNews } from "../actions/news"

export interface News {
  id: number,
  name: string,
  describe: string,
}

export interface NewsState {
  news: News[]
}

const initState: NewsState = {
  news:
      [
        { id: 1, name: '第一筆最新消息', describe: '這裡是第一筆哦' },
        { id: 2, name: '弟2吧以茲料', describe: '這裡是第2筆哦' },
        { id: 3, name: '弟3吧以茲料', describe: '這裡是第3筆哦' },
      ],
}
const news = (state = initState, action: NewsActionTypes): NewsState => {
  switch (action.type) {
    case 'ADD_NEWS':
      return {
        ...state,
        news: [
          ...state.news,
          (<AddNews>action).payload.news,
        ],
      }
    case 'DELETE_NEWS':
      return {
        ...state,
        news: state.news.filter(
          (theNews: News) => theNews.id !== (<DeleteNews>action).payload.id,
        ),
      }
    default:
      return state
  }
}

export default news
