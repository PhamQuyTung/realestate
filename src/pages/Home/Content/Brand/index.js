import React from 'react';
import classNames from 'classnames/bind';
import styles from './Brand.module.scss';
import Title from '~/components/Title';
import { Brand1Icon, Brand2Icon, Brand3Icon, Brand4Icon, Brand5Icon, Brand6Icon } from '~/components/Icon';
import { Grid, Row, Col } from '~/components/Grid/Grid.js';

const cx = classNames.bind(styles);

function Brand() {
    return (
        <div className={cx('brand-container')}>
            <Title
                title="Let’s Work Together"
                description="Thousands of luxury home enthusiasts just like you visit our website."
                className={cx('custom-title')}
            />
            <Grid wide>
                <Row>
                    <Col sizeL={2} sizeM={4} sizeC={6}>
                        <div className={cx('brand-logo')}>
                            <Brand1Icon className={cx('brand-icon')} />
                        </div>
                    </Col>
                    <Col sizeL={2} sizeM={4} sizeC={6}>
                        <div className={cx('brand-logo')}>
                            <Brand2Icon className={cx('brand-icon')} />
                        </div>
                    </Col>
                    <Col sizeL={2} sizeM={4} sizeC={6}>
                        <div className={cx('brand-logo')}>
                            <Brand3Icon className={cx('brand-icon')} />
                        </div>
                    </Col>
                    <Col sizeL={2} sizeM={4} sizeC={6}>
                        <div className={cx('brand-logo')}>
                            <Brand4Icon className={cx('brand-icon')} />
                        </div>
                    </Col>
                    <Col sizeL={2} sizeM={4} sizeC={6}>
                        <div className={cx('brand-logo')}>
                            <Brand5Icon className={cx('brand-icon')} />
                        </div>
                    </Col>
                    <Col sizeL={2} sizeM={4} sizeC={6}>
                        <div className={cx('brand-logo')}>
                            <Brand6Icon className={cx('brand-icon')} />
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default Brand;
