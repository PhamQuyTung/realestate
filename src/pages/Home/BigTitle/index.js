// import thư viện react, useState để quản lý state, Tippy để hiển thị tooltip
import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless'; // different import path!

// import các ảnh icon từ fontawesome
import { faAngleUp, faAngleDown, faSliders, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import các css cho trang BigTitle
import styles from './BigTitle.module.scss';
import classNames from 'classnames/bind';

// import component search
import SearchForm from '~/components/SearchForm';

const cx = classNames.bind(styles);

function BigTitle() {
    const arrSelectOption = ['For rent', 'For sale'];

    //Logic xử lý dropdown
    const [isOpen, setIsOpen] = useState(false); //set isOpen flag to true when opening the dialog box
    const [selectedOption, setSelectedOption] = useState('Select Option'); //set selectedOption flag to true when selecting option from the dialog box

    // Logic xử lý click vào dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Logic xử lý click vào option dropdown
    const handleOptionClick = (option) => {
        setSelectedOption(option); // Cập nhật chữ hiển thị
        setIsOpen(false); // Đóng dropdown sau khi chọn
    };

    // render jsx
    return (
        <div className={cx('page-title')}>
            <div className={cx('page-title-container')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-12', 'm-12', 'c-12')}>
                        <div className={cx('content-inner')}>
                            <div className={cx('heading-title')}>
                                <h1>Search Luxury Homes</h1>
                                <p>Thousands of luxury home enthusiasts just like you visit our website.</p>
                            </div>

                            <div className={cx('search-filter')}>
                                {/* form-title */}
                                <div className={cx('form-title')}>
                                    <div className={cx('drop-sort')}>
                                        <div className={cx('dropdown-header')} onClick={toggleDropdown}>
                                            <span>{selectedOption}</span>
                                            <FontAwesomeIcon
                                                icon={isOpen ? faAngleUp : faAngleDown} // icon size change to fit
                                                className={cx('dropdown-icon')}
                                            />
                                        </div>

                                        {/* Logic dropdown  */}
                                        {isOpen && (
                                            <ul className={cx('dropdown-list')}>
                                                {arrSelectOption.map((option) => (
                                                    <li
                                                        key={option}
                                                        className={cx('dropdown-item', {
                                                            'dropdown-item-selected': selectedOption === option, // Highlight khi được chọn
                                                        })}
                                                        onClick={() => handleOptionClick(option)}
                                                    >
                                                        {option}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    <form className={cx('form-field')}>
                                        <input type="text" placeholder="Place, neighborhood, school or agent..." />
                                    </form>

                                    <div className={cx('box-itemBtn')}>
                                        <Tippy
                                            // visible
                                            interactive
                                            delay={[0, 300]}
                                            placement="bottom-end"
                                            // sticky={true}
                                            offset={[0, 17]}
                                            trigger="click"
                                            render={(attrs) => (
                                                <div className="box" tabIndex="-1" {...attrs}>
                                                    {/* search-form */}
                                                    <SearchForm />
                                                </div>
                                            )}
                                        >
                                            <button className={cx('filter-btn')}>
                                                <FontAwesomeIcon icon={faSliders} className={cx('icon-sliders')} />
                                            </button>
                                        </Tippy>

                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a href="#" className={cx('search-link')}>
                                            Search
                                            <FontAwesomeIcon icon={faSearch} className={cx('icon-search')} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BigTitle;