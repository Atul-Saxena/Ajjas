import { useState } from 'react'
import './App.css'

function App(space = 0) {
  const [Comments, SetComments] = useState([]);
  const [commentVal, setCommentVal] = useState("");

  const Hierarchy = (val) => {
    // const [reply, setReply] = useState([{}]);
    // console.log(typeof(val))
    // return (
    //   <div>
    //     {val && val.map((value) => (
    //       <>
    //         <li>{value.reply}</li>
    //         <button onClick={hierarchy(reply)}>Reply</button>
    //         <input type="text" placeholder='Comments?' value={commentVal} onChange={(e) => (
    //           setReply({ reply: e.target.value })
    //         )} />
    //       </>
    //     ))}
    //   </div>
    // )
  }

  const AddComments = () => {
    SetComments((PrevComments) => [...PrevComments, commentVal]);
  }

  // console.log(typeof (Comments))
  return (
    <>
      <button onClick={AddComments}>
        Add Comments
      </button>
      <input type="text" placeholder='Comments?' value={commentVal} onChange={(e) => (
        setCommentVal(e.target.value)
      )} />

      {/* {<Hierarchy val={Comments} />} */}

      {Comments && Comments.map((value)=>(
        <>
          <h4 className={`px-${space} bg-red`}>{value}</h4>
          {/* <button >Reply</button> */}
          <App space={space+1}/>
        </>
      ))}
    </>
  )
}

export default App
