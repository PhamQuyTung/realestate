import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Đúng module import
import ReactStars from 'react-rating-stars-component';

import 'swiper/css';
import 'swiper/css/pagination';

import Title from '~/components/Title';
import { Grid, Row, Col } from '~/components/Grid/Grid.js';
import styles from './Testimonials.module.scss';

const testimonialsData = [
    {
        id: 1,
        name: 'Annette Black',
        title: 'CEO Themesflat',
        image: 'https://themesflat.co/html/proty/images/avatar/testimonials-4.jpg',
        feedback:
            'Aenean orci lorem, pharetra ac imperdiet eget, tristique ac magna. In aliquet efficitur turpis, et posuere tellus commodo at. Morbi accumsan nulla id neque rutrum, et tempus dui venenatis. Quisque dapibus metus ligula, id tempor nisl interdum vitae.',
        rating: 5, // Thêm rating
    },
    {
        id: 2,
        name: 'Floyd Miles',
        title: 'CEO Themesflat',
        image: 'https://themesflat.co/html/proty/images/avatar/avt-png12.png',
        feedback:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam tempus urna id interdum. Proin iaculis erat id sapien venenatis convallis. Nam et ullamcorper nibh. Nulla malesuada consectetur sem ut varius. Fusce ornare tortor non maximus volutpat. Integer at consequat turpis, vel aliquam neque. Suspendisse quis odio felis. Quisque volutpat bibendum maximus. In porttitor semper ultrices.',
        rating: 4, // Thêm rating
    },
    {
        id: 3,
        name: 'Jacob Jones',
        title: 'CEO Themesflat',
        image: 'https://themesflat.co/html/proty/images/avatar/avt-png8.png',
        feedback:
            'My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.',
        rating: 3, // Thêm rating
    },
];

// Truncate text to a maximum length, adding '...' at the end if text is longer than maxLength.
const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const Testimonials = () => {
    return (
        <div className={styles.testimonials}>
            <Title
                title="Clients Testimonials"
                description="Thousands of luxury home enthusiasts just like you visit our website."
                // className='custom-title'
            />
            <div className={styles.testimonialWrap}>
                <Swiper
                    modules={[Pagination, Autoplay]} // Đăng ký module
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    // className="myCustomSwiper"
                >
                    {testimonialsData.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className={styles.card}>
                                <img src={testimonial.image} alt={testimonial.name} className={styles.image} />
                                <p className={styles.feedback}>“{truncateText(testimonial.feedback, 200)}”</p>
                                <h3 className={styles.name}>{testimonial.name}</h3>
                                <p className={styles.title}>{testimonial.title}</p>
                                <ReactStars
                                    count={5}
                                    value={testimonial.rating}
                                    size={18}
                                    activeColor="#f1913d"
                                    edit={false} // Không cho chỉnh sửa
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
