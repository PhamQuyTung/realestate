import React, { useState, useRef } from 'react';
import styles from './SliderRange.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SliderRange = ({ title }) => {
    const sliderRef = useRef(null);
    const [range] = useState({ min: 100, max: 500000 }); // Giá trị min và max
    const [values, setValues] = useState({ lower: 100, upper: 500000 });

    // Hàm tính toán giá trị dựa trên vị trí click hoặc kéo
    const calculateValue = (clientX) => {
        const slider = sliderRef.current;
        if (!slider) return 0;

        const rect = slider.getBoundingClientRect();
        let newValue = Math.round(range.min + ((clientX - rect.left) / rect.width) * (range.max - range.min));

        // Giới hạn giá trị trong khoảng min - max
        return Math.min(Math.max(newValue, range.min), range.max);
    };

    // Xác định thumb nào gần vị trí click hơn
    const findClosestThumb = (clickValue) => {
        const lowerDiff = Math.abs(clickValue - values.lower);
        const upperDiff = Math.abs(clickValue - values.upper);

        return lowerDiff < upperDiff ? 'lower' : 'upper';
    };

    // Hàm xử lý khi click trên thanh ngang
    const handleSliderClick = (e) => {
        const clickValue = calculateValue(e.clientX);
        const closestThumb = findClosestThumb(clickValue);

        setValues((prev) => ({
            ...prev,
            [closestThumb]: clickValue,
        }));
    };

    const handleMouseMove = (e, thumb) => {
        const newValue = calculateValue(e.clientX);
        if (thumb === 'lower' && newValue < values.upper) {
            setValues((prev) => ({ ...prev, lower: newValue }));
        } else if (thumb === 'upper' && newValue > values.lower) {
            setValues((prev) => ({ ...prev, upper: newValue }));
        }
    };

    return (
        <div>
            {/* Dynamic Price Range */}
            <div className={cx('price-range')}>
                {title} range from <span>${values.lower.toLocaleString()}</span> to{' '}
                <span>${values.upper.toLocaleString()}</span>
            </div>

            {/* Slider */}
            <div
                className={cx('slider-container')}
                ref={sliderRef}
                onClick={handleSliderClick} // Sự kiện click trên thanh ngang
            >
                {/* Track */}
                <div className={cx('slider-track')}></div>
                {/* Highlight */}
                <div
                    className={cx('slider-highlight')}
                    style={{
                        left: `${((values.lower - range.min) / (range.max - range.min)) * 100}%`,
                        width: `${((values.upper - values.lower) / (range.max - range.min)) * 100}%`,
                    }}
                ></div>
                {/* Lower Thumb */}
                <div
                    className={cx('slider-thumb')}
                    style={{
                        left: `${((values.lower - range.min) / (range.max - range.min)) * 100}%`,
                    }}
                    onMouseDown={() => {
                        const onMove = (event) => handleMouseMove(event, 'lower');
                        document.addEventListener('mousemove', onMove);
                        document.addEventListener('mouseup', () => document.removeEventListener('mousemove', onMove));
                    }}
                ></div>
                {/* Upper Thumb */}
                <div
                    className={cx('slider-thumb')}
                    style={{
                        left: `${((values.upper - range.min) / (range.max - range.min)) * 100}%`,
                    }}
                    onMouseDown={() => {
                        const onMove = (event) => handleMouseMove(event, 'upper');
                        document.addEventListener('mousemove', onMove);
                        document.addEventListener('mouseup', () => document.removeEventListener('mousemove', onMove));
                    }}
                ></div>
            </div>
        </div>
    );
};

export default SliderRange;
