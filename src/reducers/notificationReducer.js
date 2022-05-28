import { createSlice, } from '@reduxjs/toolkit'
const notifications = [
    {
        type: 'VOTE',
        message: 'you voted'
    },
    {
        type: 'NEW',
        message: 'a new anecdote has been created'
    }]

const initialState = {
    currentNotification: ''
}

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        showNotification: (state, action) => {
            const { type, content } = action.payload
            const notification = notifications.find(x => x.type === type)
            state.currentNotification = `${notification.message} '${content}'`

            return state
        },

        removeNotification: (state, action) => {
            state.currentNotification = ''
            return state
        }
    }


})

export const { showNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer