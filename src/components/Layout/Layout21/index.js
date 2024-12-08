import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';
import FlatTitle from '~/components/FlatTitle';
import styles from './Layout21.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Layout21({ children }) {
    return (
        <div className={cx('main')}>
            <div className={cx('main-header')}>
                <Header />
            </div>
            <div className={cx('container')}>
                <FlatTitle />

                <div className={cx('main-content')}>
                    <div className={cx('menu-content')}>{children}</div>

                    <div className={cx('sidebar')}>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout21;
