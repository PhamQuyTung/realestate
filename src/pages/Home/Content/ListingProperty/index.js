import React from 'react';
import classNames from 'classnames/bind';
import styles from './ListingProperty.module.scss';
import Title from '~/components/Title';
import { Grid, Row, Col } from '~/components/Grid/Grid.js';
import BoxHouse from '~/components/BoxHouse';

const cx = classNames.bind(styles);

function ListingProperty() {
    return (
        <div className={cx('listing-container')}>
            <Title
                title="Today’s Luxury Listings"
                description="Thousands of luxury home enthusiasts just like you visit our website"
                className="custom-class"
            />

            {/* content */}
            <Grid wide>
                <Row>
                    <Col key="box1" sizeL={4} sizeM={6} sizeC={12}>
                        <BoxHouse
                            tags={['Featured', 'For Sale']}
                            image="https://themesflat.co/html/proty/images/section/box-house.jpg"
                            title="Elegant studio flat"
                            location="102 Ingraham St, Brooklyn, NY 11237"
                            beds={3}
                            baths={3}
                            area="4,043"
                            price="8,600"
                        />
                    </Col>
                    <Col key="box2" sizeL={4} sizeM={6} sizeC={12}>
                        <BoxHouse
                            tags={['Featured', 'For Sale']}
                            image="https://themesflat.co/html/proty/images/section/box-house.jpg"
                            title="Elegant studio flat"
                            location="102 Ingraham St, Brooklyn, NY 11237"
                            beds={3}
                            baths={3}
                            area="4,043"
                            price="8,600"
                        />
                    </Col>
                    <Col key="box3" sizeL={4} sizeM={6} sizeC={12}>
                        <BoxHouse
                            tags={['Featured', 'For Sale']}
                            image="https://themesflat.co/html/proty/images/section/box-house.jpg"
                            title="Elegant studio flat"
                            location="102 Ingraham St, Brooklyn, NY 11237"
                            beds={3}
                            baths={3}
                            area="4,043"
                            price="8,600"
                        />
                    </Col>
                    <Col key="box4" sizeL={4} sizeM={6} sizeC={12}>
                        <BoxHouse
                            tags={['Featured', 'For Sale']}
                            image="https://themesflat.co/html/proty/images/section/box-house.jpg"
                            title="Elegant studio flat"
                            location="102 Ingraham St, Brooklyn, NY 11237"
                            beds={3}
                            baths={3}
                            area="4,043"
                            price="8,600"
                        />
                    </Col>
                    <Col key="box5" sizeL={4} sizeM={6} sizeC={12}>
                        <BoxHouse
                            tags={['Featured', 'For Sale']}
                            image="https://themesflat.co/html/proty/images/section/box-house.jpg"
                            title="Elegant studio flat"
                            location="102 Ingraham St, Brooklyn, NY 11237"
                            beds={3}
                            baths={3}
                            area="4,043"
                            price="8,600"
                        />
                    </Col>
                    <Col key="box6" sizeL={4} sizeM={6} sizeC={12}>
                        <BoxHouse
                            tags={['Featured', 'For Sale']}
                            image="https://themesflat.co/html/proty/images/section/box-house.jpg"
                            title="Elegant studio flat"
                            location="102 Ingraham St, Brooklyn, NY 11237"
                            beds={3}
                            baths={3}
                            area="4,043"
                            price="8,600"
                        />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default ListingProperty;
