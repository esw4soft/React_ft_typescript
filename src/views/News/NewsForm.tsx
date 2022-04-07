import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 
import { addNews } from '../../actions/news';
 
const NewsForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [describe, setDescribe] = useState('');
 
  return (
    <div>
      名稱：
      <input 
        placeholder="請輸入名稱"
        value={name}
        onChange={(e) => { setName(e.target.value); }}
      />
      敘述：
      <input 
        placeholder="請輸入敘述"
        value={describe}
        onChange={(e) => { setDescribe(e.target.value); }}
      />
      <button  
        onClick={() => {
          dispatch(addNews({ id: Math.random(), name, describe }))
        }}
      >
        新增最新消息
      </button>
    </div>
  )
};
 
export default NewsForm;