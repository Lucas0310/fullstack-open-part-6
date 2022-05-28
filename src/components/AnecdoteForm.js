import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const create = (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value

        dispatch(createAnecdote(content))
        dispatch(showNotification({type: 'NEW', content}))
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={create}>
                <div><input name='anecdote' /></div>
                <button>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm