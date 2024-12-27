import React from 'react';

// Import rating component
import ReactStars from 'react-rating-stars-component'; // Dùng rating component

// import Swiper to work with SwiperSlide
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Đúng module import

//
import Title from '~/components/Title';
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
    {
        id: 4,
        name: 'Eleanor Pena',
        title: 'CEO Themesflat',
        image: 'https://themesflat.co/html/proty/images/avatar/avt-png7.png',
        feedback:
            'In hac habitasse platea dictumst. Sed eleifend aliquam dui quis convallis. Sed aliquet eros sit amet metus rhoncus bibendum nec vel nunc. Nullam ac dapibus enim. Nulla rhoncus ante ante, nec lacinia turpis consectetur non. Vivamus sit amet nunc leo.',
        rating: 5, // Thêm rating
    },
    {
        id: 5,
        name: 'Cody Fisher',
        title: 'CEO Themesflat',
        image: 'https://themesflat.co/html/proty/images/avatar/avt-png6.png',
        feedback:
            'Vivamus at nisl ornare, vulputate turpis finibus, posuere metus. Donec in placerat felis. Praesent ante tellus, dignissim nec imperdiet ac.',
        rating: 5, // Thêm rating
    },
    {
        id: 6,
        name: 'Ralph Edwards',
        title: 'CEO Themesflat',
        image: 'https://themesflat.co/html/proty/images/avatar/avt-png5.png',
        feedback:
            'Quisque tincidunt, nunc vitae maximus lobortis, tellus risus fringilla mi, pulvinar feugiat lacus ipsum nec tortor. Aliquam a venenatis orci, id bibendum eros. Pellentesque in ante rutrum, congue eros vestibulum, commodo ex.',
        rating: 4, // Thêm rating
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

            {/* 
                <Swiper>: Thành phần chính của Swiper.js, nơi chứa các cài đặt và cấu hình cho slider.
            */}
            <div className={styles.testimonialWrap}>
                <Swiper
                    modules={[Pagination, Autoplay]} // Đăng ký module
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}

                    /*
                        2. Cấu hình trong Swiper
                        + modules={[Pagination, Autoplay]}: Đăng ký các module bổ sung (tính năng) của Swiper:
                            Pagination: Hiển thị các chấm hoặc nút chỉ số ở dưới slider để người dùng biết họ đang ở slide nào.
                            Autoplay: Tự động chuyển slide sau một khoảng thời gian.

                        + spaceBetween={30}: Khoảng cách giữa các slide là 30px.

                        + slidesPerView={1}: Hiển thị 1 slide trên màn hình.

                        + loop={true}: Kích hoạt chế độ lặp vô hạn (quay lại slide đầu sau khi đến slide cuối).

                        + autoplay={{ delay: 3000 }}: Cấu hình tính năng tự động chuyển slide, với mỗi lần chuyển cách nhau 3 giây (3000ms).

                        + pagination={{ clickable: true }}: Cấu hình pagination, cho phép người dùng nhấp vào các chấm để chuyển slide.
                    */
                >

                    {/* 
                        3. Dữ liệu động với testimonialsData
                            Dữ liệu được lặp qua bằng .map() để tạo các slide động.
                            Mỗi slide chứa các thông tin:
                                Hình ảnh (testimonial.image): Hiển thị ảnh đại diện.
                                Phản hồi (testimonial.feedback): Nội dung feedback.
                                Tên (testimonial.name): Tên người phản hồi.
                                Chức danh (testimonial.title): Vị trí hoặc thông tin liên quan của người phản hồi.
                                Sao đánh giá (testimonial.rating): Hiển thị xếp hạng với thư viện ReactStars.
                    */}
                    {testimonialsData.map((testimonial) => (
                        // <SwiperSlide>: Thành phần con dùng để chứa nội dung từng slide.
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

                                {/* 
                                    4. Tính năng bổ sung
                                        truncateText(testimonial.feedback, 200): Rút gọn nội dung feedback nếu vượt quá 200 ký tự.
                                        
                                        ReactStars: Thư viện để hiển thị xếp hạng bằng sao, với:
                                            count: Số sao tối đa.
                                            value: Giá trị đánh giá từ dữ liệu.
                                            edit={false}: Không cho phép chỉnh sửa giá trị sao.
                                */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
