import styles from './SBOption.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SBOption() {
    return (
        <div className={cx('box-option')}>
        </div>
    );
}

export default SBOption;
