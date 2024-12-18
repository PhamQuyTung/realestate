import React from 'react';
import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import Title from '~/components/Title';
import { Grid, Row, Col } from '~/components/Grid/Grid.js';
import { Link } from 'react-router-dom';
import { SearchHomeIcon, CoinHomeIcon, UpHomeIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

const ListItemsCard = [
    {
        icon: <SearchHomeIcon />,
        title: 'Find out how much you can afford',
        description: 'We’ll help you estimate your budget range. Save to your buyer profile to help in your search',
        link: '/',
    },
    {
        icon: <CoinHomeIcon />,
        title: 'Understand your monthly costs',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin ipsum eumassa sollicitudin facilisis. ',
        link: '/',
    },
    {
        icon: <UpHomeIcon />,
        title: 'Get help with your down payment',
        description:
            'In fermentum dignissim mauris et blandit. Fusce efficitur libero sit amet ullamcorper, nec volutpat justo fringilla',
        link: '/',
    },
];

function Discover() {
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
                            <li>
                                <button className={cx('btn-discover')}>Buying</button>
                            </li>
                            <li>
                                <button className={cx('btn-discover')}>Rating</button>
                            </li>
                            <li>
                                <button className={cx('btn-discover')}>Selling</button>
                            </li>
                        </ul>

                        <div className={cx('list-items-card')}>
                            {ListItemsCard.map((item, index) => (
                                <div key={index} className={cx('item-card')}>
                                    {item.icon}
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <a href={item.link} className={cx('btn-link')}>
                                        Learn more
                                    </a>
                                </div>
                            ))}
                        </div>

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
