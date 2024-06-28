import styles from './Profile.module.css'
const Profile = ({name, tag, location, image, stats}) => {
  return (
    <div className={styles.profileContainer}>
     <div className={styles.profileInfoContainer}>
 <img className={styles.profileImg}
    src={image}
   alt="User avatar"
  />
  <p className={styles.profileName}>{name}</p>
  <p>@{tag}</p>
  <p>{location}</p>
 </div>

  <ul className={styles.profileStatsList}>
      <li className={styles.profileStatsListItem}> 
      <span>Followers</span>
      <span className={styles.profileName}>{stats.followers}</span>
      </li>
      <li className={styles.profileStatsListItem}>
      <span>Views</span>
      <span className={styles.profileName}>{stats.views}</span>
      </li>
      <li className={styles.profileStatsListItem}>
      <span>Likes</span>
      <span className={styles.profileName}>{stats.likes}</span>
      </li>
  </ul>
</div>

  )
}

export default Profile