import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeNotification } from "../reducers/notificationReducer"

const Notification = () => {
  const notification = useSelector(state => state.notifications.currentNotification)
  const dispatch = useDispatch()
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const hiddenStyle = {
    display: 'none'
  }

  useEffect(() => {
    setTimeout(() => {
      if (notification) {
        dispatch(removeNotification())
      }
    }, 5000);

    return () => false
  })

  return (
    <div style={notification ? style : hiddenStyle}>
      {notification}
    </div>
  )
}

export default Notification