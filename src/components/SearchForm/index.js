import React from 'react';
import styles from './SearchForm.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);
function SearchForm() {
    const [price, setPrice] = useState([100, 500000]);
    const [size, setSize] = useState([0, 1000]);

    const handlePriceChange = (e, index) => {
        const newPrice = [...price];
        newPrice[index] = Number(e.target.value);
        if (index === 0 && newPrice[0] > newPrice[1]) {
            newPrice[1] = newPrice[0];
        } else if (index === 1 && newPrice[1] < newPrice[0]) {
            newPrice[0] = newPrice[1];
        }
        setPrice(newPrice);
    };

    const handleSizeChange = (e, index) => {
        const newSize = [...size];
        newSize[index] = Number(e.target.value);
        if (index === 0 && newSize[0] > newSize[1]) {
            newSize[1] = newSize[0];
        } else if (index === 1 && newSize[1] < newSize[0]) {
            newSize[0] = newSize[1];
        }
        setSize(newSize);
    };

    return (
        <div className={cx('widget-price')}>
            <div className={cx('range-section')}>
                <div className={cx('slider')}>
                    <label>
                        Price range from <span>${price[0]}</span> to <span>${price[1]}</span>
                    </label>
                    <input
                        type="range"
                        min="100"
                        max="500000"
                        step="100"
                        value={price[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                    />
                    <input
                        type="range"
                        min="100"
                        max="500000"
                        step="100"
                        value={price[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                    />
                </div>
                <div className={cx('slider')}>
                    <label>
                        Size range from <span>{size[0]}</span> to <span>{size[1]}</span>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        step="10"
                        value={size[0]}
                        onChange={(e) => handleSizeChange(e, 0)}
                    />
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        step="10"
                        value={size[1]}
                        onChange={(e) => handleSizeChange(e, 1)}
                    />
                </div>
            </div>

            <div className={cx('filter-section')}>
                <select className={cx('dropdown')}>
                    <option>Province / States</option>
                    {/* Add options dynamically */}
                </select>
                <select className={cx('dropdown')}>
                    <option>Rooms</option>
                </select>
                <select className={cx('dropdown')}>
                    <option>Bath: Any</option>
                </select>
                <select className={cx('dropdown')}>
                    <option>Beds: Any</option>
                </select>
            </div>

            <div className={cx('amenities-section')}>
                <p>Amenities:</p>
                <div className={cx('amenities')}>
                    {[
                        'Bed linens',
                        'Carbon alarm',
                        'Check-in lockbox',
                        'Coffee maker',
                        'Dishwasher',
                        'Extra pillows',
                        'Fireplace',
                        'First aid kit',
                        'Hangers',
                        'Iron',
                        'Microwave',
                        'Refrigerator',
                        'Security cameras',
                        'Smoke alarm',
                    ].map((amenity) => (
                        <label key={amenity}>
                            <input type="checkbox" />
                            {amenity}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchForm;
