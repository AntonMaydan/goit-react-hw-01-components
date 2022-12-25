import PropTypes from "prop-types";
import styles from './Profile.module.css';

export const Profile = ({ avatar, username, tag, location, stats:
    {followers, views, likes} }) => { 
    return <div className={styles.profile}>
        <div className={styles.description}>
            <div className={styles.imgLogo}>
                <img 
                    src={avatar}
                    alt={username}
                    className={styles.avatar}
                    />
            </div>
            <p className={styles.name}>{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className={styles.stats}>
            <li className={styles.itemList}>
                <span className="label">Followers</span>
                <p>
                    <span className={styles.quantity}>{followers}</span>
                </p>
            </li>
            <li className={styles.itemList}>
                <span className="label">Views</span>
                <p>
                    <span className={styles.quantity}>{views}</span>
                </p>
            </li>
            <li className={styles.itemList}>
                <span className="label">Likes</span>
                <p>
                    <span className={styles.quantity}>{likes}</span>
                </p>
            </li>
        </ul>
    </div>
    
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
  }),
};