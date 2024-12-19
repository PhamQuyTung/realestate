import { React, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import Title from '~/components/Title';
import { Grid, Row, Col } from '~/components/Grid/Grid.js';
import { Link } from 'react-router-dom';
import { SearchHomeIcon, CoinHomeIcon, UpHomeIcon } from '~/components/Icon';
import Button from '~/components/Button';
import CardDiscoverHouse from '~/components/CardDiscoverHouse';

const cx = classNames.bind(styles);

function Discover() {
    //
    const [btnActive, setBtnActive] = useState('Buying');

    //
    function handleBtnActive(buttonName) {
        setBtnActive(buttonName);
    }

    return (
        <div className={cx('discover-container')}>
            {/* content */}
            <Grid wide>
                <Row>
                    <Col sizeL={12} sizeM={12} sizeC={12}>
                        <Title
                            title="Discover how we can help"
                            description="Thousands of luxury home enthusiasts just like you visit our website."
                            className="custom-class"
                        />

                        <ul className={cx('list-btn')}>
                            <li key="buying" className={cx('item-btn')}>
                                <Button
                                    size="small"
                                    variant={btnActive === 'Buying' ? 'primary' : 'outline'}
                                    onClick={() => handleBtnActive('Buying')} // Callback đúng
                                >
                                    <span className={cx('btn-text')}>Buying</span>
                                </Button>
                            </li>
                            <li key="rating" className={cx('item-btn')}>
                                <Button
                                    size="small"
                                    variant={btnActive === 'Rating' ? 'primary' : 'outline'}
                                    onClick={() => handleBtnActive('Rating')} // Callback đúng
                                >
                                    <span className={cx('btn-text')}>Rating</span>
                                </Button>
                            </li>
                            <li key="selling" className={cx('item-btn')}>
                                <Button
                                    size="small"
                                    variant={btnActive === 'Selling' ? 'primary' : 'outline'}
                                    onClick={() => handleBtnActive('Selling')} // Callback đúng
                                >
                                    <span className={cx('btn-text')}>Selling</span>
                                </Button>
                            </li>
                        </ul>

                        <Grid wide>
                            <Row>
                                <Col key="card1" sizeL={4} sizeM={12} sizeS={12}>
                                    <CardDiscoverHouse
                                        icon={<SearchHomeIcon />}
                                        title="Find out how much you can afford"
                                        description="We’ll help you estimate your budget range. Save to your buyer profile to help in your search"
                                        to="/"
                                    />
                                </Col>
                                <Col key="card2" sizeL={4} sizeM={12} sizeS={12}>
                                    <CardDiscoverHouse
                                        icon={<CoinHomeIcon />}
                                        title="Understand your monthly costs"
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin ipsum eumassa sollicitudin facilisis."
                                        to="/"
                                    />
                                </Col>
                                <Col key="card3" sizeL={4} sizeM={12} sizeS={12}>
                                    <CardDiscoverHouse
                                        icon={<UpHomeIcon />}
                                        title="Find out how much you can afford"
                                        description="In fermentum dignissim mauris et blandit. Fusce efficitur libero sit amet ullamcorper, nec volutpat justo fringilla"
                                        to="/"
                                    />
                                </Col>
                            </Row>
                        </Grid>

                        <div className={cx('discover-footer')}>
                            <p>Looking to spotlight a unique property with expert marketing?</p>
                            <Link to="/" className={cx('btn-footer-link')}>
                                Let’s chat
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default Discover;
