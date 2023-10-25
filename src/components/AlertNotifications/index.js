// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification/index'

import './index.css'

const notification = [
  {
    icon: <AiFillCheckCircle />,
    heading: 'success',
    description: 'You can access all the files in the folder',
    className: 'success',
  },
  {
    icon: <RiErrorWarningFill />,
    heading: 'error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
    className: 'error',
  },
  {
    icon: <MdWarning />,
    heading: 'warning',
    description: 'Viewers of this file can see comments and suggestions',
    className: 'warning',
  },
  {
    icon: <MdInfo />,
    heading: 'info',
    description: 'Anyone on the internet can view these files',
    className: 'info',
  },
]

const AlertNotifications = () => (
  <div className="app-container">
    <h1>Alert Notifications</h1>
    {notification.map(each => (
      <Notification childrenData={each} key={each.heading} />
    ))}
  </div>
)

export default AlertNotifications
