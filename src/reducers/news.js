const initState = {
  news:
      [
        { id: 1, name: '弟一吧以茲料', describe: '這裡是第一筆哦' },
        { id: 2, name: '弟2吧以茲料', describe: '這裡是第2筆哦' },
        { id: 3, name: '弟3吧以茲料', describe: '這裡是第3筆哦' },
      ],
}
const news = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_NEWS':
      return {
        ...state,
        news: [
          ...state.news,
          action.payload.news,
        ],
      }
    default:
      return state
  }
}

export default news
