import styles from './FriendListItem.module.css'
import clsx from 'clsx'

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <div className={styles.cardContainer}>
    <img src={avatar} alt="Avatar" width="48" />
        <p className={styles.friendName}>{name}</p>
        <p className={clsx(isOnline ? styles.online : styles.offline, styles.friendStatus)} >{isOnline ? "Online": "Offline"}</p>
    </div>
  )
}

export default FriendListItem