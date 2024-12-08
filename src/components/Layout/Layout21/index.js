import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';
import FlatTitle from '~/components/FlatTitle';
import styles from './Layout21.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Layout21({ children }) {
    return (
        <div className={cx('main')}>
            <Header />
            <div className={cx('container')}>
                <FlatTitle />

                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-8', 'm-12', 'c-12')}>
                            <div>{children}</div>
                        </div>
                        <div className={cx('col', 'l-4', 'm-0', 'c-0')}>
                            <div>
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout21;
