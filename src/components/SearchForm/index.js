import React from 'react';
import styles from './SearchForm.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

import DropSort from '~/components/DropSort';

const cx = classNames.bind(styles);
function SearchForm() {
    const SelectOptionBox1 = [
        'California',
        'Texas',
        'Florida',
        'New York',
        'Illinois',
        'Washington',
        'Pennsylvania',
        'Ohio',
        'Georgia',
        'North Carolina',
    ];

    const SelectOptionBox2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    const SelectOptionBox3 = ['1', '2', '3', '4'];

    const SelectOptionBox4 = ['1', '2', '3', '4', '5', '6'];

    // ----------------------------------------------------------------
    // Logic xử lý input number
    const [bedroom, setBedroom] = useState(0);
    const [price, setPrice] = useState([100, 500000]);
    const [size, setSize] = useState([0, 1000]);

    // ----------------------------------------------------------------
    // Logic xử lý input text
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

    // Logic xử lý input text
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

    //
    const handleSelectOption1 = (selected) => {
        console.log('Selected from Box 1:', selected);
    };

    const handleSelectOption2 = (selected) => {
        console.log('Selected from Box 2:', selected);
    };

    const handleSelectOption3 = (selected) => {
        console.log('Selected from Box 3:', selected);
    };

    const handleSelectOption4 = (selected) => {
        console.log('Selected from Box 4:', selected);
    };

    // ----------------------------------------------------------------
    // render jsx
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
                {/* drop-sort Province/State */}
                <DropSort
                    options={SelectOptionBox1}
                    initialValue="Provinces / States" // Giá trị khởi tạo cho Box 1
                    onOptionSelect={handleSelectOption1}
                />

                {/* drop-sort Rooms */}
                <DropSort
                    options={SelectOptionBox2}
                    initialValue="Rooms" // Giá trị khởi tạo cho Box 2
                    onOptionSelect={handleSelectOption2}
                />

                {/* drop-sort Bath */}
                <DropSort
                    options={SelectOptionBox3}
                    initialValue="Bath: Any" // Giá trị khởi tạo cho Box 3
                    onOptionSelect={handleSelectOption3}
                />

                {/* drop-sort Beds */}
                <DropSort
                    options={SelectOptionBox4}
                    initialValue="Beds: Any" // Giá trị khởi tạo cho Box 4
                    onOptionSelect={handleSelectOption4}
                />
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
