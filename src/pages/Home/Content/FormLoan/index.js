import { React, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FormLoan.module.scss';
import Title from '~/components/Title';
import { Grid, Row, Col } from '~/components/Grid/Grid.js';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import CardDiscoverHouse from '~/components/CardDiscoverHouse';

const cx = classNames.bind(styles);

function FormLoan() {
    return (
        <div className={cx('loan-container')}>
            <Grid wide>
                <Row>
                    <Col sizeL={6} sizeM={6} sizeC={12}>
                        <Title
                            title="Do you need a home loan? Get pre-approved"
                            description="Find a lender who can offer competitive mortgage rates and help you with pre-approval."
                            className={cx('custom-class')}
                            align='left'
                        />
                    </Col>
                    <Col sizeL={6} sizeM={6} sizeC={12}>
                        <div className={cx('loan-wrap')}>
                            <img src='https://themesflat.co/html/proty/images/section/section-pre-approved.jpg' alt='loan' />
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default FormLoan;
