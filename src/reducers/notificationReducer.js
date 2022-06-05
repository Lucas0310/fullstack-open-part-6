import { createSlice, } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        show: (state, action) => {
            return action.payload
        },

        remove: (state, action) => ''
    }


})

const { show, remove } = notificationSlice.actions

export const showNotification = (content, seconds) => async dispatch => {
    dispatch(show(content))
    setTimeout(() => { dispatch(remove()) }, seconds * 1000 || 5000)
}
export default notificationSlice.reducer