import FriendListItem from "../FriendListItem/FriendListItem"
import styles from './FriendList.module.css'
const FriendList = (friends) => {
	console.log(friends.friends.map(friend => friend.avatar));
  return (
	
	<ul className={styles.friendsList}>
		{friends.friends.map(friend => 
			<li key={friend.id}><FriendListItem avatar={friend.avatar} isOnline={friend.isOnline} name={friend.name}/></li>
		)}
	</ul>

  )
}

export default FriendList   