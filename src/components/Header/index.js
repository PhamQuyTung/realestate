import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEllipsis, faEllipsisVertical, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ElipsIcon } from '~/components/Icon';
import Tippy from '@tippyjs/react/headless'; // different import path!
// import 'tippy.js/dist/tippy.css'; // optional for styling

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
                                        <Link to="/" className={cx('menu-item')}>
                                            <span>Home</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/property" className={cx('menu-item')}>
                                            <span>Property</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/agencies" className={cx('menu-item')}>
                                            Agencies
                                            {/* <FontAwesomeIcon className={cx('icon-down')} icon={faAngleDown} /> */}
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/agent" className={cx('menu-item')}>
                                            Agents
                                            {/* <FontAwesomeIcon className={cx('icon-down')} icon={faAngleDown} /> */}
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/blog" className={cx('menu-item')}>
                                            <span>Blog</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/contact" className={cx('menu-item')}>
                                            <span>Contact</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Actions */}
                            <div>
                                <ul className={cx('actions')}>
                                    <li className={cx('actions-item')}>
                                        <FontAwesomeIcon icon={faPhone} className={cx('icon-phone')} />
                                        <span className={cx('actions-item_phone')}>(603) 555-0123</span>
                                    </li>
                                    <li className={cx('actions-item')}>
                                        <button className={cx('actions-item__loginBtn')}>Login</button>
                                    </li>
                                    <li className={cx('actions-item')}>
                                        <Tippy
                                            // visible
                                            interactive
                                            delay={[0, 300]}
                                            placement="bottom-end"
                                            render={(attrs) => (
                                                <ul className={cx('box-menu__list')} tabIndex="-1" {...attrs}>
                                                    <li>
                                                        <Link to="/loanprocess">LoanProcess</Link>
                                                    </li>

                                                    <li>
                                                        <Link to="/carrer">Carrer</Link>
                                                    </li>

                                                    <li>
                                                        <Link to="/faq">Fqa</Link>
                                                    </li>

                                                    <li>
                                                        <span>Englist</span>
                                                    </li>

                                                    <li>
                                                        <span>Dark mode</span>
                                                    </li>
                                                </ul>
                                            )}
                                        >
                                            <button className={cx('actions-item__addBtn')}>
                                                <FontAwesomeIcon
                                                    icon={faEllipsisVertical}
                                                    className={cx('icon-ellips')}
                                                />
                                            </button>
                                        </Tippy>
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
