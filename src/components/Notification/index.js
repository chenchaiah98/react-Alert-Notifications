// Write your code here'
import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {childrenData} = props
  const {icon, heading, description, className} = childrenData

  return (
    <div className={`Notification ${className}`}>
      <div className="icon">{icon}</div>
      <div className="text">
        <div>
          <h1>{heading}</h1>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
      <div className="close-icon">
        <GrFormClose />
      </div>
    </div>
  )
}
export default Notification
