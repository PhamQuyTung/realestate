import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return ( 
        <div className={cx('sidebar-main')}>
            <h1>Sidebar</h1>
            <ul>
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
            </ul>
        </div>    
    );
}

export default Sidebar;