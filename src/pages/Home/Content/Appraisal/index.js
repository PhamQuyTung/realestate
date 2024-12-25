import React from 'react';
import classNames from 'classnames/bind';
import styles from './Appraisal.module.scss';
import Title from '~/components/Title';
import { Grid, Row, Col } from '~/components/Grid/Grid.js';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Appraisal() {
    return (
        <div className={cx('appraisal-container')}>
            <Grid wide>
                <Row>
                    <Col sizeL={12} sizeM={12} sizeC={12}>
                        <div className={cx('appraisal-wrap')}>
                            <div className={cx('appraisal-bg')}>
                                <Row>
                                    <Col sizeL={6} sizeM={6} sizeC={12}>
                                        <Title
                                            title="Are You Selling Or Renting Your Property?"
                                            description="Thousands of luxury home enthusiasts just like you visit our website."
                                            align="left"
                                            className={cx('custom-title-appraisal')}
                                        />

                                        <Button size="large" variant="primary" className={cx('custom-btn')}>
                                            <Link to="/">Request your free appraisal</Link>
                                        </Button>
                                    </Col>
                                    <Col sizeL={6} sizeM={6} sizeC={12}>
                                        <div className={cx('appraisal-img')}>
                                            <img
                                                src="https://themesflat.co/html/proty/images/section/person-1.png"
                                                alt="person1"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default Appraisal;
