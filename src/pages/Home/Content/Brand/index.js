import React from 'react';
import classNames from 'classnames/bind';
import styles from './Brand.module.scss';
import Title from '~/components/Title';
import { Brand1Icon, Brand2Icon, Brand3Icon, Brand4Icon, Brand5Icon, Brand6Icon } from '~/components/Icon';
import { Grid, Row, Col } from '~/components/Grid/Grid.js';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const cx = classNames.bind(styles);

const originalBrands = [Brand1Icon, Brand2Icon, Brand3Icon, Brand4Icon, Brand5Icon, Brand6Icon];
const ListBrand = [...originalBrands, ...originalBrands];

const BrandIcon = React.memo(({ Icon }) => (
    <div className={cx('brand-logo')}>
        <Icon className={cx('brand-icon')} />
    </div>
));

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
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={6}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                    >
                        {ListBrand.map((Icon, index) => (
                            <SwiperSlide key={`${Icon.name}-${index}`}>
                                <BrandIcon Icon={Icon} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Row>
            </Grid>
        </div>
    );
}

export default Brand;
