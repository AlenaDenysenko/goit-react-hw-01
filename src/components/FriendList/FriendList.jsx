import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div>

    <h2 className={styles.title}>Friend</h2>

    <ul className={styles.ul}>
      {friends.map(friend => (
        <li className={styles.li} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
      </ul>
      </div>
  );
};

export default FriendList;




