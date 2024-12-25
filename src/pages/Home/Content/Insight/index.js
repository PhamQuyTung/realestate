import React from 'react';
import classNames from 'classnames/bind';
import styles from './Insight.module.scss';
import Title from '~/components/Title';
import { Grid, Row, Col } from '~/components/Grid/Grid.js';
import BoxHouse from '~/components/BoxHouse';

const cx = classNames.bind(styles);

function Insight() {
    return (
        <div className={cx('Insight-container')}>
            <Title
                title="Insight & Opinion"
                description="Thousands of luxury home enthusiasts just like you visit our website."
            />
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
                            garage="2"
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
                            garage="2"
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
                            garage="2"
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
                            garage="2"
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
                            garage="2"
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
                            garage="2"
                            price="8,600"
                        />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default Insight;
