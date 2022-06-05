import { createSlice, } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotesService'

const getId = () => (100000 * Math.random()).toFixed(0)

const initialState = []

const appendAnecdoteReducer = (state, action) => {
  const anecdote = action.payload
  return state.concat(anecdote)
}

const voteAnecdoteReducer = (state, action) => {
  const id = action.payload
  const anecdoteToUpdate = state.find(x => x.id === id)
  const updatedAnecdote = { ...anecdoteToUpdate, votes: anecdoteToUpdate.votes + 1 }
  return state.map(anecdote => anecdote.id !== id ? anecdote : updatedAnecdote)
}

const setAnecdoteReducer = (state, action) => {
  return action.payload
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    appendAnecdote: appendAnecdoteReducer,
    voteAnecdote: voteAnecdoteReducer,
    setAnecdotes: setAnecdoteReducer,
  }
})

const { voteAnecdote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = { id: getId(), content, votes: 0 }
    const anecdote = await anecdotesService.createNew(newAnecdote)
    dispatch(appendAnecdote(anecdote))
  }
}

export const vote = id => async dispatch => {
  await anecdotesService.vote(id)
  dispatch(voteAnecdote(id))
}

export default anecdoteSlice.reducer