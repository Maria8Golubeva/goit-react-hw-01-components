import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, online }) => {
    let onlineStatus
    online ? onlineStatus = styles.online : onlineStatus = styles.offline;
    return (
        <li className={styles.item}>
            <span className={onlineStatus}></span>
            <img className="avatar" src={avatar} alt="face" width="80" />
            <p className="name">{name}</p>
        </li>
    )
};


FriendListItem.defaultProps = {
    avatar: '',
    online: false
};


FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool

}



export default FriendListItem;