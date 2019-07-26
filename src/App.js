import React, { useState } from 'react'

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(
    Array(anecdotes.length).fill(0)
  )

  const voteFor = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
  }


  return (
    < div >
      <p>
        {anecdotes[selected]}
      </p>
      <p>
        has {votes[selected]} votes
      </p>

      <button onClick={voteFor}>Vote</button>
      <button onClick={() => setSelected(
        Math.floor(Math.random() * anecdotes.length))}>
        Next
      </button>
    </div >
  )
}

export default App;
