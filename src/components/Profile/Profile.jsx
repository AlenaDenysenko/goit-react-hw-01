import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.container}>
      <div >
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.title}>{name}</p>
        <p className={styles.adress}>@{tag}</p>
        <p className={styles.adress}>{location}</p>
      </div>

      <ul className={styles.ul}>
        <li className={styles.li}>
          <span className={styles.span}>Followers</span>
          <span className={styles.span}>{stats.followers}</span>
        </li>
        <li className={styles.li}>
          <span className={styles.span}>Views</span>
          <span className={styles.span}>{stats.views}</span>
        </li>
        <li className={styles.li}>
          <span className={styles.span}>Likes</span>
          <span className={styles.span}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
