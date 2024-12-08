import React from 'react';
import classNames from 'classnames/bind';
import styles from './Grid.module.scss';

const cx = classNames.bind(styles);

const Grid = ({ header, searchTop, sidebar, content }) => {
    return (
        <div className={cx('grid')}>
            {/* Header (nếu có) */}
            {header && <header className={cx('header')}>{header}</header>}

            {/* SearchTop (nếu có) */}
            {searchTop && <div className={cx('searchTop')}>{searchTop}</div>}

            {/* Main Content */}
            <main className={cx('main')}>
                {/* Sidebar (nếu có) */}
                {sidebar && <aside className={cx('sidebar')}>{sidebar}</aside>}

                {/* Content */}
                <section className={cx('content')}>{content}</section>
            </main>
        </div>
    );
};

export default Grid;
