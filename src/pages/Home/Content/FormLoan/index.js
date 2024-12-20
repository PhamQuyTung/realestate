import { React, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FormLoan.module.scss';
import Title from '~/components/Title';
import { Grid, Row, Col } from '~/components/Grid/Grid.js';
import DropSort from '~/components/DropSort';
import ImageScrollEffect from '~/components/ImageScrollEffect';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import CardDiscoverHouse from '~/components/CardDiscoverHouse';

const cx = classNames.bind(styles);

const listDownPayments = ['10%', '20%', '30%', '40%', '50%', '60%'];

const listAmortizationPeriod = [
    'Select amortization period',
    '1 month',
    '2 months',
    '3 months',
    '4 months',
    '5 months',
    '6 months',
];

const handleDownPayments = (value) => {
    console.log('DownPayments selected:', value);
};

const handleAmortizationPeriod = (value) => {
    console.log('AmortizationPeriod selected:', value);
};

function FormLoan() {
    return (
        <div className={cx('loan-container')}>
            <Grid wide>
                <Row>
                    <Col sizeL={6} sizeM={6} sizeC={12}>
                        <Title
                            title="Do you need a home loan? Get pre-approved"
                            description="Find a lender who can offer competitive mortgage rates and help you with pre-approval."
                            className={cx('custom-class')} // FormLoan.module.scss
                            align="left"
                        />

                        <div className={cx('loan-form')}>
                            <div className={cx('form-wrap')}>
                                <div className={cx('form-total')}>
                                    <label htmlFor="amount">Total Amount</label>
                                    <input type="number" id="amount" placeholder="$1000" />
                                </div>

                                <div className={cx('form-input')}>
                                    <div className={cx('form-payment-dollar')}>
                                        <label htmlFor="Payment">Down Payment ($)</label>
                                        <input type="number" id="Payment" placeholder="$2000" />
                                    </div>

                                    <div className={cx('form-payment-percent')}>
                                        <h1>(%)</h1>
                                        <DropSort
                                            options={listDownPayments}
                                            initialValue="10%" // Giá trị khởi tạo cho Box 1
                                            onOptionSelect={handleDownPayments}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={cx('form-wrap')}>
                                <div className={cx('form-total')}>
                                    <label htmlFor="Interest">Interest Rate</label>
                                    <input type="number" id="Interest" placeholder="0" />
                                </div>

                                <div className={cx('form-payment-percent')}>
                                    <h1>Amortization Period (months)</h1>
                                    <DropSort
                                        options={listAmortizationPeriod} // Truyền mảng chứa
                                        initialValue="Select amortization period" // Giá trị khởi tạo
                                        onOptionSelect={handleAmortizationPeriod} // Handle logic lấy value
                                        isWide={true} // Chiều dài wide (rộng)
                                    />
                                </div>
                            </div>

                            <div className={cx('form-wrap')}>
                                <div className={cx('form-total')}>
                                    <label htmlFor="propertyTax">Property Tax</label>
                                    <input type="number" id="propertyTax" placeholder="$3000" />
                                </div>

                                <div className={cx('form-total')}>
                                    <label htmlFor="homeInsurance">Home Insurance</label>
                                    <input type="number" id="homeInsurance" placeholder="$3000" />
                                </div>
                            </div>

                            <div className={cx('text')}>
                                <p>
                                    Your estimated monthly payment:
                                    <span>8000</span>
                                </p>
                            </div>

                            <div className={cx('wrap-btn')}>
                                <Link to="/">
                                    <Button size="large" variant="primary" className={cx('custom-btn')}>
                                        Calculate now
                                    </Button>
                                </Link>

                                <Link to="/">
                                    <Button size="large" variant="outline">
                                        Start over
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col sizeL={6} sizeM={6} sizeC={12}>
                        <div className={cx('loan-wrap')}>
                            <ImageScrollEffect
                                src="https://themesflat.co/html/proty/images/section/section-pre-approved.jpg"
                                alt="loan"
                                offset={150}
                            />
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default FormLoan;
