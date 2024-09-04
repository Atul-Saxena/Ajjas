import { useState } from 'react'
import './App.css'

function App(space = 0) {
  const [Comments, SetComments] = useState([]);
  const [commentVal, setCommentVal] = useState("");

  const AddComments = () => {
    SetComments((PrevComments) => [...PrevComments, commentVal]);
  }

  return (
    <>
      <button onClick={AddComments}>
        Add Comments
      </button>
      <input type="text" placeholder='Comments?' value={commentVal} onChange={(e) => (
        setCommentVal(e.target.value)
      )} />

      {Comments && Comments.map((value)=>(
        <div className='element'>
          <h4>{value}</h4>
          <App space={space+1}/>
        </div>
      ))}
    </>
  )
}

export default App
