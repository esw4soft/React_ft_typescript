import{ News } from '../reducers/news'

interface addNewsPayload {
  news: News
}

export interface AddNews {
  type: string,
  payload: addNewsPayload
}

export const addNews = (news: News): AddNews => (
  { type: 'ADD_NEWS', payload: { news } }
)


interface DeleteNewsPayload {
  id: number
};
 
export interface DeleteNews {
  type: 'DELETE_NEWS'
  payload: DeleteNewsPayload
};

export const deleteNews = (id: number): DeleteNews => (
  { type: 'DELETE_NEWS', payload: { id } }
)

export type NewsActionTypes = AddNews | DeleteNews
