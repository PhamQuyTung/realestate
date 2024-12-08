import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header-top')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        <div className={cx('header-body')}>
                            <div className={cx('logo')}>
                                <h1>LOGO</h1>
                            </div>
                            <div className={cx('menu')}>
                                <ul className={cx('list')}>
                                    <li>
                                        <Link to="/" className={cx('menu-item')} href="#">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Property" className={cx('menu-item')} href="#">
                                            Property
                                        </Link>
                                    </li>
                                    <li>
                                        <span className={cx('menu-item')}>More</span>
                                    </li>
                                    <li>
                                        <Link to="/Blog" className={cx('menu-item')} href="#">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Contact" className={cx('menu-item')} href="#">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Actions */}
                            <div>
                                <ul className={cx('actions')}>
                                    <li className={cx('actions-item')}>
                                        <span>action1</span>
                                    </li>
                                    <li className={cx('actions-item')}>
                                        <span>action2</span>
                                    </li>
                                    <li className={cx('actions-item')}>
                                        <span>action3</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
