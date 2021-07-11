import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles['stat-list']}>
            {stats.map(item =>
            (<li style={{ backgroundColor: '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase() }}
                className={styles.item}
                key={item.id}>
                    <span className={styles.label}>{item.label}</span>
                    <span className={styles.percentage}>{item.percentage}%</span>
                </li>)
            )}
        </ul>
    </section>
);

Statistics.defaultProps = {
    title: ''
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.PropTypes.arrayOf(PropTypes.object)
}



export default Statistics;