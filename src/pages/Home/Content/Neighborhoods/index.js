import React from 'react';
import styles from './Neighborhoods.module.scss';
import classNames from 'classnames/bind';
import Title from '~/components/Title';
import { Grid, Row, Col } from '~/components/Grid/Grid.js';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Neighborhoods() {
    return (
        <div className={cx('nbh-container')}>
            <Grid wide className={cx('custom-grid')}>
                <Row>
                    <Col sizeL={12} sizeM={12} sizeC={12}>
                        <Title
                            title="Explore The Neighborhoods"
                            description="Find your dream apartment with our listing"
                            className={cx('custom-title-nbh')}
                        />

                        <div className={cx('nbh-wrapper')}>
                            <div className={cx('nbh-list')}>
                                <div className={cx('nbh-item', 'item-1')}>
                                    <Link to="/neighborhoods/1">
                                        <div className={cx('nbh-img-wrap')}>
                                            <img
                                                src="https://themesflat.co/html/proty/images/section/location-9.jpg"
                                                alt="New York"
                                            />
                                        </div>

                                        <div className={cx('nbh-content')}>
                                            <h3>New York</h3>
                                            <Button size="large" variant="primary" className={cx('custom-btn-nbh')}>
                                                <span>2491</span>
                                                Properties
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </Button>
                                        </div>
                                    </Link>
                                </div>

                                <div className={cx('nbh-item', 'item-2')}>
                                    <Link to="/neighborhoods/1">
                                        <div className={cx('nbh-img-wrap')}>
                                            <img
                                                src="https://themesflat.co/html/proty/images/section/location-10.jpg"
                                                alt="New York"
                                            />
                                        </div>

                                        <div className={cx('nbh-content')}>
                                            <h3>New York</h3>
                                            <Button size="large" variant="primary" className={cx('custom-btn-nbh')}>
                                                <span>2491</span>
                                                Properties
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </Button>
                                        </div>
                                    </Link>
                                </div>
                                <div className={cx('nbh-item', 'item-3')}>
                                    <Link to="/neighborhoods/1">
                                        <div className={cx('nbh-img-wrap')}>
                                            <img
                                                src="https://themesflat.co/html/proty/images/section/location-11.jpg"
                                                alt="New York"
                                            />
                                        </div>

                                        <div className={cx('nbh-content')}>
                                            <h3>New York</h3>
                                            <Button size="large" variant="primary" className={cx('custom-btn-nbh')}>
                                                <span>2491</span>
                                                Properties
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </Button>
                                        </div>
                                    </Link>
                                </div>
                                <div className={cx('nbh-item', 'item-4')}>
                                    <Link to="/neighborhoods/1">
                                        <div className={cx('nbh-img-wrap')}>
                                            <img
                                                src="https://themesflat.co/html/proty/images/section/location-12.jpg"
                                                alt="New York"
                                            />
                                        </div>

                                        <div className={cx('nbh-content')}>
                                            <h3>New York</h3>
                                            <Button size="large" variant="primary" className={cx('custom-btn-nbh')}>
                                                <span>2491</span>
                                                Properties
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </Button>
                                        </div>
                                    </Link>
                                </div>
                                <div className={cx('nbh-item', 'item-5')}>
                                    <Link to="/neighborhoods/1">
                                        <div className={cx('nbh-img-wrap')}>
                                            <img
                                                src="https://themesflat.co/html/proty/images/section/location-13.jpg"
                                                alt="New York"
                                            />
                                        </div>

                                        <div className={cx('nbh-content')}>
                                            <h3>New York</h3>
                                            <Button size="large" variant="primary" className={cx('custom-btn-nbh')}>
                                                <span>2491</span>
                                                Properties
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </Button>
                                        </div>
                                    </Link>
                                </div>
                                <div className={cx('nbh-item', 'item-6')}>
                                    <Link to="/neighborhoods/1">
                                        <div className={cx('nbh-img-wrap')}>
                                            <img
                                                src="https://themesflat.co/html/proty/images/section/location-14.jpg"
                                                alt="New York"
                                            />
                                        </div>

                                        <div className={cx('nbh-content')}>
                                            <h3>New York</h3>
                                            <Button size="large" variant="primary" className={cx('custom-btn-nbh')}>
                                                <span>2491</span>
                                                Properties
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </Button>
                                        </div>
                                    </Link>
                                </div>
                                <div className={cx('nbh-item', 'item-7')}>
                                    <Link to="/neighborhoods/1">
                                        <div className={cx('nbh-img-wrap')}>
                                            <img
                                                src="https://themesflat.co/html/proty/images/section/location-15.jpg"
                                                alt="New York"
                                            />
                                        </div>

                                        <div className={cx('nbh-content')}>
                                            <h3>New York</h3>
                                            <Button size="large" variant="primary" className={cx('custom-btn-nbh')}>
                                                <span>2491</span>
                                                Properties
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </Button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default Neighborhoods;
