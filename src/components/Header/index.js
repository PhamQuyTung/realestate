import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { PhoneIcon } from '~/components/Icon';
import Tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header-top')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        <div className={cx('header-body')}>
                            {/* LOGO */}
                            <Link to="/" className={cx('logo')}>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <img src="https://themesflat.co/html/proty/images/logo/logo@2x.png" />
                            </Link>

                            {/* MENU */}
                            <div className={cx('menu')}>
                                <ul className={cx('list')}>
                                    <li>
                                        <Link to="/" className={cx('menu-item')} href="#">
                                            <span>Home</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Property" className={cx('menu-item')} href="#">
                                            <span>Property</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <span className={cx('menu-item')}>
                                            More
                                            <FontAwesomeIcon className={cx('icon')} icon={faAngleDown} />
                                        </span>
                                    </li>
                                    <li>
                                        <Link to="/Blog" className={cx('menu-item')} href="#">
                                            <span>Blog</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Contact" className={cx('menu-item')} href="#">
                                            <span>Contact</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Actions */}
                            <div>
                                <ul className={cx('actions')}>
                                    <li className={cx('actions-item')}>
                                        <PhoneIcon className={cx('icon')} />
                                        <span className={cx('actions-item_phone')}>(603) 555-0123</span>
                                    </li>
                                    <li className={cx('actions-item')}>
                                        <span className={cx('actions-item')}>login</span>
                                    </li>
                                    {/* <li className={cx('actions-item')}>
                                        <span className={cx('actions-item')}>action3</span>
                                    </li> */}
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
