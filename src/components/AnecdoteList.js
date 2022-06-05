import React from 'react'
import { useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import Notification from '../components/Notification'
import { showNotification } from '../reducers/notificationReducer'
import Filter from './Filter'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        if (!state.filter) return state.anecdotes

        return state.anecdotes.filter(x => x.content.includes(state.filter))
    })

    const dispatch = useDispatch()

    const voteAnecdote = ({ id, content }) => {
        dispatch(vote(id))
        dispatch(showNotification(`you voted: '${content}'`))
    }

    return (
        <>
            <h2>Anecdotes</h2>
            <Notification />
            <Filter />
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => voteAnecdote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList