import { useState } from 'react'
import './App.css'

function App(space = 0) {
  const [Comments, SetComments] = useState([]);
  const [commentVal, setCommentVal] = useState("");
  const [votes, setVotes] = useState(0);

  const AddComments = () => {
    SetComments((PrevComments) => [...PrevComments, commentVal]);
  }

  const UpVote = ()=>{
    setVotes((val)=>val+1);
  }

  const DownVote = ()=>{
    setVotes((val)=>val-1);
  }

  return (
    <>
      <button onClick={AddComments}>
        Add Comment
      </button>
      <input type="text" placeholder='Comments?' value={commentVal} onChange={(e) => (
        setCommentVal(e.target.value)
      )} />

      {Comments && Comments.map((value)=>(
        <div className='element'>
          <h4>{value}</h4>
          <button onClick={UpVote}>upvote</button>
          <button onClick={DownVote}>downvote</button>
          <p>{votes}</p>
          <App space={space+1}/>
        </div>
      ))}
    </>
  )
}

export default App
