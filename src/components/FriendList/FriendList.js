import PropTypes, { bool, number } from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';


const FriendList = ({friends}) => (
    <ul className={styles.friendList}>
        {friends.map(friend =>  <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} online={friend.isOnline} />  )}
    </ul>
);


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: bool.isRequired,
            id: number.isRequired
        })
    ).isRequired
};


export default FriendList;