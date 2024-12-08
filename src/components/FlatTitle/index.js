import styles from './FlatTitle.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FlatTitle() {
    return (
        <div className={cx('flat-main')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        <div className={cx('flat-body')}>
                            <h1>FlatTitle</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlatTitle;
