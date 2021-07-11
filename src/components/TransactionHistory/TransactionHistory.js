import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';


const TransactionHistory = ({ items }) => (
    <table className={styles.tableBody}>
        <thead>
            <tr className={styles.tableHead}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item => 
                (
                    <tr className={styles.tableRow} key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                )
            )}
        </tbody>
    </table>
);


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired)
}


export default TransactionHistory;