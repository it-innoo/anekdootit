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

  const max = () => votes.indexOf(Math.max(...votes))


  return (
    <div>
      <h2>Anecdote of the day</h2>
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

      <h3>Anecdote with most votes</h3>
      <p>{anecdotes[max()]}</p>
    </div>
  )
}

export default App;
