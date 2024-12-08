import styles from './FlatTitle.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FlatTitle() {
    return (
        <div className={cx('flat-main')}>
            <div className={cx('wrapper')}>
                <h1>FlatTitle</h1>
            </div>
        </div>
    );
}

export default FlatTitle;
