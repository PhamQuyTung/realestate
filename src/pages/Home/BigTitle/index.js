// import thư viện react, useState để quản lý state, Tippy để hiển thị tooltip
import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless'; // different import path!

// import các ảnh icon từ fontawesome
import { faSliders, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import các css cho trang BigTitle
import styles from './BigTitle.module.scss';
import classNames from 'classnames/bind';

// import component search
import SearchForm from '~/components/SearchForm';
import DropSort from '~/components/DropSort';

const cx = classNames.bind(styles);

function BigTitle() {
    const arrSelectOption = ['For rent', 'For sale'];

    function handSelectOptionTop(selected) {
        console.log('Selected from Box Top:', selected);
    }

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
                                    <DropSort
                                        options={arrSelectOption}
                                        initialValue="For rent" // Giá trị khởi tạo cho Box Top
                                        onOptionSelect={handSelectOptionTop}
                                        isWide={false}
                                    />

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
