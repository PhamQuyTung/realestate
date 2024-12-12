import { faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './BigTitle.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function BigTitle() {
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
                                        <select>
                                            <option value="">Featured</option>
                                            <option value="">Price: Low to High</option>
                                            <option value="">Price: High to Low</option>
                                        </select>
                                    </div>

                                    <form>
                                        <fieldset>
                                            <input type="text" placeholder="Place, neighborhood, school or agent..." />
                                        </fieldset>
                                    </form>

                                    <div className={cx('form-title')}>
                                        <button className={cx('filter-btn')}>
                                            <FontAwesomeIcon icon={faSliders} className={cx('icon-sliders')} />
                                        </button>
                                        <a href="#">
                                            Search
                                            <FontAwesomeIcon icon={faSearch} className={cx('icon-search')} />
                                        </a>
                                    </div>
                                </div>

                                {/* search-form */}
                                <div className={cx('search-form')}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BigTitle;
